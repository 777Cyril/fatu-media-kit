import ContentBlock from './ContentBlock';
import SectionHeader from './SectionHeader';

const stats = [
  { number: '38K', label: 'Total Following' },
  { number: '20M+', label: '90-Day Views' },
  { number: '8.3%', label: 'TikTok Engagement' },
];

const demographics = [
  { label: 'Gender', value: '91% Female' },
  { label: 'Core Age', value: '25-30 Years' },
  { label: 'Location', value: 'NYC, London, Lagos' },
];

const interests = ['Hair Care', 'Cosmetics', 'Fashion', 'Intentional Living', 'Skincare', 'Wellness'];

export default function PerformanceSection() {
  return (
    <section id="performance">
      <ContentBlock>
        <SectionHeader metaLabel="Performance" title="Platform Reach" />

        <div className="stats-container">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="audience-split" style={{ marginTop: '4rem' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Demographics</h3>
            <ul className="demo-list">
              {demographics.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <b>{item.value}</b>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Audience Interests</h3>
            <p style={{ marginBottom: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
              My audience is actively shopping for beauty and lifestyle products.
            </p>
            <div className="tag-cloud">
              {interests.map((interest) => (
                <span className="tag" key={interest}>{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </ContentBlock>
    </section>
  );
}
