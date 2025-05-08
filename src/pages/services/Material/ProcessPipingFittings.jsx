import React, { useEffect } from "react";
import "./processpipingfittings.css";
import PageLayout from "../../../components/PageLayout";
import AOS from "aos";
import "aos/dist/aos.css";

const ProcessPipingFittings = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="fittings-wrapper">
        {/* Hero Section */}
        <div className="split-row" data-aos="fade-up">
          <div className="split-left">
            <h1>Process Piping Fittings Supply & Installation</h1>
            <p>
              <strong>Mexell Engineering</strong> provides specialized <em>Process Piping Fittings</em> solutions
              designed to support critical fluid and gas transfer systems in industrial environments.
              From high-pressure steam lines to chemical pipelines, our fittings are engineered for
              strength, precision, and longevity.
            </p>
          </div>
          <div className="split-right">
            <img
              src="/processpiping.png"
              alt="Process Piping Equipment"
              className="design-machine-img"
            />
          </div>
        </div>

        {/* Supply Scope */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <p>
              We supply a full spectrum of process piping components including elbows, tees, reducers,
              flanges, gaskets, couplings, and valves — all fabricated from premium-grade materials
              such as carbon steel, stainless steel, alloy steel, and specialty metals depending on
              the application.
            </p>
          </div>
        </div>

        {/* Why Us */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>Why Our Process Fittings Stand Out</h2>
            <ul>
              <li>Conformity with ASME B16, ASTM, and other global piping standards</li>
              <li>Seamless and welded options available</li>
              <li>High corrosion resistance and pressure rating</li>
              <li>Accurate dimensional tolerances and traceability</li>
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>Installation Services Include</h2>
            <ul>
              <li>On-site pipeline inspection and route design</li>
              <li>Expert welding and joint assembly</li>
              <li>Pressure testing and certification</li>
              <li>Integration with utility and process systems</li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <p>
              Our experienced team ensures that all piping connections are leak-proof,
              mechanically secure, and fully aligned with the system's operational needs.
              Whether you're expanding a process plant or revamping existing infrastructure,
              we’ve got the fittings and field expertise to deliver end-to-end solutions.
            </p>
            <p>
              <strong>Industries Served:</strong> Oil & Gas, Power Generation, Water Treatment,
              Chemical Processing, Pharmaceuticals, and Food & Beverage.
            </p>
            <p>
              Trust <strong>Mexell Engineering</strong> for process piping supplies and installations
              that keep your operations flowing safely and efficiently.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProcessPipingFittings;
