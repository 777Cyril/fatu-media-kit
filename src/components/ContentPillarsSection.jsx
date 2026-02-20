import ContentBlock from './ContentBlock';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    title: 'Hair & Beauty',
    percentage: '40% of content',
    description:
      'Natural hair routines, protective styling, and honest product reviews. Brand opportunities in styling tools, skincare, and wellness.',
  },
  {
    title: 'Lifestyle Rituals',
    percentage: '35% of content',
    description:
      'Morning routines, Sunday resets, and intentional living practices. Integrating home goods, productivity tools, and coffee culture.',
  },
  {
    title: 'Storytelling',
    percentage: '25% of content',
    description:
      'Vlog-style content capturing real NYC life. Authentic moments that build community trust and drive emotional investment.',
  },
];

export default function ContentPillarsSection() {
  return (
    <section id="content-pillars">
      <ContentBlock>
        <SectionHeader metaLabel="Content Mix" title="Content Pillars" />
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div className="pillar-card" key={pillar.title}>
              <h3 className="pillar-title">{pillar.title}</h3>
              <span className="pillar-percentage">{pillar.percentage}</span>
              <p className="pillar-description">{pillar.description}</p>
            </div>
          ))}
        </div>
      </ContentBlock>
    </section>
  );
}
