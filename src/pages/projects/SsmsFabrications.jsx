import React from "react";
import "./ssmsFabrications.css"; // 👈 create this CSS file

const SsmsFabrications = () => {
  return (
    <div className="ssms-fabrications">
      <h1>SS and MS Fabrication Services</h1>

      <div className="fabrication-gallery">
        <div className="fabrication-image">
          <img src="/Crossbench.png" alt="Cross Over Bench" />
          <p>Cross Over Bench</p>
        </div>
        <div className="fabrication-image">
          <img src="/Sstrolly.png" alt="SS Trolly" />
          <p>Stainless Steel Trolly</p>
        </div>
      </div>

      <p>
        Our company provides high-quality fabrication services for Stainless
        Steel (SS) and Mild Steel (MS) materials, tailored to meet client
        requirements. Our services include:
      </p>

      <h2>Our Services</h2>
      <ul>
        <li>
          Custom Fabrication: We fabricate SS and MS components and structures
          according to client specifications, ensuring precision and accuracy.
        </li>
        <li>
          Design and Engineering: Our team of experts works closely with clients
          to design and engineer SS and MS fabrication projects, ensuring
          compliance with industry standards and regulations.
        </li>
        <li>
          Material Selection: We source high-quality SS and MS materials from
          reputable suppliers to ensure durability and reliability.
        </li>
        <li>
          Fabrication Techniques: We employ various fabrication techniques,
          including cutting, welding, machining, and assembly, to deliver
          complex SS and MS fabrication projects.
        </li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>
          High-Quality Products: We ensure that our fabrication products meet
          the highest standards of quality, durability, and performance.
        </li>
        <li>
          Customization: We work closely with clients to understand their
          specific requirements and deliver tailored solutions.
        </li>
        <li>
          Timely Delivery: We prioritize timely delivery, ensuring that projects
          are completed on schedule.
        </li>
        <li>
          Cost-Effective: We strive to provide cost-effective solutions without
          compromising on quality or performance.
        </li>
      </ul>

      <h2>Industries Served</h2>
      <ul>
        <li>Food Processing</li>
        <li>Pharmaceutical</li>
        <li>Chemical Processing</li>
        <li>Oil and Gas</li>
        <li>Power Generation</li>
      </ul>

      <h2>Quality Assurance</h2>
      <ul>
        <li>Using high-quality materials</li>
        <li>Employing skilled and experienced fabricators</li>
        <li>Conducting regular inspections and testing</li>
        <li>Ensuring compliance with industry standards and regulations</li>
      </ul>

      <p>
        By partnering with us, clients can rely on our expertise and commitment
        to delivering high-quality SS and MS fabrication services that meet
        their specific needs.
      </p>
    </div>
  );
};

export default SsmsFabrications;
