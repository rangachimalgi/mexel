import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./safetyServices.css";
import PageLayout from "../../components/PageLayout";

const SafetyServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="safety-wrapper">
        {/* Hero Image */}
        <div className="process-intro" data-aos="fade-up">
          <div className="intro-image">
            <img src="/safetyservices.png" alt="Safety Equipment" />
          </div>
          <div className="intro-text">
            <h1>SAFETY SERVICES</h1>
            <p>
              At <strong>Mexell Engineering</strong>, safety isn’t just a checklist — it’s a culture.
              We offer comprehensive services that protect your team, reduce risk, and
              ensure regulatory compliance across your sites.
            </p>
          </div>
        </div>

        {/* Our Offerings */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>OUR OFFERINGS</h2>
            <ul>
              <li>
                <strong>Site Safety Assessment:</strong> Conducting thorough assessments of client
                sites to identify potential hazards and provide recommendations for improvement.
              </li>
              <li>
                <strong>Safety Training:</strong> Providing training to clients on safe working
                practices, equipment operation, and emergency procedures.
              </li>
              <li>
                <strong>PPE Provision:</strong> Supplying personal protective equipment such as
                hard hats, gloves, and safety glasses to ensure worker safety.
              </li>
              <li>
                <strong>Safety Consulting:</strong> Offering expert advice on protocols and policies
                to improve overall safety performance.
              </li>
              <li>
                <strong>HIRA:</strong> Conducting Hazard Identification and Risk Assessments to
                proactively detect risks and implement mitigation strategies.
              </li>
              <li>
                <strong>Emergency Response Planning:</strong> Assisting in creating effective
                emergency plans for fires, spills, and incidents.
              </li>
              <li>
                <strong>Safety Audits & Inspections:</strong> Performing regular audits and
                inspections to verify compliance and eliminate unsafe practices.
              </li>
              <li>
                <strong>Safety Documentation:</strong> Providing manuals, safety policies,
                and standard operating procedures for a safer workplace.
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="split-row" data-aos="fade-right">
          <div className="split-right">
            <h2>BENEFITS</h2>
            <ul>
              <li>Reduce the risk of accidents and injuries</li>
              <li>Improve compliance with safety regulations and standards</li>
              <li>Enhance your overall safety culture</li>
              <li>Increase productivity and operational efficiency</li>
              <li>Lower costs related to workplace incidents</li>
            </ul>
          </div>
        </div>

        {/* Importance */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>IMPORTANCE</h2>
            <p>
              Safety services are essential in the fabrication industry, where workers face
              exposure to hazardous materials, machinery, and environments. By prioritizing
              safety, companies can protect their workforce, reduce liabilities, and build a
              reputation for operational excellence.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SafetyServices;
