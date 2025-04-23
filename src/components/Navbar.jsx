import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`navbar ${isHome ? "navbar-home" : "navbar-default"}`}>
      <div className="navbar-inner">
      <Link to="/" className="logo">
      <Link to="/" className="logo">
  <img src="/mexell-logo.png" alt="Mexell Logo" className="navbar-logo" />
</Link>
</Link>

        <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
          <span />
          <span />
          <span />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isHome ? (
            <>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="/projects">Our Projects</a>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/#about">About Us</Link>
              </li>
              <li>
                <Link to="/#projects">Our Projects</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/#contact">Contact Us</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
