export function TechStack({ technologies, label = 'Tech stack' }: { technologies: string[]; label?: string }) {
  return (
    <ul className="tech-list" aria-label={label}>
      {technologies.map((technology) => <li key={technology}>{technology}</li>)}
    </ul>
  );
}
