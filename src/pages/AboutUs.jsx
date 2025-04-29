import React from "react";
import "./aboutus.css"; // optional

const AboutUs = () => {
  return (
    <div className="about-page">
      <h1>About Mexell Engineering</h1>
      <p>
        Mexell Engineering is a multidisciplinary engineering firm specializing in process piping, 
        gas systems, fabrication, and technical consulting. With a focus on innovation, quality, 
        and reliability, we serve clients across industries including pharmaceuticals, food 
        processing, oil & gas, and manufacturing.
      </p>
      <p>
        Our mission is to deliver high-performance engineering solutions that exceed industry 
        standards, meet client expectations, and promote safety and sustainability in every project.
      </p>
      {/* Add more sections: Vision, Mission, Leadership, Certifications, Timeline, etc. */}
    </div>
  );
};

export default AboutUs;
