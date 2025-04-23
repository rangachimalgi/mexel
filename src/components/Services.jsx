import React from "react";

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <h2>Our Services</h2>
      <div className="grid">
        {[
          "Manual & Orbital Welding",
          "Borescope Inspections",
          "Passivation & Pressure Testing",
          "Ultrasonic Testing",
          "Surface Roughness Test",
          "Spray Ball & Riboflavin Test",
          "Dye Penetration Test",
          "Utility & Process Piping",
        ].map((service, idx) => (
          <div key={idx} className="service-card">{service}</div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;