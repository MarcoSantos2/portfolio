import { ArrowLeft, ArrowUpRight, Github, Terminal } from 'lucide-react';
import { githubUrl, projects } from './content/projects';
import { HomePage } from './pages/HomePage';
import { ProjectPage, ResumePage } from './pages/DetailPages';

const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
const isHome = pathname === '/';
const project = projects.find((item) => pathname === `/work/${item.slug}`);
const isResume = pathname === '/resume';

if (project || isResume) {
  document.title = `${project?.name ?? 'Résumé'} · Marco Santos`;
}

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="wordmark" aria-label="Marco Santos, home">
            <span className="brand-icon"><Terminal size={16} aria-hidden="true" /></span>
            <span>marco<span className="wordmark-slash">/</span>santos</span>
          </a>
          <nav aria-label="Main navigation" className="main-nav">
            <a href="/#work">Work</a>
            <a href="/resume" aria-current={isResume ? 'page' : undefined}>Résumé</a>
            <a href={githubUrl} className="header-github" aria-label="GitHub profile"><Github size={16} aria-hidden="true" /><span>GitHub</span></a>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        {isHome ? <HomePage /> : null}
        {project ? <ProjectPage project={project} /> : null}
        {isResume ? <ResumePage /> : null}
        {!isHome && !project && !isResume ? (
          <div className="container detail-page missing-page">
            <p className="eyebrow">404 / Page not found</p>
            <h1>Lost your path?</h1>
            <a className="text-link" href="/"><ArrowLeft size={16} /> Back to homepage</a>
          </div>
        ) : null}
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Marco Santos</span>
          <a href={githubUrl}>GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}
