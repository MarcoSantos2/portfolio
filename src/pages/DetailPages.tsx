import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { githubUrl, linkedInUrl } from '../content/projects';
import type { Project } from '../content/projects';
import { ProjectMedia } from '../components/ProjectMedia';
import { HopsDemo } from '../components/ProjectDemos';

export function ProjectPage({ project }: { project: Project }) {
  return (
    <article className="container detail-page">
      <a className="back-link" href="/#work"><ArrowLeft size={16} aria-hidden="true" /> Selected work</a>
      <header className="detail-header">
        <p className="eyebrow section-path">~/work/{project.slug}</p>
        <h1>{project.name}</h1>
        <p className="detail-lede">{project.summary}</p>
        {project.primaryLink ? (
          <a className="button button-primary" href={project.primaryLink.url}>{project.primaryLink.label} <ArrowUpRight size={16} aria-hidden="true" /></a>
        ) : null}
      </header>
      <div className="detail-layout">
        <div className="detail-story">
          <h2>What I built</h2>
          <p>{project.contribution}</p>
          {project.caseStudy.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
          <ul className="tech-list" aria-label="Technologies and features">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        <aside className="detail-demo" aria-label={`${project.name} project media`}>
          <ProjectMedia project={project} />
          {project.slug === 'six-hops' ? <HopsDemo /> : null}
        </aside>
      </div>
    </article>
  );
}

export function AboutPage() {
  return (
    <article className="container detail-page about-page">
      <a className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Home</a>
      <header className="detail-header">
        <p className="eyebrow section-path">~/about</p>
        <h1>Marco Santos</h1>
        <p className="detail-lede">I’m a full-stack software engineer who builds real-time products, from conversational AI to multiplayer games.</p>
        <div className="profile-actions">
          <a className="button button-primary" href={linkedInUrl}>LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="button button-secondary" href={githubUrl}>GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </header>
      <div className="detail-story">
        <h2>Experience</h2>
        <p>I founded <a href="/work/wibo">WiBo</a> and built its voice interviewer, whiteboard practice flow, and debrief tools. At <a href="/work/aidconnect">AidConnect</a>, I worked on backend authentication and onboarding as a software engineering intern.</p>
        <h2>Education</h2>
        <p>I’m pursuing an M.S. in Computer Science at the University of Colorado Boulder. I also hold a B.A. in Psychology.</p>
      </div>
    </article>
  );
}
