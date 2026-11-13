import { ArrowUpRight, Download } from 'lucide-react';
import { BusinessMetrics } from '../components/BusinessMetrics';
import { TechStack } from '../components/TechStack';
import { businessExperience, resumeUrl, technicalSkills } from '../content/profile';
import { githubUrl, linkedInUrl } from '../content/projects';
import { ExternalLink } from '../components/ExternalLink';

export function AboutPage() {
  return (
    <article className="container detail-page about-page">
      <header className="detail-header">
        <h1 className="eyebrow section-path">~/about</h1>
        <p className="detail-lede">I’m Marco Santos, a full-stack software engineer with seven years of experience running a client-facing business. Working directly with customers informs how I build software.</p>
        <div className="profile-actions">
          <ExternalLink className="button button-primary" href={linkedInUrl}>LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>
          <ExternalLink className="button button-secondary" href={githubUrl}>GitHub <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>
          <a className="button button-secondary" href={resumeUrl} download>Download résumé (PDF) <Download size={16} aria-hidden="true" /></a>
        </div>
      </header>
      <div className="profile-layout">
        <section className="detail-story" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <div className="experience-list">
            <section className="experience-item" aria-labelledby="wibo-experience">
              <p className="experience-dates">February 2025 – present</p>
              <h3 id="wibo-experience">Founder &amp; Full-Stack Software Engineer · <a href="/work/wibo">WiBo</a></h3>
              <ul className="experience-bullets">
                <li>Built a Node.js and Express API with Firebase authentication, PostgreSQL and TypeORM persistence, and plan-based access for timed interview sessions.</li>
                <li>Integrated OpenAI Realtime voice through a WebSocket relay with short-lived session tickets and usage limits.</li>
                <li>Built a document retrieval pipeline with OpenAI embeddings and pgvector to give the interviewer relevant context.</li>
                <li>Developed the React and Excalidraw whiteboard, session history, and Stripe checkout. Added Jest coverage and GitHub Actions CI for core backend workflows.</li>
              </ul>
            </section>
            <section className="experience-item" aria-labelledby="aidconnect-experience">
              <p className="experience-dates">January 2024 – February 2025</p>
              <h3 id="aidconnect-experience">Backend Software Engineering Intern · <a href="/work/aidconnect">AidConnect</a></h3>
              <ul className="experience-bullets">
                <li>Built calendar and scheduling features to help teams coordinate tasks, shifts, and activities.</li>
                <li>Developed account onboarding and authentication, including sign-up, Google OAuth, and password recovery.</li>
                <li>Built in-app feedback and communication modules and automated email notifications with EJS templates.</li>
                <li>Introduced sprint planning and stand-ups to improve team coordination.</li>
              </ul>
            </section>
            <section className="experience-item" id="business-experience" aria-labelledby="business-experience-heading">
              <p className="experience-dates">{businessExperience.dates}</p>
              <h3 id="business-experience-heading">{businessExperience.role} · {businessExperience.company}</h3>
              <ul className="experience-bullets">
                {businessExperience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <BusinessMetrics />
            </section>
          </div>
        </section>
        <div className="detail-story profile-sidebar">
          <section aria-labelledby="education-heading">
            <h2 id="education-heading">Education</h2>
            <ul className="profile-list">
              <li><strong>M.S. in Computer Science</strong><span>University of Colorado Boulder · Expected January 2027</span></li>
              <li><strong>B.A. in Psychology</strong><span>FAE Centro Universitário</span></li>
              <li><strong>A.A.S. in Business Administration</strong><span>Midwestern Career College</span></li>
            </ul>
          </section>
          <section aria-labelledby="certifications-heading">
            <h2 id="certifications-heading">Certifications</h2>
            <ul className="profile-list">
              <li>Graduate Certificate in Artificial Intelligence · University of Colorado Boulder</li>
              <li>AWS Certified Cloud Practitioner</li>
              <li>Professional Scrum Master I</li>
              <li>Python Institute PCEP and PCAP</li>
            </ul>
          </section>
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading">Technical skills</h2>
            {technicalSkills.map(({ label, technologies }) => (
              <div className="skill-group" key={label}>
                <h3>{label}</h3>
                <TechStack technologies={technologies} label={label} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}
