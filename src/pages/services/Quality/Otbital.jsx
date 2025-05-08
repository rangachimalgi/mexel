import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./otbital.css";
import PageLayout from "../../../components/PageLayout";

const Otbital = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="orbital-wrapper">

        {/* Intro with image */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/Orbital.png" alt="Orbital Welding Equipment" />
          </div>
          <div className="intro-text">
            <h1>ORBITAL WELDING</h1>
            <p>
              This year marks an exciting milestone for our company as we
              introduce <em>Orbital Welding</em> into our suite of advanced
              engineering capabilities.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>PRECISION & PERFORMANCE</h2>
            <p>
              Orbital welding is a cutting-edge technique designed for precision,
              consistency, and efficiency in joining pipes and tubes. This
              state-of-the-art method enables us to deliver superior weld quality
              while adhering to the highest industry standards.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>EXPANDED CAPABILITIES</h2>
            <p>
              With this innovation, we’re expanding into high-demand industries
              such as aerospace, pharmaceuticals, power, and construction —
              providing advanced, cost-efficient, and timeline-optimized welding
              services.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>OUR COMMITMENT</h2>
            <p>
              At <strong>Mexell Engineering</strong>, we believe that embracing
              innovation is the key to long-term growth. Our adoption of orbital
              welding underscores our promise to lead with quality, reliability,
              and forward-thinking solutions.
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Otbital;
