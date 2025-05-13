import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./utilityPiping.css";
import PageLayout from "../../components/PageLayout";

const UtilityPiping = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="utility-piping">

        {/* Hero / Intro */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/Utility.jpeg" alt="Utility Piping System" />
          </div>
          <div className="intro-text">
            <h1>WHAT IS UTILITY PIPING?</h1>
            <p>
              Utility piping refers to the distribution network for vital
              services like water, steam, compressed air, fuel gases, and
              drainage — essential to run industrial and building operations
              efficiently.
            </p>
          </div>
        </div>

        {/* Types of Utility Piping */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>TYPES OF UTILITY PIPING</h2>
            <ol>
              <li>Water supply piping</li>
              <li>Steam piping</li>
              <li>Compressed air piping</li>
              <li>Fuel gas piping</li>
              <li>Drainage and sewage piping</li>
            </ol>
            <p>
              These pipelines serve different support systems within industries,
              factories, labs, and facilities — ensuring smooth backend
              operations.
            </p>
          </div>
        </div>

        {/* Purpose */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>PURPOSE</h2>
            <p>
              Utility piping ensures the reliable delivery of necessary services
              to maintain production, climate control, sanitation, and more in
              both industrial and commercial settings.
            </p>
          </div>
        </div>

        {/* Key Considerations */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>KEY CONSIDERATIONS</h2>
            <ol>
              <li>Material selection</li>
              <li>Pipe sizing and routing</li>
              <li>Pressure and temperature ratings</li>
              <li>Corrosion protection</li>
              <li>Maintenance and inspection</li>
            </ol>
            <p>
              Proper design choices are crucial for longevity and performance.
              Factors like insulation, access for repair, and durability must be
              considered.
            </p>
          </div>
        </div>

        {/* Importance */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>IMPORTANCE</h2>
            <p>
              A robust utility piping system forms the backbone of
              infrastructure, providing seamless service flow and ensuring
              workplace safety, sustainability, and operational uptime.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UtilityPiping;
