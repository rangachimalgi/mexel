import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import Home from "./pages/Home"; // Create a new Home component for the main landing content
import "./App.css";

const App = () => {
  return (
    <Router>
    <div className="app-wrapper">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
};

export default App;
