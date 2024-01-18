import React from 'react';

import DFGallery from '../images/df-gallery.png'
import DFMoblie from '../images/df-mobile.png'
import DFScreenShot from '../images/FDArt-screenshot.png'
const CaseStudy = () => {
    return (
        <div className="case-study-container">
            <div className="section">
                <img className='image1' src={DFScreenShot} alt="Overview" />
                <div>
                    <h2 className='text-shadow-sm'>Overview</h2>
                    <p>This Node.js application serves as the backbone of a dynamic web platform. Utilizing Express for server-side functionality, it integrates a variety of modules to deliver a comprehensive user experience. A comprehensive full-stack web application with user authentication, database integration, and email functionalities.</p>
                </div>
            </div>

            <div className="section design">
                <div className='section-2-text'>
                    <h2 className='design-heading text-shadow-sm'>Design Approach</h2>
                    <p className='design-text'>The application is designed with modularity and scalability in mind, allowing for seamless integration of additional features and functionalities. Emphasis on security and user experience, ensuring a safe and intuitive environment for users.</p>
                </div>
                <img className='image2' src={DFMoblie} alt="Design Approach" />
            </div>

            <div className="key-features">
                <div className='feature-item'>
                    <div className='feature-heading text-shadow-sm'>User Authentication:</div>
                    <div className='feature-text'>Implements bcrypt for secure password handling, ensuring robust user security.</div>
                </div>
                <div className='feature-item'>
                    <div className='feature-heading text-shadow-sm'>Database Interaction</div>
                    <div className='feature-text'>Utilizes PostgreSQL for data storage and retrieval, offering reliable and scalable database solutions.</div>
                </div>
                <div className='feature-item'>
                    <div className='feature-heading text-shadow-sm'>Email Functionality</div>
                    <div className='feature-text'> Integrates nodemailer for seamless email communications, enhancing user engagement.</div>
                </div>
                <div className='feature-item'>
                    <div className='feature-heading text-shadow-sm'>Session Management</div>
                    <div className='feature-text'>Employs express-session for effective user session tracking, optimizing user interactions.</div>
                </div>
                <div className='feature-item last'>
                    <div className='feature-heading text-shadow-sm'>Environmental Variables</div>
                    <div className='feature-text'>Incorporates dotenv for managing environment variables, promoting secure and flexible configuration.</div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
