// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import RecentProjects from './RecentProjects';
import Contact from './Contact';
import Services from './Services';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Set the Home route to be the default route without a visible link in the Navbar */}
          <Route path="/" element={<Home />} />
          <Route path="/recent-projects" element={<RecentProjects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
