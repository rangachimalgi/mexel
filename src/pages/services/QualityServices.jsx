import React from "react";
import "./qualityServices.css"; // keep this if you want styling

const QualityServices = () => {
  return (
    <div className="quality-services">
      <h1>Introducing Quality Engineering</h1>

      <div className="design-image-wrapper">
        <img
          src="/qualityservice.png"
          alt="3D Mechanical Equipment"
          className="design-machine-img"
        />
      </div>

      <p>
        In 2025, we are thrilled to unveil a new milestone in our journey— our
        dedicated <strong>Quality Engineering Department</strong>. This
        strategic addition reflects our unwavering commitment to excellence and
        precision in every project we undertake.
      </p>

      <p>
        Leading this initiative is our skilled Engineer, Sharath Kumar, who
        brings a wealth of experience in piping documentation since 2019. Having
        tackled and resolved numerous documentation challenges in process
        piping, Sharath’s expertise positions us to meet and exceed industry
        standards with confidence.
      </p>

      <p>
        Our Quality Department introduces state-of-the-art practices and
        advanced testing methodologies to ensure exceptional results. Key
        capabilities include:
      </p>

      <ul>
        <li>Orbital Welding</li>
        <li>Borescope Inspection</li>
        <li>Pressure Testing</li>
        <li>Passivation</li>
        <li>Surface Roughness Testing</li>
        <li>Ultrasonic Testing</li>
        <li>Spray Ball Testing</li>
        <li>Dye Penetration Testing</li>
      </ul>

      <p>
        By integrating these cutting-edge processes, we aim to deliver enhanced
        reliability, safety, and performance across all our projects. This new
        chapter signifies <strong>Mexell Engineering</strong>’s steadfast
        dedication to quality, innovation, and industry-leading solutions.
      </p>
    </div>
  );
};

export default QualityServices;
