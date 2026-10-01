import { CheckCircle2, Cpu, Monitor, Sparkles, Wrench } from "lucide-react";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
function Home({ onNavigate }) {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" /> SMART PC BUILDING
            </p>
            <h1>
              Build the right PC <span>for your needs.</span>
            </h1>
            <p className="hero-description">
              PCWise helps you choose compatible PC components and peripherals
              based on your budget and purpose.
            </p>
            <div className="hero-actions">
              <Button onClick={() => onNavigate("builder")}>
                Start Building
              </Button>
              <Button
                variant="secondary"
                onClick={() => onNavigate("peripherals")}
              >
                Explore peripherals
              </Button>
            </div>
            <p className="hero-note">
              <CheckCircle2 size={17} aria-hidden="true" /> Clear
              recommendations, not just product lists.
            </p>
          </div>
          <div
            className="hero-panel"
            aria-label="Example PC recommendation summary"
          >
            <div className="panel-topline">
              <span>Recommended build</span>
              <span className="status-badge">Compatible</span>
            </div>
            <div className="score-circle">
              <strong>91</strong>
              <span>Suitability score</span>
            </div>
            <div className="mini-specs">
              <div>
                <span>Purpose</span>
                <strong>Gaming + Streaming</strong>
              </div>
              <div>
                <span>Budget</span>
                <strong>₹1,20,000</strong>
              </div>
              <div>
                <span>Estimated total</span>
                <strong>₹1,16,850</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section container">
        <div className="section-heading">
          <p className="eyebrow">HOW PCWISE HELPS</p>
          <h2>Make each choice with more confidence.</h2>
        </div>
        <div className="feature-grid">
          <FeatureCard
            icon={Cpu}
            title="PC Builder"
            description="Choose a complete build or focus on the component you need."
            actionLabel="Build a PC"
            onClick={() => onNavigate("builder")}
          />
          <FeatureCard
            icon={Wrench}
            title="Compatibility"
            description="See if the selected parts are designed to work together."
            actionLabel="Check a build"
            onClick={() => onNavigate("builder")}
          />
          <FeatureCard
            icon={Monitor}
            title="Peripherals"
            description="Find monitors, keyboards, and mice suited to your setup."
            actionLabel="Find peripherals"
            onClick={() => onNavigate("peripherals")}
          />
        </div>
      </section>
    </>
  );
}
export default Home;
