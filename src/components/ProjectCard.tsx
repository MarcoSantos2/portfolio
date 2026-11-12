import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '../content/projects';
import { HopsDemo } from './ProjectDemos';
import { ProjectMedia } from './ProjectMedia';
import { TechStack } from './TechStack';
import { ExternalLink } from './ExternalLink';

export function ProjectCard({ project }: { project: Project }) {
  const titleId = `project-${project.slug}`;
  const nameId = `${titleId}-name`;
  return (
    <article className={`project-card card-${project.slug}`} aria-labelledby={`${nameId} ${titleId}`}>
      <div className="project-content">
        <p id={nameId} className="eyebrow project-name">{project.name}</p>
        <h3 id={titleId}>{project.summary}</h3>
        <p className="project-contribution">{project.contribution}</p>
        {project.impact ? <p className="project-impact">{project.impact}</p> : null}
        <TechStack technologies={project.technologies} />
        <div className="project-links">
          {project.primaryLink ? (
            <ExternalLink className="text-link" href={project.primaryLink.url}>{project.primaryLink.label} <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>
          ) : null}
          <a className="text-link secondary-link" href={`/work/${project.slug}`} aria-label={`How I built ${project.name}`}>How I built it <ArrowRight size={16} aria-hidden="true" /></a>
          {project.showcaseLink ? (
            <ExternalLink className="text-link secondary-link" href={project.showcaseLink.url}>{project.showcaseLink.label} <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>
          ) : null}
        </div>
        {project.slug === 'six-hops' ? <HopsDemo /> : null}
      </div>
      <div className="project-preview">
        <ProjectMedia project={project} />
        {project.testimonial ? (
          <figure className="project-quote">
            <blockquote>{project.testimonial.quote}</blockquote>
            <figcaption>— {project.testimonial.author}</figcaption>
          </figure>
        ) : null}
      </div>
    </article>
  );
}
