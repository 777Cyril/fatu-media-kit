import { useEffect, useRef } from 'react';

const pillars = [
  {
    title: 'Hair & Beauty',
    percentage: '40% of content',
    description:
      'Natural hair routines, protective styling, and honest product reviews. Brand opportunities in styling tools, skincare, and wellness.',
    offset: '0px',
  },
  {
    title: 'Lifestyle Rituals',
    percentage: '35% of content',
    description:
      'Morning routines, Sunday resets, and intentional living practices. Integrating home goods, productivity tools, and coffee culture.',
    offset: '80px',
  },
  {
    title: 'Storytelling',
    percentage: '25% of content',
    description:
      'Vlog-style content capturing real NYC life. Authentic moments that build community trust and drive emotional investment.',
    offset: '160px',
  },
];

function PillarCard({ pillar }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="pillar-card"
      ref={ref}
      style={{ marginTop: pillar.offset }}
    >
      <div className="pillar-card-inner">
        <h3 className="pillar-title">{pillar.title}</h3>
        <span className="pillar-percentage">{pillar.percentage}</span>
        <p className="pillar-description">{pillar.description}</p>
      </div>
    </div>
  );
}

export default function ContentPillarsSection() {
  return (
    <section id="content-pillars">
      <div className="pillars-section-header">
        <span className="meta-text">Content Mix</span>
        <h2 className="section-title" style={{ marginTop: '1rem' }}>Content Pillars</h2>
      </div>
      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.title} pillar={pillar} />
        ))}
      </div>
    </section>
  );
}
