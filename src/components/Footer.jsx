import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
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
          #12/6, Neotown Rd, Opp. Govt School,
          <br /> Bommasandra, Bangalore 560099
        </p>
        <p>Phone: 96639 10215 / 98457 04566</p>
        <p>Email: mexellengineerig@gmail.com</p>
      </div>

      <div className="footer-section">
        <h4>COMMUNITY</h4>
        <div className="social-icons">
          <button onClick={() => handleClick()}>X</button>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
