// Home.js
import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='landing-container'>
        <div className='landing-content'>
          <div className='text-container'>
            <h1 className='tagline'>Hello.  I'm Matt Pulford, a Full Stack Developer. </h1>
            <p className='description'> I look forward to collaborating with you, crafting digital experiences that stand out in the vast landscape. Let's embark on a creative journey together.</p>
          </div>
          <div className='buttons-container'>
            <button>Portfolio</button>
            <button className='contact-button'>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
