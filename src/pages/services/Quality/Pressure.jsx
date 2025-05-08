import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pressure.css";
import PageLayout from "../../../components/PageLayout";

const Pressure = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="pressure-wrapper">

        {/* Intro */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/Pressuretesting.png" alt="Pressure Equipment" />
          </div>
          <div className="intro-text">
            <h1>PRESSURE TESTING</h1>
            <p>
              In 2025, <strong>Mexell Engineering</strong> takes another leap
              forward with <em>Pressure Testing</em>—a crucial method for
              evaluating system strength, leak tightness, and safety.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>WHY PRESSURE TEST?</h2>
            <p>
              This advanced test verifies pressure resistance and helps identify
              flaws or leakage points across pipelines, tanks, vessels, and
              sealed systems — giving you total peace of mind.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>INDUSTRY COVERAGE</h2>
            <p>
              Pressure testing enhances reliability in industries like
              manufacturing, energy, construction, and infrastructure. We ensure
              compliance with safety standards while optimizing performance and
              lifecycle.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>MEXELL'S PROMISE</h2>
            <p>
              At <strong>Mexell Engineering</strong>, pressure testing is more
              than a service — it’s part of our pursuit of engineering
              excellence, safety assurance, and continuous innovation for our
              clients.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Pressure;
