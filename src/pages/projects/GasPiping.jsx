import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./gasPiping.css";
import PageLayout from "../../components/PageLayout";

const GasPiping = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="gas-piping">

        {/* Intro Section */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/GasPiping.jpeg" alt="Gas Piping System" />
          </div>
          <div className="intro-text">
            <h1>WHAT IS GAS PIPING?</h1>
            <p>
              Gas piping refers to the specialized network of pipes and tubing
              used for distributing gases in industries, healthcare, and
              controlled environments. These systems demand extreme precision,
              reliability, and safety compliance.
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>APPLICATIONS</h2>
            <ol>
              <li>Industrial processes (e.g., manufacturing, power generation)</li>
              <li>Medical facilities (e.g., oxygen, anesthesia delivery)</li>
            </ol>
            <p>
              Gas piping ensures consistent supply in environments where
              pressure stability and leak-proof delivery are absolutely critical.
            </p>
          </div>
        </div>

        {/* Key Considerations */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>KEY CONSIDERATIONS</h2>
            <ol>
              <li>Material selection (e.g., steel, copper, PE)</li>
              <li>Pipe sizing and routing</li>
              <li>Pressure ratings and regulation</li>
              <li>Safety features (e.g., shut-off valves, leak detection)</li>
              <li>Code compliance (e.g., ASME standards)</li>
            </ol>
            <p>
              System design must meet stringent safety codes to avoid hazardous
              leaks and to ensure gas purity and flow consistency.
            </p>
          </div>
        </div>

        {/* Importance */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>IMPORTANCE</h2>
            <p>
              A well-engineered gas piping system minimizes operational risks and
              downtime while enhancing performance, safety, and compliance with
              industry standards.
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default GasPiping;
