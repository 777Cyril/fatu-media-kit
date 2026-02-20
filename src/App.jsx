import './index.css';
import AtmosphericBackground from './components/AtmosphericBackground';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PerformanceSection from './components/PerformanceSection';
import ContentPillarsSection from './components/ContentPillarsSection';
import PartnershipsSection from './components/PartnershipsSection';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <>
      <div className="noise-texture" />
      <AtmosphericBackground />
      <main>
        <Hero />
        <AboutSection />
        <PerformanceSection />
        <ContentPillarsSection />
        <PartnershipsSection />
        <FooterCTA />
      </main>
    </>
  );
}

export default App;
