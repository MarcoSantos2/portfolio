import { ArrowDown, ArrowRight, UserRound } from 'lucide-react';
import { businessExperience } from '../content/profile';
import { projects } from '../content/projects';
import { BusinessMetrics } from '../components/BusinessMetrics';
import { TerminalPanel } from '../components/TerminalPanel';
import { ProjectCard } from '../components/ProjectCard';

export function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-identity">I’m <strong>Marco Santos</strong>, a full-stack software engineer.</p>
            <h1 id="hero-heading">I build AI tools and multiplayer games<span className="hero-period">.</span></h1>
            <p className="hero-intro">Six years running a client-facing business taught me how to lead a team, listen to customers, and make decisions that improve the product.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View work <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="button button-secondary" href="/about"><UserRound size={16} aria-hidden="true" /> About me</a>
            </div>
          </div>
          <TerminalPanel />
        </div>
      </section>
      <section className="container work-section" id="work" aria-labelledby="work-heading">
        <p className="eyebrow section-path"><span aria-hidden="true">~/</span>work</p>
        <h2 id="work-heading">Selected work</h2>
        <div className="project-list">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
      <section className="business-section" aria-labelledby="business-heading">
        <div className="container business-inner">
          <div>
            <h2 id="business-heading">Business leadership</h2>
            <p className="business-role">{businessExperience.role} · {businessExperience.company}</p>
            <p className="business-summary">{businessExperience.summary}</p>
            <a className="text-link" href="/about#business-experience">Read about my experience <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <BusinessMetrics />
        </div>
      </section>
    </>
  );
}
