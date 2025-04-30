import React from "react";
import "./ProcessPiping.css";

const ProcessPiping = () => {
  return (
    <div className="process-piping">
      <h1>Process Piping</h1>
      <p>
        Process piping refers to the network of pipes, fittings, and valves used
        to transport fluids, gases, or other materials in industrial processes.
        Here's a brief overview:
      </p>

      <div className="design-image-wrapper">
        <img
          src="/process.png"
          alt="3D Mechanical Equipment"
          className="design-machine-img"
        />
      </div>

      <h2>Key Components</h2>
      <ul>
        <li>
          <strong>Pipes:</strong> Tubular structures used to transport fluids or
          gases.
        </li>
        <li>
          <strong>Fittings:</strong> Elbows, tees, couplings, and other
          components that connect pipes.
        </li>
        <li>
          <strong>Valves:</strong> Devices that control the flow of fluids or
          gases.
        </li>
      </ul>

      <h2>Applications</h2>
      <ul>
        <li>Chemical processing</li>
        <li>Oil and gas production</li>
        <li>Power generation</li>
        <li>Water treatment</li>
        <li>Food and beverage processing</li>
      </ul>

      <h2>Design Considerations</h2>
      <ul>
        <li>Material selection (e.g., steel, PVC, stainless steel)</li>
        <li>Pipe sizing and routing</li>
        <li>Pressure and temperature ratings</li>
        <li>Safety features (e.g., relief valves, emergency shutdowns)</li>
      </ul>

      <h2>Importance</h2>
      <p>
        Process piping plays a critical role in ensuring the safe and efficient
        operation of industrial processes. Proper design, installation, and
        maintenance are essential to prevent accidents, minimize downtime, and
        optimize production.
      </p>
    </div>
  );
};

export default ProcessPiping;
