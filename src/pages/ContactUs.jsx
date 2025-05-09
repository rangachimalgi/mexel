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
            title="Mexell Engineering Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2415058359444!2d77.64697921538433!3d12.800032521818372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c897d9a1a17%3A0x45eb2dc5447b418!2sSPECDEL%20Engineering%20Private%20Limited!5e0!3m2!1sen!2sin!4v1681742342342!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Text Section */}
        <div className="split-row" data-aos="fade-left">
          <div className="split-left">
            <h2>OFFICE ADDRESS</h2>
            <p>
              <strong>MEXELL Engineering Private Limited</strong>
            </p>
            <p>
              Plot No. 240 & 241, KIADB Industrial area,
              <br />
              Bommasandra Jigani Link Road,
              <br />
              Bengaluru – 562106
              <br />
              Karnataka, India
            </p>
            <p>
              <strong>Phone:</strong> +91 90352 13861 (Shilpa)
            </p>
            <p>
              <strong>Whatsapp:</strong> +91 90352 13862 (Arun)
            </p>
            <p>
              <strong>Email:</strong> sales@mexell.com
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
