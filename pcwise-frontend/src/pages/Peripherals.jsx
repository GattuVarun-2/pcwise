import { Keyboard, Monitor, Mouse, PackageSearch } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
const productTypes = [
  { name: "Monitor", icon: Monitor },
  { name: "Keyboard", icon: Keyboard },
  { name: "Mouse", icon: Mouse },
];
const peripheralDemo = [
  {
    category: "Monitor",
    name: "24-inch Full HD IPS Monitor",
    detail: "144 Hz · Ideal for smooth gaming",
    price: "₹12,999",
  },
  {
    category: "Keyboard",
    name: "Mechanical TKL Keyboard",
    detail: "Hot-swappable · Red switches",
    price: "₹4,499",
  },
  {
    category: "Mouse",
    name: "Wireless Gaming Mouse",
    detail: "Lightweight · 12,000 DPI sensor",
    price: "₹2,999",
  },
];
function Peripherals() {
  const [budget, setBudget] = useState(20000);
  const [purpose, setPurpose] = useState("Gaming");
  const [selectedTypes, setSelectedTypes] = useState(["Monitor"]);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const toggleProductType = (type) =>
    setSelectedTypes((current) =>
      current.includes(type)
        ? current.filter((item) => item !== type)
        : [...current, type],
    );
  return (
    <section className="page-section container">
      <div className="page-intro">
        <p className="eyebrow">
          <PackageSearch size={16} aria-hidden="true" /> PERIPHERALS
        </p>
        <h1>Complete your setup.</h1>
        <p>
          Get practical monitor, keyboard, and mouse suggestions for your budget
          and daily use.
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
          <label className="field-label">
            Total budget
            <div className="budget-row">
              <strong>₹{budget.toLocaleString("en-IN")}</strong>
              <span>₹3,000 – ₹50,000</span>
            </div>
            <input
              type="range"
              min="3000"
              max="50000"
              step="1000"
              value={budget}
              onChange={(event) => setBudget(Number(event.target.value))}
              aria-label="Peripheral budget"
            />
          </label>
          <label className="field-label">
            Primary purpose
            <select
              value={purpose}
              onChange={(event) => setPurpose(event.target.value)}
            >
              {[
                "Gaming",
                "Programming",
                "Content Creation",
                "Office",
                "Study",
              ].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <fieldset>
            <legend>What do you need?</legend>
            <div className="choice-grid three-columns">
              {productTypes.map(({ name, icon: Icon }) => (
                <button
                  type="button"
                  key={name}
                  className={`choice-card icon-choice ${selectedTypes.includes(name) ? "selected" : ""}`}
                  onClick={() => toggleProductType(name)}
                >
                  <Icon size={22} aria-hidden="true" />
                  <span>{name}</span>
                </button>
              ))}
            </div>
          </fieldset>
          <Button type="submit" className="full-width">
            Recommend peripherals
          </Button>
        </form>
        {showRecommendation ? (
          <aside className="result-card" aria-live="polite">
            <div className="result-header">
              <div>
                <p className="eyebrow">YOUR RECOMMENDATIONS</p>
                <h2>A setup for {purpose.toLowerCase()}</h2>
              </div>
              <span className="score-badge">Good fit</span>
            </div>
            <div className="product-list">
              {peripheralDemo
                .filter((item) => selectedTypes.includes(item.category))
                .map((product) => (
                  <ProductCard key={product.category} product={product} />
                ))}
            </div>
            {selectedTypes.length === 0 && (
              <p className="demo-note">
                Choose at least one product type to see a recommendation.
              </p>
            )}
            <p className="demo-note">
              Demo result only. The Spring Boot API will provide real
              recommendations later.
            </p>
          </aside>
        ) : (
          <aside className="empty-result">
            <PackageSearch size={34} aria-hidden="true" />
            <h2>Find your ideal setup.</h2>
            <p>
              Choose the accessories you need and we will show a demo
              recommendation here.
            </p>
          </aside>
        )}
      </div>
    </section>
  );
}
export default Peripherals;
