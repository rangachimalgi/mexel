import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./gasfittings.css";
import PageLayout from "../../../components/PageLayout";

const GasFittings = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="gasfitting-wrapper">
        {/* Hero Section */}
        <div className="split-row" data-aos="fade-up">
          <div className="split-left">
            <h1>Gas Fittings Supply & Installation</h1>
            <p>
              At <strong>Mexell Engineering</strong>, we specialize in the supply and installation of
              high-quality <em>Gas Fittings</em> for industrial, commercial, and institutional needs.
              Designed for safety, durability, and performance — our systems handle natural gas, LPG,
              nitrogen, oxygen, and more.
            </p>
          </div>
          <div className="split-right">
            <img src="/GasFitting.png" alt="Gas Fittings" className="design-machine-img" />
          </div>
        </div>

        {/* Product Range */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>PRODUCT RANGE</h2>
            <p>
              Our fittings include valves, regulators, connectors, couplings, nipples, elbows,
              and manifolds. Materials: stainless steel, brass, carbon steel — all compliant with
              global safety codes.
            </p>
          </div>
        </div>

        {/* Installation Capabilities */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>INSTALLATION CAPABILITIES</h2>
            <ul>
              <li>High- and low-pressure line installations</li>
              <li>On-site inspection and layout consultation</li>
              <li>Integration with utility & piping systems</li>
              <li>Testing, leak detection & commissioning</li>
              <li>Compliance with IS, ASME, and local codes</li>
            </ul>
          </div>
        </div>

        {/* Why Mexell */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>WHY MEXELL?</h2>
            <p>
              Our skilled technicians ensure fittings are installed with precision and safety. Whether
              it's a new facility or retrofit, our team minimizes downtime while maximizing performance.
            </p>
          </div>
        </div>

        {/* Industries */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>INDUSTRIES SERVED</h2>
            <p>
              Pharmaceuticals, Chemical Plants, Food Processing, Research Labs, Hospitals,
              and Industrial Manufacturing.
            </p>
            <p>
              Trust <strong>Mexell Engineering</strong> for gas fitting solutions that deliver safety,
              reliability, and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GasFittings;
