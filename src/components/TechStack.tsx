import { AudioLines, Braces, Cable, ChartNoAxesColumnIncreasing, PanelsTopLeft, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  siExpress, siFirebase, siMysql, siNodedotjs, siPostgresql, siPython, siPytorch,
  siReact, siScikitlearn, siTypeorm, siTypescript,
} from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

const brandIcons: Partial<Record<string, SimpleIcon>> = {
  Express: siExpress,
  Firebase: siFirebase,
  MySQL: siMysql,
  'Node.js': siNodedotjs,
  PostgreSQL: siPostgresql,
  Python: siPython,
  PyTorch: siPytorch,
  React: siReact,
  'scikit-learn': siScikitlearn,
  TypeORM: siTypeorm,
  TypeScript: siTypescript,
};

const technologyIcons: Partial<Record<string, LucideIcon>> = {
  'Canvas 2D': PanelsTopLeft,
  EJS: Braces,
  'OpenAI Realtime': AudioLines,
  'TF-IDF': ChartNoAxesColumnIncreasing,
  'Web Workers': Workflow,
  WebSockets: Cable,
};

function TechnologyIcon({ technology }: { technology: string }) {
  const brand = brandIcons[technology];
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
        <path d={brand.path} />
      </svg>
    );
  }

  const Icon = technologyIcons[technology];
  return Icon ? <Icon size={13} aria-hidden="true" /> : null;
}

export function TechStack({ technologies, label = 'Tech stack', showIcons = false }: {
  technologies: string[];
  label?: string;
  showIcons?: boolean;
}) {
  return (
    <ul className="tech-list" aria-label={label}>
      {technologies.map((technology) => (
        <li key={technology}>
          {showIcons && <TechnologyIcon technology={technology} />}
          {technology}
        </li>
      ))}
    </ul>
  );
}
