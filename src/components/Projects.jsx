import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    client: "Biocon Biologics",
    description: "Executed cleanroom piping and testing support for a large-scale pharma facility."
  },
  {
    client: "Taegu Tech",
    description: "Delivered utility gas line fabrication and shutdown services for industrial operations."
  },
  {
    client: "Givaudan India",
    description: "Provided validation testing (CIP, Riboflavin) and documentation for compliance."
  },
  {
    client: "Rinac India",
    description: "Installed and tested process piping systems for food-grade HVAC clean solutions."
  },
  {
    client: "Bhagmane Tech Park",
    description: "Completed facility shutdown support and utility pipeline maintenance projects."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Our Projects</h2>
        <div className="project-grid">
          {projects.map((item, index) => (
            <div className="project-card" key={index}>
              <h3>{item.client}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;