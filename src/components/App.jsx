import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import RecentProjects from './RecentProjects';
import Contact from './Contact';
import Services from './Services';
import backgroundImage from '../images/business-2846221-grey.webp';
import Portfolio from "./Portfolio";
import CaseStudy from './hkc-case-study'
import DFCaseStudy from './df-case-study'


const App = () => {
  return (
    <Router>
      <div className="background-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>
      <div className="content-container">
        <div className="App">
          <Navbar />
          <Routes>
            {/* Set the Home route to be the default route without a visible link in the Navbar */}
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/recent-projects" element={<RecentProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hkc-case-study" element={<CaseStudy />} />
            <Route path="/df-case-study" element={<DFCaseStudy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
