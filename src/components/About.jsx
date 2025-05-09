import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => (
  <section id="expertise" className="expertise-section">
    <div className="expertise-container">
      <h2>Our Expertise</h2>
      <div className="expertise-grid">
        <Link to="/projects/gas-piping" className="expertise-card">
          <img src="/gaspiping.png" alt="Gas Piping System" />
          <h3>Gas Piping</h3>
        </Link>
        <Link to="/projects/process-piping" className="expertise-card">
          <img src="/process.png" alt="Process Piping" />
          <h3>Process Piping</h3>
        </Link>
        <Link to="/projects/utility-piping" className="expertise-card">
          <img src="/utilitypiping.png" alt="Utility Piping System" />
          <h3>Utility Piping</h3>
        </Link>
      </div>
    </div>
  </section>
);

export default About;
