import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./dyepenetration.css";
import PageLayout from "../../../components/PageLayout";

const Dyepenetration = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="dyepenetration-wrapper">

        {/* Hero Section */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/Dyepenetration.png" alt="Dye Penetration Equipment" />
          </div>
          <div className="intro-text">
            <h1>DYE PENETRATION TESTING</h1>
            <p>
              In 2025, <strong>Mexell Engineering</strong> introduces{" "}
              <em>Dye Penetration Testing</em> — a precise non-destructive technique
              to detect surface-breaking defects like cracks, porosity, and leaks.
            </p>
          </div>
        </div>

        {/* Flaw Detection */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>FINDING CRITICAL FLAWS</h2>
            <p>
              This method uses a visible or fluorescent dye to highlight surface
              imperfections that could compromise strength, pressure tolerance, or
              safety — especially in welds and castings.
            </p>
          </div>
        </div>

        {/* Application Sectors */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>INDUSTRY APPLICATION</h2>
            <p>
              Commonly used in food, pharmaceutical, biotech, and construction
              sectors to ensure sanitary weld integrity, leak-proof performance, and
              adherence to strict compliance regulations.
            </p>
          </div>
        </div>

        {/* Why Mexell */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>TRUSTED PRECISION</h2>
            <p>
              <strong>Mexell Engineering</strong> adds dye penetration testing to
              ensure the highest quality output — delivering excellence, safety,
              and complete confidence in every job.
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Dyepenetration;
