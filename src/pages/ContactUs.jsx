import React from "react";
import PageLayout from "../components/PageLayout";
import "./ContactUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <PageLayout fullWidth>
      <div className="contact-wrapper">
        {/* Google Map */}
        <div className="contact-map" data-aos="fade-up">
          <iframe
            title="Mexell Engineering Exact Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0837275749056!2d77.665451!3d12.818246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d16eed4456f%3A0xea75f2ae7655c203!2sMEXELL%20ENGINEERING!5e0!3m2!1sen!2sin!4v1715604021135!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Text Section */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h1>OFFICE ADDRESS</h1>
            <p>
              <strong>MEXELL Engineering Private Limited</strong>
            </p>
            <p>
              #12/6, Neotown Rd, Opp. Govt School,
              <br />
              Bommasandra, Bangalore 560099
            </p>
            <p>
              <strong>Phone:</strong> +91 96639 10215
            </p>
            <p>
              <strong>Whatsapp:</strong> +91 98457 04566
            </p>
            <p>
              <strong>Email:</strong> mexellengineering@gmail.com
            </p>
            <p>
              <em>Follow us:</em>
            </p>
            <div className="icons">
              <a
                href="https://linkedin.com/company/mexell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/mexell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/mexell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/mexell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://youtube.com/@mexell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
