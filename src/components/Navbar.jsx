// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="navbar" style={{ position: 'relative' }}>
      <a href="index.html" class="brand"><div>Your Brand</div></a>
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <div className="link">Recent Projects</div>
        <div className="link">Services</div>
        <div className="link">Contact</div>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        &#9776;
      </div>
      <div
        className="pointer-circle"
        style={{
          position: 'absolute',
          top: mousePosition.y,
          left: mousePosition.x,
        }}
      ></div>
    </div>
  );
};

export default Navbar;
