import { ArrowRight, Check, Clapperboard, Play, RotateCcw } from 'lucide-react';
import { useRef, useState } from 'react';
import { actorPath, filmChoices, voiceTurns } from '../content/demos';

export function VoiceDemo() {
  const [activeTurn, setActiveTurn] = useState(-1);
  const audio = useRef<HTMLAudioElement>(null);

  return (
    <details className="demo voice-demo" onToggle={(event) => {
      if (!event.currentTarget.open) audio.current?.pause();
    }}>
      <summary onClick={(event) => {
        if (!event.currentTarget.closest('details')?.open) {
          void audio.current?.play().catch(() => {
            // Native audio controls remain available when playback is blocked.
          });
        }
      }}><Play size={15} aria-hidden="true" /> Play voice demo</summary>
      <div className="demo-body">
        <p className="demo-note">Illustrative interview with synthesized voices.</p>
        <audio
          aria-label="WiBo illustrative interview"
          ref={audio}
          controls
          preload="none"
          src="/media/wibo-interview.mp3"
          onTimeUpdate={(event) => {
            const elapsed = event.currentTarget.currentTime;
            setActiveTurn(voiceTurns.findLastIndex((turn) => turn.start <= elapsed));
          }}
          onEnded={() => setActiveTurn(-1)}
        >
          <a href="/media/wibo-interview.mp3">Download the interview sample</a>
        </audio>
        <ol className="voice-transcript" aria-label="Interview transcript">
          {voiceTurns.map((turn, index) => (
            <li key={turn.start} data-active={index === activeTurn}>
              <strong>{turn.speaker}</strong><span>{turn.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
}

export function HopsDemo() {
  const [choice, setChoice] = useState<string | null>(null);
  const solved = choice === actorPath[3];

  return (
    <details className="demo hops-demo">
      <summary><Clapperboard size={15} aria-hidden="true" /> Try one connection</summary>
      <div className="demo-body">
        <p>Which film connects <strong>Robin Wright</strong> to <strong>Cary Elwes</strong>?</p>
        <div className="film-choices" role="group" aria-label="Pick a film">
          {filmChoices.map((film) => (
            <button key={film} type="button" onClick={() => setChoice(film)} disabled={solved}>
              {film}
              {solved && film === choice ? <Check size={15} aria-hidden="true" /> : <ArrowRight size={14} aria-hidden="true" />}
            </button>
          ))}
        </div>
        <p className="demo-feedback" role="status">
          {solved ? 'You found it! Robin Wright plays Buttercup and Cary Elwes plays Westley.' : choice ? `${choice} doesn’t connect this pair. Try another film.` : ''}
        </p>
        {solved ? <button type="button" className="reset-demo" onClick={() => setChoice(null)}><RotateCcw size={13} aria-hidden="true" /> Try again</button> : null}
      </div>
    </details>
  );
}
