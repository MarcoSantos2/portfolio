import { ArrowDown, FileText } from 'lucide-react';
import { useLayoutEffect } from 'react';
import { projects } from '../content/projects';
import { TerminalPanel } from '../components/TerminalPanel';
import { ProjectCard } from '../components/ProjectCard';

export function HomePage() {
  useLayoutEffect(() => {
    if (window.location.hash === '#work') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'instant' });
    }
  }, []);

  return (
    <>
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="signal-dot" /> FULL-STACK SOFTWARE ENGINEER</p>
            <h1 id="hero-name">Marco<span className="hero-name-break"> </span>Santos<span className="hero-period">.</span></h1>
            <p className="hero-intro">I build software people can use, from real-time AI interviews to multiplayer games.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View work <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="button button-secondary" href="/resume"><FileText size={16} aria-hidden="true" /> Résumé</a>
            </div>
          </div>
          <TerminalPanel />
        </div>
      </section>
      <section className="container work-section" id="work" aria-labelledby="work-heading">
        <p className="eyebrow section-path"><span aria-hidden="true">~/</span>work</p>
        <h2 id="work-heading">Selected work</h2>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </>
  );
}
