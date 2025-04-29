import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProcessPiping from "./pages/projects/ProcessPiping";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import Home from "./pages/Home"; // Create a new Home component for the main landing content
import "./App.css";
import GasPiping from "./pages/projects/GasPiping";
import UtilityPiping from "./pages/projects/UtilityPiping";
import DesignServices from "./pages/services/DesignServices";

const App = () => {
  return (
    <Router>
    <div className="app-wrapper">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/process-piping" element={<ProcessPiping />} />
          <Route path="/projects/gas-piping" element={<GasPiping />} />
          <Route path="/projects/utility-piping" element={<UtilityPiping />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/design" element={<DesignServices />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
};

export default App;
