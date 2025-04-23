import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about.jpeg"; 

const About = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImg} alt="Industrial piping system" />
        <div className="about-highlight">We engineer clean & efficient systems</div>
      </div>
      <div className="about-content">
        <span className="about-label">ABOUT US</span>
        <h2>Precision Engineering for Pharma & Industry</h2>
        <p>
          Founded in 2021, Mexell Engineering specializes in delivering high-quality
          piping, welding, and testing services for the pharmaceutical, biotech,
          and industrial sectors. Our team is built on 20+ years of field experience,
          and a mission to ensure reliability, compliance, and performance in every project.
        </p>
        <ul className="about-points">
          <li><strong>01.</strong> Compliant cleanroom practices</li>
          <li><strong>02.</strong> Expertise in precision piping & testing</li>
        </ul>
        {/* <a href="#contact" className="about-btn">Contact Us</a> */}
      </div>
    </div>
  </section>
);

export default About;