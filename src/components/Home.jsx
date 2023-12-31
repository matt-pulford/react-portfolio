// Home
import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='landing-container'>
        <div className='landing-content'>
          <div className='text-container'>
            <h1 className='tagline text-shadow-sm'>Hello. I'm Matt Pulford, a Full Stack Developer. </h1>
            <p className='description text-shadow-sm'>I look forward to collaborating with you, crafting digital experiences that stand out in the vast landscape. Let's embark on a creative journey together.</p>
          </div>
          <div className='buttons-container'>
            <Link to='/recent-projects'>
              <button>Recent Projects</button>
            </Link>
            <Link to='/contact'>
              <button className='contact-button'>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
