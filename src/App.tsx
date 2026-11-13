import { Analytics } from '@vercel/analytics/react';
import { useLayoutEffect } from 'react';
import { ArrowLeft, Github, Linkedin, Terminal } from 'lucide-react';
import { githubUrl, linkedInUrl, projects } from './content/projects';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectPage } from './pages/DetailPages';
import { ExternalLink } from './components/ExternalLink';
import { observeSectionReveals } from './sectionReveals';

const socialLinks = [
  { href: githubUrl, label: 'GitHub profile', Icon: Github },
  { href: linkedInUrl, label: 'LinkedIn profile', Icon: Linkedin },
];

function SocialLinks() {
  return socialLinks.map(({ href, label, Icon }) => (
    <ExternalLink key={href} href={href} className="social-link" aria-label={label}>
      <Icon size={17} aria-hidden="true" />
    </ExternalLink>
  ));
}

const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
const isHome = pathname === '/';
const project = projects.find((item) => pathname === `/work/${item.slug}`);
const isAbout = pathname === '/about' || pathname === '/resume';

if (project || isAbout) {
  document.title = `${project?.name ?? 'About'} · Marco Santos`;
}

export function App() {
  useLayoutEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: 'instant' });
    return observeSectionReveals();
  }, []);

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
            <a href="/about" aria-current={isAbout ? 'page' : undefined}>About</a>
            <SocialLinks />
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        {isHome ? <HomePage /> : null}
        {project ? <ProjectPage project={project} /> : null}
        {isAbout ? <AboutPage /> : null}
        {!isHome && !project && !isAbout ? (
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
          <div className="footer-links">
            <SocialLinks />
          </div>
        </div>
      </footer>
      <Analytics />
    </>
  );
}
