import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./passivation.css";
import PageLayout from "../../../components/PageLayout";

const Passivation = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="passivation-wrapper">

        {/* Hero */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/PassivationNew.jpeg" alt="Passivation Equipment" />
          </div>
          <div className="intro-text">
            <h1>PASSIVATION</h1>
            <p>
              In 2025, <strong>Mexell Engineering</strong> introduces{" "}
              <em>Passivation</em> — a critical surface treatment that improves
              corrosion resistance and enhances stainless steel durability.
            </p>
          </div>
        </div>

        {/* What it is */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>WHAT IS PASSIVATION?</h2>
            <p>
              Passivation is a chemical process that removes free iron and
              surface contaminants, forming a protective oxide layer on
              stainless steel — greatly reducing risk of corrosion in harsh
              environments.
            </p>
          </div>
        </div>

        {/* Industries */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>INDUSTRY APPLICATIONS</h2>
            <p>
              Essential for sectors like pharmaceuticals, food processing,
              aerospace, and cleanroom fabrication — passivation ensures
              compliance, performance, and longevity for critical components.
            </p>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>VALUE FOR OUR CLIENTS</h2>
            <p>
              Our adoption of passivation reflects <strong>Mexell’s</strong>{" "}
              mission to push forward with advanced processes that deliver
              reliability, sustainability, and long-term cost-effectiveness.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Passivation;
