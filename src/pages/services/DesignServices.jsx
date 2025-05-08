import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./designServices.css";
import PageLayout from "../../components/PageLayout";

const DesignServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="design-wrapper">
        {/* Hero Image + Overview */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/designservice.png" alt="3D Mechanical Equipment" />
          </div>
          <div className="intro-text">
            <h1>DESIGN SERVICES</h1>
            <p>
              We provide precise 2D and 3D mechanical design solutions using CAD tools for
              industrial equipment, custom products, and piping systems. From documentation to
              visualization — we bring your ideas to life with accuracy and detail.
            </p>
          </div>
        </div>

        {/* 2D Design */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>2D MECHANICAL DESIGN</h2>
            <ul>
              <li>Detailed and assembly drawings</li>
              <li>Schematic diagrams for systems</li>
              <li>Quick revisions and documentation</li>
            </ul>
            <p>
              2D drawings are vital for technical communication, compliance, and on-site
              implementation — streamlining fabrication and installation.
            </p>
          </div>
        </div>

        {/* 3D Design */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>3D MECHANICAL DESIGN</h2>
            <ul>
              <li>Solid modeling for products and piping</li>
              <li>Simulation, analysis, and prototyping</li>
              <li>Visualization for client approvals</li>
            </ul>
            <p>
              With 3D design, teams can foresee challenges, ensure fitment, and improve design
              accuracy — reducing errors and project costs.
            </p>
          </div>
        </div>

        {/* Software */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>SOFTWARE TOOLS</h2>
            <ul>
              <li>Autodesk AutoCAD</li>
              <li>SolidWorks</li>
              <li>AutoCAD Plant 3D</li>
            </ul>
            <p>
              Our engineers work on industry-standard tools that ensure high-quality output and
              seamless collaboration with fabrication teams.
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>APPLICATIONS</h2>
            <p>
              Used in designing industrial skids, pressure vessels, process layouts, and custom
              machinery — our CAD solutions enhance both product performance and project speed.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DesignServices;
