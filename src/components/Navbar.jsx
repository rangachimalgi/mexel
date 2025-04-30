import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setServiceDropdownOpen(false);
    setProjectDropdownOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isHome ? "navbar-home" : "navbar-default"} ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <img
            src="/mexell-logo.png"
            alt="Mexell Logo"
            className="navbar-logo"
          />
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

          <li>
            <Link to="/aboutus" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>

          {/* Our Projects Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setProjectDropdownOpen(true)}
            onMouseLeave={() => setProjectDropdownOpen(false)}
          >
            <Link to="/projects">Our Projects ▼</Link>
            {projectDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/projects/process-piping">Process Piping</Link>
                </li>
                <li>
                  <Link to="/projects/gas-piping">Gas Piping</Link>
                </li>
                <li>
                  <Link to="/projects/utility-piping">Utility Piping</Link>
                </li>
                {/* <li><Link to="/projects/ss-ms-fabrications">SS and MS Fabrications</Link></li> */}
                <li>
                  <Link to="/projects/project-gallery">Project Gallery</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Our Services Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setServiceDropdownOpen(true)}
            onMouseLeave={() => setServiceDropdownOpen(false)}
          >
            <Link to="/services">Our Services ▼</Link>
            {serviceDropdownOpen && (
              <ul className="dropdown-menu">
                {/* Quality Services with sub-dropdown */}
                <li className="dropdown-submenu">
                  <Link to="/services/quality">Quality Services ▶</Link>
                  <ul className="sub-dropdown-menu">
                    <li>
                      <Link to="/services/quality/otbital">
                        Otbital welding
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quality/borescope">Borescope</Link>
                    </li>
                    <li>
                      <Link to="/services/quality/pressure">
                        Pressure Testing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quality/passivation">
                        Passivation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quality/surface">
                        Surface Roughness
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quality/ultrasonic">
                        Ultrasonic Testing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quality/sprayball">
                        Sprayball Testing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/quality/dyepenetration">
                        Dye Penetration Testing
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Other normal links */}
                <li>
                  <Link to="/services/design">Design Services</Link>
                </li>
                <li>
                  <Link to="/services/safety">Safety Services</Link>
                </li>
                <li>
                  <Link to="/projects/ss-ms-fabrications">
                    SS and MS Fabrications
                  </Link>
                </li>

                {/* Material Supply and Installation with sub-dropdown */}
                <li className="dropdown-submenu">
                  <Link to="/services/material-supply">
                    Material Supply and Installation ▶
                  </Link>
                  <ul className="sub-dropdown-menu">
                    <li>
                      <Link to="/services/material-supply/gas-fittings">
                        Gas Fittings
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/material-supply/process-piping-fittings">
                        Process Piping Fittings
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </li>

          <li>
            {isHome ? (
              <a href="#contact">Contact Us</a>
            ) : (
              <Link to="/#contact">Contact Us</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
