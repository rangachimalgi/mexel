import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./qualityServices.css";
import PageLayout from "../../components/PageLayout";

const QualityServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="quality-services">

        {/* Intro with Image */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/qualityservice.png" alt="Quality Services" />
          </div>
          <div className="intro-text">
            <h1>INTRODUCING QUALITY ENGINEERING</h1>
            <p>
              In 2025, we are proud to launch our dedicated{" "}
              <strong>Quality Engineering Department</strong>. This reflects our
              passion for precision, safety, and continuous improvement across
              all projects.
            </p>
          </div>
        </div>

        {/* About Engineer */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>LEADERSHIP & EXPERTISE</h2>
            <p>
              Led by <strong>Sharath Kumar</strong>, a documentation and quality
              veteran since 2019, this initiative draws from deep hands-on
              experience across process piping challenges, ensuring unmatched
              quality assurance.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>KEY CAPABILITIES</h2>
            <ol>
              <li>Orbital Welding</li>
              <li>Borescope Inspection</li>
              <li>Pressure Testing</li>
              <li>Passivation</li>
              <li>Surface Roughness Testing</li>
              <li>Ultrasonic Testing</li>
              <li>Spray Ball Testing</li>
              <li>Dye Penetration Testing</li>
            </ol>
            <p>
              These services ensure structural integrity, cleanliness, and
              compliance for high-performance and GMP-critical systems.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>WHY IT MATTERS</h2>
            <p>
              This new chapter symbolizes <strong>Mexell Engineering</strong>’s
              continued evolution — providing industry-leading quality
              verification and engineering assurance at every phase.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default QualityServices;
