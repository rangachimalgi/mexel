import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ssmsFabrications.css";
import PageLayout from "../../components/PageLayout";

const SsmsFabrications = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="fabrication-wrapper">
        {/* Hero Section with Images */}
        <div className="fabrication-gallery" data-aos="fade-up">
          <div className="fabrication-image">
            <img src="/Crossbench.png" alt="Cross Over Bench" />
            <p>Cross Over Bench</p>
          </div>
          <div className="fabrication-image">
            <img src="/Sstrolly.png" alt="SS Trolly" />
            <p>Stainless Steel Trolly</p>
          </div>
        </div>

        {/* Intro */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>FABRICATION OVERVIEW</h2>
            <p>
              We provide precision fabrication services for both Stainless Steel (SS)
              and Mild Steel (MS), delivering customized solutions tailored to client needs.
              From benches and trolleys to complex structures — our craftsmanship ensures
              long-term durability and functionality.
            </p>
          </div>
        </div>

        {/* Our Services */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>OUR SERVICES</h2>
            <ul>
              <li>
                <strong>Custom Fabrication:</strong> SS and MS components built to spec.
              </li>
              <li>
                <strong>Design & Engineering:</strong> Concept to final design, with compliance.
              </li>
              <li>
                <strong>Material Selection:</strong> High-quality metals from trusted vendors.
              </li>
              <li>
                <strong>Advanced Techniques:</strong> Welding, cutting, machining, and assembly.
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>BENEFITS</h2>
            <ul>
              <li>High-quality, durable end products</li>
              <li>Tailored to client specs & use cases</li>
              <li>Timely project execution</li>
              <li>Affordable pricing with zero compromise on quality</li>
            </ul>
          </div>
        </div>

        {/* Industries */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>INDUSTRIES SERVED</h2>
            <ul>
              <li>Food Processing</li>
              <li>Pharmaceutical</li>
              <li>Chemical Processing</li>
              <li>Oil & Gas</li>
              <li>Power Generation</li>
            </ul>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>QUALITY ASSURANCE</h2>
            <ul>
              <li>Premium-grade materials</li>
              <li>Experienced fabricators</li>
              <li>Frequent inspections and testing</li>
              <li>Compliance with global fabrication standards</li>
            </ul>
            <p>
              Partner with us for fabrication services that combine strength, precision,
              and reliability — backed by expert support and a commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SsmsFabrications;
