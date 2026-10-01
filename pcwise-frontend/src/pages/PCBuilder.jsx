import {
  CheckCircle2,
  CircleDollarSign,
  Cpu,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
const purposes = [
  "Gaming",
  "Programming",
  "Video Editing",
  "Photo Editing",
  "Office",
  "Streaming",
];
const components = [
  "CPU",
  "GPU",
  "Motherboard",
  "RAM",
  "SSD",
  "PSU",
  "Cabinet",
  "Cooler",
];
const demoBuild = [
  {
    category: "CPU",
    name: "AMD Ryzen 5 7600",
    detail: "6 cores · AM5 socket",
    price: "₹18,990",
  },
  {
    category: "GPU",
    name: "NVIDIA GeForce RTX 4060",
    detail: "8 GB GDDR6 · Great for 1080p",
    price: "₹30,490",
  },
  {
    category: "Motherboard",
    name: "MSI PRO B650M-P",
    detail: "AM5 · DDR5 support",
    price: "₹12,300",
  },
  {
    category: "Memory",
    name: "16 GB DDR5 RAM",
    detail: "5600 MHz · Dual channel",
    price: "₹5,200",
  },
];
function PCBuilder() {
  const [buildType, setBuildType] = useState("Complete PC");
  const [budget, setBudget] = useState(120000);
  const [selectedPurposes, setSelectedPurposes] = useState(["Gaming"]);
  const [selectedComponent, setSelectedComponent] = useState("CPU");
  const [showRecommendation, setShowRecommendation] = useState(false);
  const togglePurpose = (purpose) =>
    setSelectedPurposes((current) =>
      current.includes(purpose)
        ? current.filter((item) => item !== purpose)
        : [...current, purpose],
    );
  return (
    <section className="page-section container">
      <div className="page-intro">
        <p className="eyebrow">
          <Cpu size={16} aria-hidden="true" /> PC BUILDER
        </p>
        <h1>Tell us what you need.</h1>
        <p>
          Choose a budget and purpose. PCWise will turn those preferences into a
          compatible starting point.
        </p>
      </div>
      <div className="builder-layout">
        <form
          className="recommendation-form"
          onSubmit={(event) => {
            event.preventDefault();
            setShowRecommendation(true);
          }}
        >
          <fieldset>
            <legend>What do you want to build?</legend>
            <div className="choice-grid two-columns">
              {["Complete PC", "Individual Component"].map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`choice-card ${buildType === option ? "selected" : ""}`}
                  onClick={() => setBuildType(option)}
                >
                  <span>{option}</span>
                  <small>
                    {option === "Complete PC"
                      ? "A balanced, full system"
                      : "Find one suitable part"}
                  </small>
                </button>
              ))}
            </div>
          </fieldset>
          {buildType === "Individual Component" && (
            <label className="field-label">
              Component needed
              <select
                value={selectedComponent}
                onChange={(event) => setSelectedComponent(event.target.value)}
              >
                {components.map((component) => (
                  <option key={component}>{component}</option>
                ))}
              </select>
            </label>
          )}
          <fieldset>
            <legend>
              <CircleDollarSign size={19} aria-hidden="true" /> Your budget
            </legend>
            <div className="budget-row">
              <strong>₹{budget.toLocaleString("en-IN")}</strong>
              <span>₹50,000 – ₹2,00,000</span>
            </div>
            <input
              type="range"
              min="50000"
              max="200000"
              step="5000"
              value={budget}
              onChange={(event) => setBudget(Number(event.target.value))}
              aria-label="PC budget"
            />
          </fieldset>
          <fieldset>
            <legend>
              <SlidersHorizontal size={19} aria-hidden="true" /> What will you
              use it for?
            </legend>
            <p className="field-help">Select one or more purposes.</p>
            <div className="chip-group">
              {purposes.map((purpose) => (
                <button
                  type="button"
                  key={purpose}
                  className={`chip ${selectedPurposes.includes(purpose) ? "selected" : ""}`}
                  onClick={() => togglePurpose(purpose)}
                >
                  {purpose}
                </button>
              ))}
            </div>
          </fieldset>
          <Button type="submit" className="full-width">
            Recommend my PC
          </Button>
        </form>
        {showRecommendation ? (
          <aside className="result-card" aria-live="polite">
            <div className="result-header">
              <div>
                <p className="eyebrow">YOUR RECOMMENDED BUILD</p>
                <h2>
                  {buildType === "Complete PC"
                    ? "Balanced performance build"
                    : `Suggested ${selectedComponent}`}
                </h2>
              </div>
              <span className="score-badge">91 / 100</span>
            </div>
            <div className="compatibility">
              <CheckCircle2 size={21} aria-hidden="true" />
              <div>
                <strong>Compatible</strong>
                <span>
                  Demo recommendation based on{" "}
                  {selectedPurposes.join(" + ") || "your preferences"}.
                </span>
              </div>
            </div>
            <div className="product-list">
              {demoBuild.map((product) => (
                <ProductCard key={product.category} product={product} />
              ))}
            </div>
            <div className="total-row">
              <span>Estimated total</span>
              <strong>₹1,16,850</strong>
            </div>
            <p className="demo-note">
              Demo result only. Backend recommendations will replace this when
              the API is connected.
            </p>
          </aside>
        ) : (
          <aside className="empty-result">
            <Cpu size={34} aria-hidden="true" />
            <h2>Your recommendation will appear here.</h2>
            <p>
              Complete the form to see a sample compatible build and suitability
              score.
            </p>
          </aside>
        )}
      </div>
    </section>
  );
}
export default PCBuilder;
