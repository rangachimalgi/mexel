import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProcessPiping.css";
import PageLayout from "../../components/PageLayout";

const ProcessPiping = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="process-piping">
        {/* 🔥 Image left + text right intro */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/process.png" alt="Process Piping" />
          </div>
          <div className="intro-text">
            <h1>WHAT IS PROCESS PIPING?</h1>
            <p>
              Process piping refers to the network of pipes, fittings, and
              valves used to transport fluids, gases, or materials in industrial
              processes. These systems are crucial in pharma, biotech, and
              chemical plants where precision and reliability are
              non-negotiable.
            </p>
          </div>
        </div>

        {/* 🔁 Key Components */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>KEY COMPONENTS</h2>
            <ol type="1">
              <li>
                <strong>Pipes:</strong> Tubular structures used to transport
                fluids or gases.
              </li>
              <li>
                <strong>Fittings:</strong> Elbows, tees, couplings, and other
                components that connect pipes.
              </li>
              <li>
                <strong>Valves:</strong> Devices that control the flow of fluids
                or gases.
              </li>
            </ol>

            <p>
              These core elements form the backbone of any process piping
              system, enabling controlled and safe movement of substances within
              an industrial environment.
            </p>
          </div>
        </div>

        {/* 🔁 Applications */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>APPLICATIONS</h2>
            <ol type="2">
              <li>Chemical processing</li>
              <li>Oil and gas production</li>
              <li>Power generation</li>
              <li>Water treatment</li>
              <li>Food and beverage processing</li>
            </ol>
            <p>
              Process piping is used across various industries wherever
              consistent, high-quality fluid or gas transport is required under
              stringent regulations or high pressure.
            </p>
          </div>
        </div>

        {/* 🔁 Design Considerations */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>DESIGN CONSIDERATIONS</h2>
            <ol>
              <li>Material selection (e.g., steel, PVC, stainless steel)</li>
              <li>Pipe sizing and routing</li>
              <li>Pressure and temperature ratings</li>
              <li>
                Safety features (e.g., relief valves, emergency shutdowns)
              </li>
            </ol>
            <p>
              Engineering design plays a vital role in system safety and
              performance. Material compatibility, layout, and operating
              conditions all factor into an optimized and compliant piping
              design.
            </p>
          </div>
        </div>

        {/* 🔁 Importance */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>IMPORTANCE</h2>
            <p>
              Process piping ensures safe, efficient, and scalable transport of
              industrial materials, reducing risks and enabling automated,
              controlled workflows that are essential to modern operations.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProcessPiping;
