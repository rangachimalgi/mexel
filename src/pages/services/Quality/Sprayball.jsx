import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./sprayball.css";
import PageLayout from "../../../components/PageLayout";

const Sprayball = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="sprayball-wrapper">

        {/* Hero Section */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/Sprayball.png" alt="Sprayball Equipment" />
          </div>
          <div className="intro-text">
            <h1>SPRAYBALL TESTING</h1>
            <p>
              In 2025, <strong>Mexell Engineering</strong> introduces{" "}
              <em>Sprayball Testing</em> — a critical validation method used to
              ensure spray systems achieve complete and effective cleaning inside
              process equipment.
            </p>
          </div>
        </div>

        {/* What It Validates */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>VALIDATION PURPOSE</h2>
            <p>
              Sprayball testing is used in CIP (Clean-in-Place) systems to confirm
              that every surface inside a tank or vessel receives uniform spray
              coverage, meeting GMP cleaning standards.
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>APPLICATION AREAS</h2>
            <p>
              Essential in pharmaceutical, biotech, and food processing industries,
              where product safety and hygiene are non-negotiable — ensuring zero
              contamination and optimal sanitation.
            </p>
          </div>
        </div>

        {/* Why Mexell */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>MEXELL'S EDGE</h2>
            <p>
              By integrating sprayball testing, <strong>Mexell</strong> raises its
              quality bar and empowers clients with cleaning validations that meet
              the highest regulatory benchmarks.
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Sprayball;
