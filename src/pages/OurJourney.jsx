import React from "react";
import "./aboutus.css"; // reuse same styles
import PageLayout from "../components/PageLayout";
import pipeImg from "../assets/pipe.jpeg";
import welderImg from "../assets/welder.jpeg";

const OurJourney = () => {
  return (
    <PageLayout>
      <section className="timeline-wrapper">

        {/* Welder fixed */}
        <div className="welder-image">
          <img src={welderImg} alt="Welder Starting the Journey" />
        </div>

        <div className="timeline-graphic">
          <img src={pipeImg} alt="Pipe Timeline" className="pipe-img" />

          <div className="timeline-block left">
            <div className="content">
              <h3>2025 – Overwhelmed with Progress</h3>
              <p>
                Introduced advanced services like Orbital Welding, Borescope,
                Passivation, Pressure Testing, Liquid Penetration Testing, Spray
                Ball Testing, Surface Roughness & Ultrasonic Testing. Marked a
                leap in innovation and capability.
              </p>
            </div>
          </div>

          <div className="timeline-block right">
            <div className="content">
              <h3>2024 – Boundless Growth</h3>
              <p>
                Completed major projects and shutdowns. Worked with Biocon,
                Givaudan India, Rinac India, Bhagmane Tech Park, and more.
              </p>
            </div>
          </div>

          <div className="timeline-block left">
            <div className="content">
              <h3>2023 – New Ventures</h3>
              <p>
                Took proactive steps to reach new clients. Delivered exceptional
                satisfaction and expanded reach.
              </p>
            </div>
          </div>

          <div className="timeline-block right">
            <div className="content">
              <h3>2022 – Resilience</h3>
              <p>
                Faced ups and downs while laying a stronger foundation. Clients’
                trust helped us stabilize and spread our wings.
              </p>
            </div>
          </div>

          <div className="timeline-block left">
            <div className="content">
              <h3>2021 – Bold Beginnings</h3>
              <p>
                Founded with determination. Faced challenges head-on. Grateful
                to supporters who helped us rise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default OurJourney;
