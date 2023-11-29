// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className={`brand ${location.pathname === '/' ? 'active' : ''}`}>
        <img className="logo" src="/images/logo2.png" alt="Logo" />
      </Link>

      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <Link to="/recent-projects" className={`link ${location.pathname === '/recent-projects' ? 'active' : ''}`}>Recent Projects</Link>
        <Link to="/contact" className={`link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        <Link to="/services" className={`link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
      </div>

      <div className="hamburger" onClick={toggleNav}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;

