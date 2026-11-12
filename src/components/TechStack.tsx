export function TechStack({ technologies }: { technologies: string[] }) {
  return (
    <ul className="tech-list" aria-label="Tech stack">
      {technologies.map((technology) => <li key={technology}>{technology}</li>)}
    </ul>
  );
}
