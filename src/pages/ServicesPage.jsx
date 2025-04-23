import React from "react";
import "../styles/ServicesPage.css"

const services = [
    {
      category: "Fabrication & Testing",
      items: [
        {
          title: "Orbital Welding",
          description:
            "Precision welding using orbital equipment for hygienic and critical piping systems, ensuring uniformity and compliance."
        },
        {
          title: "Manual TIG Welding",
          description:
            "High-quality TIG welding for process and utility piping by experienced certified welders."
        },
        {
          title: "Dye Penetration Test",
          description:
            "Non-destructive testing technique for detecting surface-breaking defects in metals."
        },
        {
          title: "Spray Ball & Riboflavin Test",
          description:
            "Validation test ensuring CIP (Clean-in-Place) system efficiency through visible trace method."
        },
        {
          title: "Passivation & Pressure Testing",
          description:
            "Enhancing corrosion resistance of stainless steel and verifying pipeline integrity under pressure."
        },
        {
          title: "Ultrasonic Testing",
          description:
            "Thickness measurement and flaw detection using high-frequency sound waves."
        },
        {
          title: "Surface Roughness Test",
          description:
            "Measurement of pipe inner surface finish to maintain required RA values as per pharma/food norms."
        }
      ]
    },
    {
      category: "Cleanroom & GMP Compliance",
      items: [
        {
          title: "Borescope Inspection",
          description:
            "Internal inspection of piping systems for weld quality, discoloration, and contamination."
        },
        {
          title: "GMP Documentation",
          description:
            "Complete support with GMP validation paperwork for regulated facility inspections."
        },
        {
          title: "Process & Utility Piping",
          description:
            "Turnkey piping projects across water systems, gases, clean steam, and compressed air."
        }
      ]
    },
    {
      category: "Special Capabilities",
      items: [
        {
          title: "Shutdown Maintenance",
          description:
            "Experienced in project shutdowns with quick turnaround execution and compliance support."
        },
        {
          title: "Equipment Fabrication",
          description:
            "On-site fabrication of process vessels, skids, and equipment enclosures."
        },
        {
          title: "Electro-Polishing Assistance",
          description:
            "Support for post-fabrication electro-polishing to enhance hygiene and visual quality."
        }
      ]
    }
  ];
  
  const ServicesPage = () => {
    return (
      <section className="services-page">
        <div className="container">
          <h1>Our Services</h1>
          {services.map((section, i) => (
            <div key={i} className="service-category">
              <h2>{section.category}</h2>
              <div className="service-grid">
                {section.items.map((item, j) => (
                  <div key={j} className="service-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesPage;