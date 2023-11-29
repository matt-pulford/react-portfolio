// Home.js
import React from 'react';
import './landing-area.css';

const Home = () => {
  return (
    <div className='landing-container'>
      <div className='landing-content'>
        <div className='text-section'>
          <h1 className='tagline'>Hello. I'm Matthew Pulford, a Full Stack Developer. </h1>
          <p className='description'>I'm dedicated to continuous learning, seeking elegant solutions to real-world problems in the ever-evolving landscape of web development.</p>
        </div>
        <div className='buttons-container'>
          <button>Portfolio</button>
          <button className='contact-button'>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Home;