import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./surface.css";
import PageLayout from "../../../components/PageLayout";

const Surface = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="surface-wrapper">

        {/* Hero */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/Surfaceroughness.png" alt="Surface Roughness Equipment" />
          </div>
          <div className="intro-text">
            <h1>SURFACE ROUGHNESS TESTING</h1>
            <p>
              In 2025, <strong>Mexell Engineering</strong> introduces{" "}
              <em>Surface Roughness Testing</em> — a precision technique to evaluate
              the texture and quality of critical surfaces with extreme accuracy.
            </p>
          </div>
        </div>

        {/* What It Does */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>WHY IT MATTERS</h2>
            <p>
              This advanced test ensures surface finish meets stringent specifications,
              minimizing friction, ensuring hygiene, and optimizing performance in
              cleanroom, medical, and aerospace environments.
            </p>
          </div>
        </div>

        {/* Industry Relevance */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>WHERE IT'S USED</h2>
            <p>
              Manufacturing, pharma, food-grade piping, and precision engineering all
              depend on reliable surface integrity. This tech ensures your components
              perform and last.
            </p>
          </div>
        </div>

        {/* Company Value */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>OUR STANDARD OF EXCELLENCE</h2>
            <p>
              Surface testing is another way <strong>Mexell</strong> ensures
              world-class quality, helping clients exceed regulatory standards while
              achieving consistent, dependable results.
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Surface;
