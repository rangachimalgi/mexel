import React from "react";
import "../styles/Timeline.css";

const timelineData = [
  {
    year: "2021",
    title: "The Year of Bold Beginnings",
    description:
      "Founded with determination and a commitment to hard work. Built the foundation with the support of our dedicated team."
  },
  {
    year: "2022",
    title: "A Year of Resilience and Growth",
    description:
      "Overcame challenges, stabilized operations, and earned the trust of clients to stand strong in business."
  },
  {
    year: "2023",
    title: "The Year of New Ventures",
    description:
      "Expanded reach, secured new clients, and delivered consistent value with a client-centric approach."
  },
  {
    year: "2024",
    title: "A Year of Boundless Growth",
    description:
      "Completed major projects, collaborated with Biocon, Taegu Tech, Givaudan, and more."
  },
  {
    year: "2025",
    title: "Overwhelmed with Progress",
    description:
      "Launched advanced quality services including Orbital Welding, Borescope, and GMP-support processes."
  }
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <h2>Company Journey</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;