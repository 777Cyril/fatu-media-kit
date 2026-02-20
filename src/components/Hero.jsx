export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="hero-top-meta">
          <span className="meta-text">Media Kit</span>
          <span className="meta-text">New York City</span>
        </div>

        <h1 className="hero-title">FATU FINE</h1>

        <div className="hero-bottom-meta">
          <span className="meta-text hero-tagline">
            Lifestyle <span className="hero-dot">·</span> Beauty <span className="hero-dot">·</span> Storytelling
          </span>
        </div>
      </div>
    </section>
  );
}
