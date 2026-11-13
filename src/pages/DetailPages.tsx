import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '../content/projects';
import { ProjectMedia } from '../components/ProjectMedia';
import { HopsDemo } from '../components/ProjectDemos';
import { TechStack } from '../components/TechStack';
import { ExternalLink } from '../components/ExternalLink';

export function ProjectPage({ project }: { project: Project }) {
  return (
    <article className="container detail-page">
      <a className="back-link" href="/#work"><ArrowLeft size={16} aria-hidden="true" /> Selected work</a>
      <header className="detail-header">
        <p className="eyebrow section-path">~/work/{project.slug}</p>
        <h1>{project.name}</h1>
        <p className="detail-lede">{project.summary}</p>
        {project.primaryLink ? (
          <div className="profile-actions">
            <ExternalLink className="button button-primary" href={project.primaryLink.url}>{project.primaryLink.label} <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>
            {project.showcaseLink ? (
              <ExternalLink className="button button-secondary" href={project.showcaseLink.url}>{project.showcaseLink.label} <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>
            ) : null}
          </div>
        ) : null}
      </header>
      <div className="detail-layout">
        <div className="detail-story">
          <h2>What I built</h2>
          <p>{project.contribution}</p>
          {project.impact ? <p className="project-impact">{project.impact}</p> : null}
          {project.caseStudy.map((section) => (
            <section key={section.title} data-reveal="">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
          <TechStack technologies={project.technologies} />
        </div>
        <aside className="detail-demo" aria-label={`${project.name} project media`} data-reveal="">
          <ProjectMedia project={project} />
          {project.slug === 'six-hops' ? <HopsDemo /> : null}
        </aside>
      </div>
    </article>
  );
}
