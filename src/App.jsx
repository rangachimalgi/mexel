import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProcessPiping from "./pages/projects/ProcessPiping";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Create a new Home component for the main landing content
import "./App.css";
import GasPiping from "./pages/projects/GasPiping";
import UtilityPiping from "./pages/projects/UtilityPiping";
import DesignServices from "./pages/services/DesignServices";
import SafetyServices from "./pages/services/SafetyServices";
import SsmsFabrications from "./pages/projects/SsmsFabrications";
import QualityServices from "./pages/services/QualityServices";
import Otbital from "./pages/services/Quality/Otbital";
import Borescope from "./pages/services/Quality/Borescope";
import Pressure from "./pages/services/Quality/Pressure";
import Passivation from "./pages/services/Quality/Passivation";
import Surface from "./pages/services/Quality/Surface";
import Ultrasonic from "./pages/services/Quality/Ultrasonic";
import Sprayball from "./pages/services/Quality/Sprayball";
import Dyepenetration from "./pages/services/Quality/Dyepenetration";
import GasFittings from "./pages/services/Material/GasFittings";
import ProcessPipingFittings from "./pages/services/Material/ProcessPipingFittings";
import AboutUs from "./pages/AboutUs";
import ProjectGallery from "./pages/projects/ProjectGallery";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactUs from "./pages/ContactUs";
import OurJourney from "./pages/OurJourney";

const App = () => {
  return (
    <Router>
    <div className="app-wrapper">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          < Route path="ourjourney" element={<OurJourney />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/projects/process-piping" element={<ProcessPiping />} />
          <Route path="/projects/gas-piping" element={<GasPiping />} />
          <Route path="/projects/utility-piping" element={<UtilityPiping />} />
          <Route path="/projects/ss-ms-fabrications" element={<SsmsFabrications />} />
          <Route path="/projects/project-gallery" element={<ProjectGallery />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          <Route path="/services/quality" element={<QualityServices />} />
          <Route path="/services/quality/otbital" element={<Otbital />} />
          <Route path="/services/quality/borescope" element={<Borescope />} />
          <Route path="/services/quality/pressure" element={<Pressure />} />
          <Route path="/services/quality/passivation" element={<Passivation />} />
          <Route path="/services/quality/surface" element={<Surface />} />
          <Route path="/services/quality/ultrasonic" element={<Ultrasonic />} />
          <Route path="/services/quality/sprayball" element={<Sprayball />} />
          <Route path="/services/quality/dyepenetration" element={<Dyepenetration />} />
          <Route path="/services/design" element={<DesignServices />} />
          <Route path="/services/safety" element={<SafetyServices />} />
          <Route path="/services/material-supply/gas-fittings" element={<GasFittings />} />
          <Route path="/services/material-supply/process-piping-fittings" element={<ProcessPipingFittings />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  </Router>
  );
};

export default App;
