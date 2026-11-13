import { businessExperience } from '../content/profile';

export function BusinessMetrics() {
  return (
    <dl className="business-metrics" aria-label="Salvatore’s Chicago management results">
      {businessExperience.metrics.map(({ value, label }) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
