import { ArrowRight, ArrowUpRight, FileCode2 } from 'lucide-react';
import { useState } from 'react';
import { notebooks } from '../content/projects';
import type { Project } from '../content/projects';
import { ExternalLink } from './ExternalLink';

const screenshots = [
  { label: 'Home', src: '/images/six-hops-home.webp', alt: 'Six Hops homepage with the daily challenge, multiplayer button, and an illustrated actor-to-actor example.' },
  { label: 'Multiplayer', src: '/images/six-hops-multiplayer.webp', alt: 'Live Six Hops race showing both players, the shared timer, and the start and target actors.' },
  { label: 'Movie picker', src: '/images/six-hops-movie-picker.webp', alt: 'Movie and TV picker showing Jason Statham’s titles during a multiplayer race.' },
  { label: 'Race result', src: '/images/six-hops-results.webp', alt: 'Six Hops win screen awarding three points and showing the winner’s path from Jason Statham to Scarlett Johansson.' },
];

const authFlows = {
  'Sign in': [
    { title: 'Account entry', text: 'Email and password or Google sign-in' },
    { title: 'Identity check', text: 'Express middleware and the user service' },
    { title: 'Session and access', text: 'Session token with role and permission checks' },
  ],
  'Password recovery': [
    { title: 'Reset request', text: 'Start from the account’s email address' },
    { title: 'Verify reset', text: 'Email a reset link with an expiration time' },
    { title: 'Change password', text: 'Update the password and clear the reset state' },
  ],
} as const;

function SixHopsGallery() {
  const [index, setIndex] = useState(0);
  const screenshot = screenshots[index];
  return (
    <figure className="project-media screenshot-gallery">
      <div className="project-media-screen gallery-screen" id="six-hops-screenshot">
        <img key={screenshot.src} src={screenshot.src} alt={screenshot.alt} loading="lazy" decoding="async" />
      </div>
      <figcaption className="media-switcher" aria-label="Six Hops screenshots">
        {screenshots.map((item, position) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={position === index}
            aria-controls="six-hops-screenshot"
            onClick={() => setIndex(position)}
          >
            {item.label}
          </button>
        ))}
      </figcaption>
    </figure>
  );
}

function AuthFlow() {
  const [selected, setSelected] = useState<keyof typeof authFlows>('Sign in');
  return (
    <div className="project-media auth-media">
      <div className="media-switcher" role="group" aria-label="Authentication flows">
        {Object.keys(authFlows).map((flow) => {
          const key = flow as keyof typeof authFlows;
          return <button key={key} type="button" aria-pressed={selected === key} aria-controls="aidconnect-flow" onClick={() => setSelected(key)}>{key}</button>;
        })}
      </div>
      <ol className="auth-flow" id="aidconnect-flow" aria-live="polite">
        {authFlows[selected].map((step, index, steps) => (
          <li key={step.title}>
            <div className="auth-step"><strong>{step.title}</strong><span>{step.text}</span></div>
            {index < steps.length - 1 ? <ArrowRight className="auth-arrow" size={17} aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function NotebookLinks() {
  return (
    <div className="project-media notebook-list">
      {notebooks.map((notebook) => (
        <ExternalLink className="notebook" href={notebook.url} key={notebook.name}>
          <FileCode2 size={22} className="notebook-icon" aria-hidden="true" />
          <div>
            <p className="eyebrow">{notebook.area}</p>
            <h3>{notebook.name}</h3>
            <p>{notebook.summary}</p>
            <p className="notebook-result">{notebook.result}</p>
          </div>
          <ArrowUpRight size={17} aria-hidden="true" />
        </ExternalLink>
      ))}
    </div>
  );
}

export function ProjectMedia({ project }: { project: Project }) {
  switch (project.slug) {
    case 'wibo':
      return (
        <figure className="project-media video-media">
          <video
            aria-label="Recorded WiBo voice interview"
            controls
            playsInline
            preload="none"
            poster="/images/wibo-interview-poster.webp"
            width="960"
            height="540"
          >
            <source src="/media/wibo-interview.mp4" type="video/mp4" />
            <track kind="captions" src="/media/wibo-interview.en.vtt" srcLang="en" label="English" default />
            <a href="/media/wibo-interview.mp4">Download the WiBo recording</a>
          </video>
          <figcaption className="video-caption">Recorded WiBo session. Clarifying who the self-checkout redesign is for.</figcaption>
        </figure>
      );
    case 'six-hops':
      return <SixHopsGallery />;
    case 'gravity-rules':
      return (
        <figure className="project-media video-media">
          <video
            aria-label="Gravity Rules gameplay"
            aria-describedby="gravity-gameplay-caption"
            controls
            muted
            playsInline
            preload="none"
            poster="/images/gravity-rules.webp"
            width="960"
            height="540"
          >
            <source src="/media/gravity-rules-gameplay.mp4" type="video/mp4" />
            <a href="/media/gravity-rules-gameplay.mp4">Download the gameplay clip</a>
          </video>
          <figcaption className="video-caption" id="gravity-gameplay-caption">
            Gravity shifts mid-round as players dodge hazards, collect stars, and chase the crown.
          </figcaption>
        </figure>
      );
    case 'aidconnect':
      return <AuthFlow />;
    case 'kaggle':
      return <NotebookLinks />;
  }
}
