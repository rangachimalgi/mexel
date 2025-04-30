import React from "react";
import "./safetyServices.css"; // 👈 we'll create this CSS file

const SafetyServices = () => {
  return (
    <div className="safety-services">
      <h1>Safety Services</h1>

      <div className="design-image-wrapper">
        <img
          src="/safetyservices.png"
          alt="3D Mechanical Equipment"
          className="design-machine-img"
        />
      </div>

      <h2>Our Offerings</h2>
      <ul>
        <li>
          Site Safety Assessment: Conducting thorough assessments of client
          sites to identify potential hazards and provide recommendations for
          improvement.
        </li>
        <li>
          Safety Training: Providing training to clients on safe working
          practices, equipment operation, and emergency procedures.
        </li>
        <li>
          Personal Protective Equipment (PPE) Provision: Supplying PPE to
          clients, such as hard hats, gloves, and safety glasses, to ensure
          workers are properly protected.
        </li>
        <li>
          Safety Consulting: Offering expert advice on safety protocols,
          procedures, and policies to help clients improve their overall safety
          performance.
        </li>
        <li>
          Hazard Identification and Risk Assessment (HIRA): Conducting HIRAs to
          identify potential hazards and develop strategies to mitigate risks.
        </li>
        <li>
          Emergency Response Planning: Assisting clients in developing emergency
          response plans, including procedures for fires, spills, and other
          incidents.
        </li>
        <li>
          Safety Audits and Inspections: Conducting regular safety audits and
          inspections to ensure compliance with safety regulations and
          standards.
        </li>
        <li>
          Safety Documentation: Providing safety documentation, such as safety
          manuals, policies, and procedures, to help clients maintain a safe
          working environment.
        </li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Reduce the risk of accidents and injuries</li>
        <li>Improve compliance with safety regulations and standards</li>
        <li>Enhance their overall safety culture</li>
        <li>Increase productivity and efficiency</li>
        <li>Reduce costs associated with accidents and injuries</li>
      </ul>

      <h2>Importance</h2>
      <p>
        Safety services are essential in the fabrication industry, where workers
        are often exposed to hazardous materials, equipment, and environments.
        By prioritizing safety, fabrication companies can demonstrate their
        commitment to protecting their clients' workers and assets.
      </p>
    </div>
  );
};

export default SafetyServices;
