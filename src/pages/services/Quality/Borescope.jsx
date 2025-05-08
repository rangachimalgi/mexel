import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./borescope.css";
import PageLayout from "../../../components/PageLayout";

const Borescope = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="borescope-wrapper">

        {/* Hero */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/Borescope.png" alt="Borescope Equipment" />
          </div>
          <div className="intro-text">
            <h1>BORESCOPE TECHNOLOGY</h1>
            <p>
              In 2025, we proudly introduce <em>Borescope Technology</em> — a
              game-changing inspection tool that allows us to visually examine
              confined or hard-to-reach areas without disassembly.
            </p>
          </div>
        </div>

        {/* What It Does */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>ADVANCED VISUAL INSPECTION</h2>
            <p>
              This precision technology enables non-invasive inspections across
              mechanical systems, ensuring fast diagnostics and minimal downtime.
              It's ideal for industries where equipment integrity and performance
              are critical.
            </p>
          </div>
        </div>

        {/* Industries + Benefits */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>INDUSTRY APPLICATIONS</h2>
            <p>
              Borescope is revolutionizing inspection workflows in manufacturing,
              construction, aerospace, and energy sectors — supporting safety
              checks, maintenance planning, and accurate documentation.
            </p>
          </div>
        </div>

        {/* Commitment */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>INNOVATION AT MEXELL</h2>
            <p>
              At <strong>Mexell Engineering</strong>, we’re always ahead of the
              curve. By integrating borescope technology, we’re elevating our
              ability to deliver accurate, reliable, and cost-effective
              inspection and maintenance solutions.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Borescope;
