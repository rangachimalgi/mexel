import React from "react";
import "../styles/Hero.css";
import bgImage from "../assets/hero-bg.png";

const Hero = () => (
  <section
    className="hero"
    style={{
      backgroundImage: `url(${bgImage})`,
    }}
  ></section>
);

export default Hero;