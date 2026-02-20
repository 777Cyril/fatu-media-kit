export default function SectionHeader({ metaLabel, title }) {
  return (
    <div className="section-header">
      <span className="meta-text">{metaLabel}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
