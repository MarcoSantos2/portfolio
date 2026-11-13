import { ArrowDown, UserRound } from 'lucide-react';
import { projects } from '../content/projects';
import { TerminalPanel } from '../components/TerminalPanel';
import { ProjectCard } from '../components/ProjectCard';

export function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 id="hero-heading">
              I’m Marco, a full-stack software engineer with business experience.{' '}
              <span className="hero-statement">I build AI tools and multiplayer games<span className="hero-period">.</span></span>
            </h1>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View work <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="button button-secondary" href="/about"><UserRound size={16} aria-hidden="true" /> About me</a>
            </div>
          </div>
          <TerminalPanel />
        </div>
      </section>
      <section className="container work-section" id="work" aria-labelledby="work-heading">
        <h2 className="eyebrow section-path" id="work-heading">Selected work</h2>
        <div className="project-list">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </>
  );
}
