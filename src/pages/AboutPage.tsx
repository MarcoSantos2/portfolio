import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import { BusinessMetrics } from '../components/BusinessMetrics';
import { TechStack } from '../components/TechStack';
import { businessExperience, resumeUrl } from '../content/profile';
import { githubUrl, linkedInUrl } from '../content/projects';

export function AboutPage() {
  return (
    <article className="container detail-page about-page">
      <a className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Home</a>
      <header className="detail-header">
        <p className="eyebrow section-path">~/about</p>
        <h1>About me</h1>
        <p className="detail-lede">I’m Marco Santos, a full-stack software engineer with six years of experience leading a client-facing business. I bring both perspectives to the products I build.</p>
        <div className="profile-actions">
          <a className="button button-primary" href={linkedInUrl}>LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="button button-secondary" href={githubUrl}>GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
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
              <p>I took WiBo from idea to launch, building the real-time voice interviewer, whiteboard, and debrief. I also built document retrieval to give the interviewer context and added automated tests for the API, billing, and voice workflows.</p>
            </section>
            <section className="experience-item" id="business-experience" aria-labelledby="business-experience-heading">
              <p className="experience-dates">{businessExperience.dates}</p>
              <h3 id="business-experience-heading">{businessExperience.role} · {businessExperience.company}</h3>
              <p>{businessExperience.summary}</p>
              <p>{businessExperience.growth}</p>
              <BusinessMetrics />
            </section>
            <section className="experience-item" aria-labelledby="aidconnect-experience">
              <p className="experience-dates">January 2024 – February 2025</p>
              <h3 id="aidconnect-experience">Backend Software Engineering Intern · <a href="/work/aidconnect">AidConnect</a></h3>
              <p>I built scheduling and shift-management features and worked on account onboarding, Google sign-in, password recovery, and email notifications for healthcare aides.</p>
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
            <TechStack technologies={['TypeScript', 'Python', 'React', 'Node.js', 'Express', 'PostgreSQL', 'WebSockets', 'OpenAI Realtime', 'Docker', 'GitHub Actions']} />
          </section>
        </div>
      </div>
    </article>
  );
}
