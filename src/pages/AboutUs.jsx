import React from "react";
import "./aboutus.css";
import PageLayout from "../components/PageLayout";
import heroBg from "../assets/hero.png";

const AboutUs = () => {
  return (
    <PageLayout>
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px", // ⬆️ Increased height
          width: "80%", // ⬇️ Reduced width (adjust as needed)
          borderRadius: "20px", // ⬅️ Curvy edges
          margin: "2rem auto", // ⬅️ Centered the card
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 16px rgba(0,0,0,0.2)", // optional for card feel
        }}
      >
        <img
          src="/mexell-logo.png"
          alt="Mexell Logo"
          style={{
            height: "80px",
            opacity: 0.9,
          }}
        />
      </div>

      <div className="about-centered-content">
        <h3>About Us</h3>
        <p>
          <strong>Founded in 2021</strong> by industry veterans Mahesh Jadhav
          and Somashekara, <strong>Mexell Engineering</strong> is a dynamic
          fabrication company specializing in process piping, utility piping,
          and gas piping solutions.
        </p>
        <p>
          With over two decades of hands-on experience, the founders have
          navigated and resolved various piping challenges, establishing Mexell
          Engineering as a trusted name in the industry.
        </p>
        <p>
          <strong>Mexell Engineering</strong> has achieved remarkable growth,
          expanding to <strong>35 dedicated professionals</strong> including
          safety and quality teams committed to the highest standards.
        </p>
        <p>
          In 2025, we expanded to a <strong>2,500 sq. ft. facility</strong> to
          support operations, innovation, and collaboration.
        </p>
        <p>
          We continue to deliver forward-thinking, reliable solutions across the
          industrial spectrum.
        </p>

        <h3>Company Overview</h3>
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
            <strong>2024:</strong> Delivered major projects for Biocon,
            Givaudan, Rinac India, and more
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
          <strong>Founded in July 2021</strong>, our team is driven by hard work
          and innovation. Led by <strong>Mahesh Jadhav</strong>, we specialize
          in technical services and advanced quality checks.
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
            <strong>Support Staff:</strong> Ensuring smooth backend operations
            and service
          </li>
        </ul>
        <p>We work as one team, aligning every solution to client goals.</p>

        <h3>Quality Engineering Initiative</h3>
        <p>
          We proudly launched a dedicated{" "}
          <strong>Quality Engineering Team</strong> focused on GMP-compliant
          services.
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
          This initiative reflects our commitment to innovation and continual
          quality improvement.
        </p>
      </div>

    </PageLayout>
  );
};

export default AboutUs;