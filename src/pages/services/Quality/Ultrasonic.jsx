import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ultrasonic.css";
import PageLayout from "../../../components/PageLayout";

const Ultrasonic = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="ultrasonic-wrapper">

        {/* Hero Section */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/Ultrasonic.png" alt="Ultrasonic Equipment" />
          </div>
          <div className="intro-text">
            <h1>ULTRASONIC TESTING</h1>
            <p>
              In 2025, <strong>Mexell Engineering</strong> elevates quality control
              with <em>Ultrasonic Testing</em> — a non-destructive method using high-frequency
              sound waves to identify internal flaws and material inconsistencies.
            </p>
          </div>
        </div>

        {/* Accuracy & Detection */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>ACCURACY & DETECTION</h2>
            <p>
              Ultrasonic testing enables highly precise evaluations — detecting
              internal cracks, wall thinning, or material delamination without
              damaging the part or structure.
            </p>
          </div>
        </div>

        {/* Industry Use */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>USED IN INDUSTRIES</h2>
            <p>
              From aerospace and automotive to oil & gas and structural
              engineering, ultrasonic testing ensures performance, safety, and
              full regulatory compliance.
            </p>
          </div>
        </div>

        {/* Why Mexell */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>WHY MEXELL?</h2>
            <p>
              With this technology, <strong>Mexell Engineering</strong> pushes
              the boundaries of quality assurance — delivering unmatched results
              through innovation, skill, and attention to detail.
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Ultrasonic;
