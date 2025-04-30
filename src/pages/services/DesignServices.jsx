import React from "react";
import "./designServices.css";

const DesignServices = () => {
  return (
    <div className="design-services">
      <h1>Design Services</h1>

      <div className="design-image-wrapper">
        <img
          src="/designservice.png"
          alt="3D Mechanical Equipment"
          className="design-machine-img"
        />
      </div>

      <p>
        2D and 3D mechanical design refer to the creation of digital models and
        drawings for mechanical systems, components, and products using
        computer-aided design (CAD) software.
      </p>

      <h2>2D Mechanical Design</h2>
      <ul>
        <li>Involves creating 2D drawings and schematics</li>
        <li>
          Typically used for:
          <ul>
            <li>Detailed drawings</li>
            <li>Assembly drawings</li>
            <li>Schematic diagrams</li>
          </ul>
        </li>
        <li>
          Benefits:
          <ul>
            <li>Easy to create and modify</li>
            <li>Useful for documentation and communication</li>
          </ul>
        </li>
      </ul>

      <h2>3D Mechanical Design</h2>
      <ul>
        <li>Involves creating 3D models and assemblies</li>
        <li>
          Typically used for:
          <ul>
            <li>Product design and development</li>
            <li>Simulation and analysis</li>
            <li>Visualization and prototyping</li>
          </ul>
        </li>
        <li>
          Benefits:
          <ul>
            <li>Enhanced visualization and understanding</li>
            <li>Improved accuracy and precision</li>
            <li>Reduced errors and rework</li>
          </ul>
        </li>
      </ul>

    
      <h2>Software Tools</h2>
      <ul>
        <li>Autodesk AutoCAD</li>
        <li>SolidWorks</li>
        <li>AutoCAD Plant 3D</li>
      </ul>

      <h2>Applications</h2>
      <p>
        2D and 3D mechanical design are used in Industrial equipment drawings
        and Custom product drawings.
      </p>
    </div>
  );
};

export default DesignServices;
