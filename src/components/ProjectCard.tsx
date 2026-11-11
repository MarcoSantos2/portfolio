import { ArrowRight, ArrowUpRight, Clapperboard, Mic, Network } from 'lucide-react';
import { actorPath } from '../content/demos';
import type { Project } from '../content/projects';
import { HopsDemo, VoiceDemo } from './ProjectDemos';

export function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === 'wibo') {
    return (
      <div className="project-visual wibo-visual">
        <div className="visual-topline"><span><Mic size={13} aria-hidden="true" /> WiBo</span><span>Whiteboard session</span></div>
        <img src="/images/wibo-whiteboard.webp" width="1050" height="729" alt="WiBo’s whiteboard workspace with an interview prompt, drawing tools, and a timer." />
      </div>
    );
  }

  return (
    <div className="project-visual six-visual">
      <div className="visual-topline"><span><Clapperboard size={14} aria-hidden="true" /> Six Hops to Target</span><span>Example path</span></div>
      <div className="hops-preview">
        <div className="hops-preview-actors">
          <div><span>START</span><strong>{actorPath[0]}</strong></div>
          <Network size={19} aria-hidden="true" />
          <div><span>TARGET</span><strong>{actorPath[4]}</strong></div>
        </div>
        <div className="hops-preview-path">
          <span>{actorPath[1]}</span><ArrowRight size={13} aria-hidden="true" /><span>{actorPath[2]}</span><ArrowRight size={13} aria-hidden="true" /><span>{actorPath[3]}</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const titleId = `project-${project.slug}`;
  return (
    <article className={`project-card card-${project.slug}`} aria-labelledby={titleId}>
      <ProjectVisual project={project} />
      <div className="project-content">
        <p className="eyebrow project-category">{project.category}</p>
        <h3 id={titleId}>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">{project.contribution}</p>
        <div className="project-links">
          <a className="text-link" href={project.url} aria-label={`Try ${project.name}`}>Try it <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="text-link secondary-link" href={`/work/${project.slug}`} aria-label={`How I built ${project.name}`}>How I built it <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        {project.slug === 'wibo' ? <VoiceDemo /> : <HopsDemo />}
      </div>
    </article>
  );
}
