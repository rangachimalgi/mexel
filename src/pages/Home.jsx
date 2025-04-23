import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      {/* <Projects /> */}
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
