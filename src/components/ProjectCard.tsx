import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '../content/projects';
import { HopsDemo } from './ProjectDemos';
import { ProjectMedia } from './ProjectMedia';

export function ProjectCard({ project }: { project: Project }) {
  const titleId = `project-${project.slug}`;
  return (
    <article className={`project-card card-${project.slug}`} aria-labelledby={titleId}>
      <div className="project-content">
        <p className="eyebrow project-category">{project.category}</p>
        <h3 id={titleId}>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">{project.contribution}</p>
        <div className="project-links">
          {project.primaryLink ? (
            <a className="text-link" href={project.primaryLink.url}>{project.primaryLink.label} <ArrowUpRight size={16} aria-hidden="true" /></a>
          ) : null}
          <a className="text-link secondary-link" href={`/work/${project.slug}`} aria-label={`How I built ${project.name}`}>How I built it <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        {project.slug === 'six-hops' ? <HopsDemo /> : null}
      </div>
      <ProjectMedia project={project} />
    </article>
  );
}
