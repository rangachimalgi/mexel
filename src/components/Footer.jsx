import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,FaLocationDot,FaPhone, FaEnvelope
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="grid-footer">
      <div className="footer-logo-section">
        <img src="/mexell-logo.png" alt="Mexell Logo" className="footer-logo" />
        <p className="footer-slogan">
          Precision Engineering, Trusted Delivery.
        </p>
      </div>

      <div className="footer-section">
        <h4>CONTACT</h4>
        <p>
          <FaLocationDot className="contact-icon" />
          #12/6, Neotown Rd, Opp. Govt School,
          <br />
          Bommasandra, Bangalore 560099
        </p>

        <p>
          <FaPhone className="contact-icon" />
          96639 10215 / 98457 04566
        </p>

        <p>
          <FaEnvelope className="contact-icon" />
          mexellengineering@gmail.com
        </p>
      </div>

      <div className="footer-section">
        <h4>COMMUNITY</h4>
        <div className="social-icons">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
