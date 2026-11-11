import { ArrowLeft, ArrowUpRight, Printer } from 'lucide-react';
import { githubUrl, projects } from '../content/projects';
import type { Project } from '../content/projects';
import { ProjectVisual } from '../components/ProjectCard';
import { HopsDemo, VoiceDemo } from '../components/ProjectDemos';

export function ProjectPage({ project }: { project: Project }) {
  return (
    <article className="container detail-page">
      <a className="back-link" href="/#work"><ArrowLeft size={16} aria-hidden="true" /> Selected work</a>
      <header className="detail-header">
        <p className="eyebrow section-path">~/work/{project.slug}</p>
        <h1>{project.name}</h1>
        <p className="detail-lede">{project.summary}</p>
        <a className="button button-primary" href={project.url}>Visit {project.domain} <ArrowUpRight size={16} aria-hidden="true" /></a>
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
          <ul className="tech-list" aria-label="Technologies">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        <aside className="detail-demo" aria-label={`${project.name} demo`}>
          <ProjectVisual project={project} />
          {project.slug === 'wibo' ? <VoiceDemo /> : <HopsDemo />}
        </aside>
      </div>
    </article>
  );
}

export function ResumePage() {
  return (
    <article className="container detail-page resume-page">
      <a className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Home</a>
      <header className="detail-header">
        <p className="eyebrow section-path">~/resume</p>
        <h1>Marco Santos</h1>
        <p className="detail-lede">Full-stack software engineer</p>
        <div className="resume-actions">
          <button className="button button-primary" type="button" onClick={() => window.print()}><Printer size={16} aria-hidden="true" /> Print / save PDF</button>
          <a className="button button-secondary" href={githubUrl}>GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </header>
      <div className="detail-story">
        <h2>Selected engineering work</h2>
        {projects.map((project) => (
          <section key={project.slug}>
            <h3><a href={`/work/${project.slug}`}>{project.name}</a></h3>
            <p>{project.contribution}</p>
          </section>
        ))}
        <h2>Technical skills</h2>
        <p>TypeScript, JavaScript, Python, React, Vite, Node.js, Express, PostgreSQL, REST APIs, WebSockets, GitHub Actions, and Vercel.</p>
        <h2>Education</h2>
        <p>University of Colorado Boulder · M.S. in Computer Science, in progress</p>
        <p>B.S. in Psychology</p>
      </div>
    </article>
  );
}
