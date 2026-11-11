import { ArrowUpRight, CornerDownLeft, Terminal, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import { actorPath } from '../content/demos';
import { githubUrl, projects } from '../content/projects';

const destinations = new Map([
  ['work', '/#work'],
  ['open work', '/#work'],
  ['open wibo', '/work/wibo'],
  ['open six-hops', '/work/six-hops'],
  ['resume', '/resume'],
  ['open resume', '/resume'],
  ['github', githubUrl],
]);

type CommandResult = { command: string; text?: string; showProjects?: boolean };

function IntroReplay() {
  return (
    <div className="terminal-replay" aria-label="Example from Six Hops to Target. Tom Hanks to Cary Elwes in two hops.">
      <div aria-hidden="true">
        <div className="replay-command"><span className="terminal-prompt">$</span> ./six-hops find-path</div>
        <ol className="replay-path">
          {actorPath.map((node, index) => (
            <li className={index % 2 ? 'replay-film' : 'replay-actor'} key={node} style={{ animationDelay: `${0.22 + index * 0.22}s` }}>
              <span className="replay-marker">{index % 2 ? '│' : '◆'}</span>{node}
            </li>
          ))}
        </ol>
        <div className="replay-success"><span>✓</span> Path found in 2 hops</div>
      </div>
    </div>
  );
}

export function TerminalPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [results, setResults] = useState<CommandResult[]>([]);
  const field = useRef<HTMLInputElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const log = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) field.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [results, isOpen]);

  function close() {
    setIsOpen(false);
    toggle.current?.focus();
  }

  function handleKey(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      close();
    }
  }

  function run(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = input.trim().toLowerCase().replace(/\s+/g, ' ');
    setInput('');
    if (!command) return;

    const destination = destinations.get(command);
    if (destination) {
      window.location.assign(destination);
      if (destination === '/#work') close();
      return;
    }

    if (command === 'clear') {
      setResults([]);
      return;
    }

    let result: CommandResult;
    switch (command) {
      case 'help':
        result = { command, text: 'ls projects · open wibo · open six-hops · resume · github · whoami · clear' };
        break;
      case 'ls':
      case 'ls projects':
      case 'projects':
        result = { command, showProjects: true };
        break;
      case 'whoami':
        result = { command, text: 'Marco Santos · Full-stack software engineer' };
        break;
      default:
        result = { command, text: 'Unknown command. Type help for available commands.' };
    }
    setResults((previous) => [...previous.slice(-14), result]);
  }

  return (
    <section className="terminal-panel" aria-label="Portfolio terminal" onKeyDown={handleKey}>
      <div className="terminal-bar">
        <div className="window-lights" aria-hidden="true"><i /><i /><i /></div>
        <span>{isOpen ? '~/portfolio' : '~/six-hops'}</span>
        <Terminal size={15} aria-hidden="true" />
      </div>
      <div className="terminal-body">
        {isOpen ? (
          <div className="terminal-console">
            <p className="terminal-hint">Try <code>ls projects</code> or <code>help</code>.</p>
            <div className="command-log" ref={log} role="log" aria-label="Command output">
              {results.map((result, index) => (
                <div className="command-result" key={`${index}-${result.command}`}>
                  <div><span className="terminal-prompt">$</span> {result.command}</div>
                  {result.text ? <p>{result.text}</p> : null}
                  {result.showProjects ? (
                    <ul>
                      {projects.map((project) => <li key={project.slug}><a href={`/work/${project.slug}`}>{project.name} <ArrowUpRight size={13} aria-hidden="true" /></a></li>)}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
            <form className="command-form" onSubmit={run}>
              <span className="terminal-prompt" aria-hidden="true">$</span>
              <input aria-label="Terminal command" ref={field} value={input} onChange={(event) => setInput(event.target.value)} autoComplete="off" autoCapitalize="none" spellCheck={false} />
              <button type="submit" aria-label="Run command"><CornerDownLeft size={17} aria-hidden="true" /></button>
            </form>
          </div>
        ) : <IntroReplay />}
      </div>
      <div className="terminal-footer">
        <span>{isOpen ? 'Keyboard input enabled' : 'Six Hops to Target'}</span>
        <button type="button" ref={toggle} aria-expanded={isOpen} onClick={isOpen ? close : () => setIsOpen(true)}>
          {isOpen ? <X size={14} aria-hidden="true" /> : <Terminal size={14} aria-hidden="true" />}
          {isOpen ? 'Close terminal' : 'Open terminal'}
        </button>
      </div>
    </section>
  );
}
