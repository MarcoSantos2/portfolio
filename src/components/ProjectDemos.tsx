import { ArrowRight, Check, Clapperboard, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { actorPath, filmChoices } from '../content/demos';

export function HopsDemo() {
  const [choice, setChoice] = useState<string | null>(null);
  const solved = choice === actorPath[3];

  return (
    <details className="demo hops-demo">
      <summary><Clapperboard size={15} aria-hidden="true" /> Try one connection</summary>
      <div className="demo-body">
        <p>Which film connects <strong>Robin Wright</strong> to <strong>Cary Elwes</strong>?</p>
        <div className="film-choices" role="group" aria-label="Pick a film">
          {filmChoices.map((film) => (
            <button key={film} type="button" onClick={() => setChoice(film)} disabled={solved}>
              {film}
              {solved && film === choice ? <Check size={15} aria-hidden="true" /> : <ArrowRight size={14} aria-hidden="true" />}
            </button>
          ))}
        </div>
        <p className="demo-feedback" role="status">
          {solved ? 'You found it! Robin Wright plays Buttercup and Cary Elwes plays Westley.' : choice ? `${choice} doesn’t connect this pair. Try another film.` : ''}
        </p>
        {solved ? <button type="button" className="reset-demo" onClick={() => setChoice(null)}><RotateCcw size={13} aria-hidden="true" /> Try again</button> : null}
      </div>
    </details>
  );
}
