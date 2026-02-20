import ContentBlock from './ContentBlock';
import SectionHeader from './SectionHeader';

const partnerships = [
  {
    type: 'Series',
    title: 'Story-Driven Content Series',
    description: 'Multi-part series (3-5 videos) integrating your product into an ongoing narrative. Drives higher engagement and retention.',
  },
  {
    type: 'Integration',
    title: 'Vlog-Style Day-In-The-Life',
    description: 'Full-day vlog featuring your product in natural daily use. Includes 1 YouTube vlog (8-15 min) + 3-5 TikTok clips.',
  },
  {
    type: 'Showcase',
    title: 'Dedicated Product Feature',
    description: 'Focused content highlighting your product with honest assessment. "I tested [Product] for 30 days" format.',
  },
  {
    type: 'Ambassador',
    title: 'Recurring Brand Partnership',
    description: 'Ongoing collaboration across multiple months with regular organic integration to build deep brand familiarity.',
  },
];

export default function PartnershipsSection() {
  return (
    <section id="partnerships">
      <ContentBlock>
        <SectionHeader metaLabel="Collaboration" title="Partnership Opportunities" />

        <ul className="partnership-list">
          {partnerships.map((p) => (
            <li className="partnership-item" key={p.type}>
              <div className="p-type">{p.type}</div>
              <div className="p-details">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </ContentBlock>
    </section>
  );
}
