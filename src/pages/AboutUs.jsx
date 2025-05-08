import React from "react";
import "./aboutus.css";
import PageLayout from "../components/PageLayout";

const AboutUs = () => {
  return (
    <PageLayout fullWidth>
      <h1>About Mexell Engineering</h1>

      <p>
        <strong>Founded in 2021</strong> by industry veterans Mahesh Jadhav and
        Somashekara,
        <strong> Mexell Engineering</strong> is a dynamic fabrication company
        specializing in process piping, utility piping, and gas piping
        solutions.
      </p>

      <p>
        With over two decades of hands-on experience, the founders have
        navigated and resolved various piping challenges, establishing Mexell
        Engineering as a trusted name in the industry.
      </p>

      <p>
        Year by year, <strong>Mexell Engineering</strong> has achieved
        remarkable growth, built upon a foundation of expertise and commitment
        to excellence. As of today, our team has expanded to{" "}
        <strong>35 dedicated professionals</strong>, including specialized
        safety and quality teams, ensuring the highest standards in every
        project we undertake.
      </p>

      <p>
        In 2025, to support our growing operations and enhance workability, we
        expanded our working space to a sprawling{" "}
        <strong>2,500 square feet</strong>. This strategic development reflects
        our focus on delivering innovative and efficient solutions while
        fostering a collaborative environment for our skilled workforce.
      </p>

      <p>
        <strong>Mexell Engineering</strong> remains steadfast in its mission to
        address complex piping needs with precision, reliability, and
        forward-thinking solutions — cementing our position as a leader in the
        fabrication industry.
      </p>

      <p>
        <strong>Founded in 2021</strong> by industry veterans Mahesh Jadhav and
        Somashekara,
        <strong> Mexell Engineering</strong> is a dynamic fabrication company
        specializing in process piping, utility piping, and gas piping
        solutions.
      </p>
      <p>
        With over two decades of hands-on experience, the founders have
        navigated and resolved various piping challenges, establishing Mexell
        Engineering as a trusted name in the industry.
      </p>
      <p>
        Our team has expanded to <strong>35+ professionals</strong>, including
        safety and quality teams. In 2025, we moved into a{" "}
        <strong>2,500 sq. ft. facility</strong> to support operations,
        innovation, and collaboration.
      </p>
      <p>
        <strong>Mexell Engineering</strong> is committed to delivering
        forward-thinking, reliable solutions across the industrial spectrum.
      </p>

      {/* ✅ NEW Company Overview Section */}
      <section className="company-overview">
        <h2>Company Overview</h2>

        <p>
          <strong>
            Piping Solutions — Empowering Excellence Through Innovation and
            Dedication
          </strong>
        </p>
        <ul>
          <li>Commitment to excellence and client satisfaction</li>
          <li>Resilience and hard work as our foundation</li>
          <li>
            Successfully completed multiple projects and shutdown activities
          </li>
          <li>Legacy of 21+ years understanding client needs</li>
          <li>Introduced advanced services to support GMP requirements</li>
        </ul>

        <h3>Timeline & Milestones</h3>
        <ul>
          <li>
            <strong>2021:</strong> Business established; focus on hard work,
            gratitude, and stability
          </li>
          <li>
            <strong>2022:</strong> Stabilized operations with client support
          </li>
          <li>
            <strong>2023:</strong> Gained client trust and scaled service
            capabilities
          </li>
          <li>
            <strong>2024:</strong> Delivered major projects for Biocon
            Biologics, Taegu Tech, Givaudan India, Rinac India, and Bhagmane
            Tech Park
          </li>
        </ul>

        <h3>Core Services</h3>
        <ul>
          <li>Manual & Orbital Welding</li>
          <li>Borescope Inspections</li>
          <li>Passivation & Pressure Testing</li>
          <li>Spray Ball Testing</li>
          <li>Surface Roughness Testing</li>
          <li>Ultrasonic Testing</li>
          <li>Liquid Penetration Testing</li>
        </ul>

        <h3>Vision & Values</h3>
        <ul>
          <li>Delivering innovative and efficient solutions</li>
          <li>Client-centric approach & quality assurance</li>
          <li>Expanding services while maintaining excellence</li>
        </ul>

        <h3>Our Team</h3>
        <p>
          Founded in July 2021, our team is driven by hard work and innovation.
          Led by
          <strong> Mahesh Jadhav</strong>, we specialize in technical services
          and advanced quality checks.
        </p>
        <ul>
          <li>
            <strong>Leadership:</strong> Experienced professionals driving
            strategic vision
          </li>
          <li>
            <strong>Technical Experts:</strong> Skilled in the latest
            technologies
          </li>
          <li>
            <strong>Project Managers:</strong> Ensuring project delivery and
            coordination
          </li>
          <li>
            <strong>Support Staff:</strong> Providing smooth backend operations
            and customer service
          </li>
        </ul>
        <p>
          We work as one team, sharing knowledge and aligning every solution to
          client goals.
        </p>

        <h3>Quality Engineering Initiative</h3>
        <p>
          We're proud to launch our dedicated{" "}
          <strong>Quality Engineering Team</strong> focused on GMP-compliant
          services. Our offerings include:
        </p>
        <ul>
          <li>Orbital Welding</li>
          <li>Borescope Inspections</li>
          <li>Passivation</li>
          <li>Pressure Testing</li>
          <li>Surface Roughness Testing</li>
          <li>Spray Ball Testing</li>
          <li>Liquid Penetration Testing</li>
          <li>Ultrasonic Testing & Commissioning</li>
        </ul>
        <p>
          This initiative reflects our passion for innovation and continuous
          improvement in quality and service delivery.
        </p>
      </section>

      <section className="timeline-wrapper">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          {/* 2025 */}
          <div className="timeline-block right">
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

          {/* 2024 */}
          <div className="timeline-block left">
            <div className="content">
              <h3>2024 – Boundless Growth</h3>
              <p>
                Completed major projects and shutdowns. Worked with Biocon
                Biologics, Givaudan India, Rinac India, Bhagmane Tech Park, and
                more.
              </p>
            </div>
          </div>

          {/* 2023 */}
          <div className="timeline-block right">
            <div className="content">
              <h3>2023 – New Ventures</h3>
              <p>
                Took proactive steps to reach new clients. Delivered exceptional
                satisfaction and expanded reach.
              </p>
            </div>
          </div>

          {/* 2022 */}
          <div className="timeline-block left">
            <div className="content">
              <h3>2022 – Resilience</h3>
              <p>
                Faced ups and downs while laying a stronger foundation. Clients’
                trust helped us stabilize and spread our wings.
              </p>
            </div>
          </div>

          {/* 2021 */}
          <div className="timeline-block right">
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

export default AboutUs;
