import React from "react";
import "./gasPiping.css"; // 👈 new css for this page

const GasPiping = () => {
  return (
    <div className="gas-piping">
      <h1>Gas Piping</h1>
      <p>Gas piping refers to the network of pipes and fittings used to distribute and transport gases, such as industrial gases, in various settings, including:</p>

      <h2>Applications</h2>
      <ul>
        <li>Industrial processes (e.g., manufacturing, power generation)</li>
        <li>Medical facilities (e.g., oxygen, anesthesia)</li>
      </ul>

      <h2>Key Considerations</h2>
      <ul>
        <li>Material selection (e.g., steel, copper, PE)</li>
        <li>Pipe sizing and routing</li>
        <li>Pressure ratings and regulation</li>
        <li>Safety features (e.g., shut-off valves, leak detection)</li>
        <li>Code compliance (e.g., ASME)</li>
      </ul>

      <h2>Importance</h2>
      <p>Gas piping systems require careful design, installation, and maintenance to ensure safe and efficient operation. Properly designed and installed gas piping systems help prevent accidents, minimize risks, and optimize performance.</p>
    </div>
  );
};

export default GasPiping;
