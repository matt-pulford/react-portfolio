// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
 
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar">

        <a href="index.html" className="brand" style={{ height: '100%' }}>
          <div className='name'>Matt Pulford</div>
        </a>

      


      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <div className="link">Recent Projects</div>
        <div className="link">Services</div>
        <div className="link">Contact</div>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        &#9776;
      </div>
 

    </div>
  );
};

export default Navbar;
