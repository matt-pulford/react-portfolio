import React from 'react';
import './css/case-study.css';
import HKCImage from '../images/HKC-screenshot.png'
import HCKMobile from '../images/phoney2.png'

const CaseStudy = () => {
    return (
        <div className="case-study-container">
            <h1><a href='http://hamiltonkratomcenter.com'>hamiltonkratomcenter.com</a></h1>
            <div className='case-study-spacer'></div>

            <div className="section">
                <img className='image1' src={HKCImage} alt="Overview" />
                <div>
                    <h2>Overview</h2>
                    <p>This Node.js application serves as the backbone of a dynamic web platform. Utilizing Express for server-side functionality, it integrates a variety of modules to deliver a comprehensive user experience. A comprehensive full-stack web application with user authentication, database integration, and email functionalities.</p>
                </div>
            </div>

            <div className="tech-stack">
                <div className='tech-item'> Node.js</div>
                <div className='tech-item'> Express</div>
                <div className='tech-item'> EJS</div>
                <div className='tech-item'> PostgreSQL</div>
                <div className='tech-item'> bcrypt</div>
                <div className='tech-item'> nodemailer</div>
                <div className='tech-item'> express-session</div>
                <div className='tech-item'> dotenv</div>
            </div>
       <div className="section design">
                <div className='section-2-text'>
                    <h2>Design Approach</h2>
                    <p>The application is designed with modularity and scalability in mind, allowing for seamless integration of additional features and functionalities. Emphasis on security and user experience, ensuring a safe and intuitive environment for users.</p>
                </div>
                <img className='image2' src={HCKMobile} alt="Design Approach" />
            </div>

            <div className="key-features">
                <div className='text-shadow-mid'>User Authentication: Implements bcrypt for secure password handling, ensuring robust user security.</div>
                <div className='text-shadow-mid'>Database Interaction: Utilizes PostgreSQL for data storage and retrieval, offering reliable and scalable database solutions.</div>
                <div className='text-shadow-mid'>Email Functionality: Integrates nodemailer for seamless email communications, enhancing user engagement.</div>
                <div className='text-shadow-mid'>Session Management: Employs express-session for effective user session tracking, optimizing user interactions.</div>
                <div className='text-shadow-mid'>Environmental Variables: Incorporates dotenv for managing environment variables, promoting secure and flexible configuration.</div>
            </div>

            <div className="section">
                <img src="image-here.jpg" alt="Challenges & Solutions" />
                <div>
                    <h2>Challenges & Solutions</h2>
                    <p>Implementing a secure authentication system was a key challenge, addressed using bcrypt for hashing and secure password management. Ensuring smooth user session management, tackled through express-session for efficient and reliable session tracking.</p>
                </div>
            </div>

            <div className="section reverse">
                <div>
                    <h2>Outcome</h2>
                    <p>Creation of a user-friendly, secure, and dynamic web application that effectively manages user data and interactions, with a strong focus on security and user experience.</p>
                </div>
                <img src="image-here.jpg" alt="Outcome" />
            </div>
        </div>
    );
};

export default CaseStudy;
