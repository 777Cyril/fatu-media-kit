import ContentBlock from './ContentBlock';
import SectionHeader from './SectionHeader';

export default function AboutSection() {
  return (
    <section id="about">
      <ContentBlock>
        <SectionHeader metaLabel="The Creator" title="About Fatu" />

        <div className="about-grid">
          <div className="about-text">
            <div className="highlight-text">
              "I create story-driven vlogs that make my audience feel like they're living life alongside me."
            </div>
            <p>I'm Fatu—a lifestyle and beauty creator based in New York City, bringing warmth, humor, and authenticity to everything I create.</p>
            <p>My content centers on the art of living intentionally: how I care for my natural hair, curate my daily routines, navigate life in NYC, and show up with style and presence.</p>
            <p>I'm a professional video editor and creative strategist, which means every piece of content is thoughtfully crafted with cinematic quality.</p>
          </div>

          <div className="stats-column">
            <div className="viral-box">
              <span className="meta-text">Viral Series Proof</span>
              <div className="viral-number">12M+</div>
              <span className="meta-text">Views on "Ponytail Journey"</span>
            </div>
          </div>
        </div>
      </ContentBlock>
    </section>
  );
}
