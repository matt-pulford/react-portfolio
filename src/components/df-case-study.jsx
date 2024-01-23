import React from 'react';

import DFGallery from '../images/df-gallery.png'
import DFMoblie from '../images/df-mobile.png'
import DFScreenShot from '../images/df-screenshot.png'


const CaseStudy = () => {
    return (
        <div className="case-study-container">
            <div className="section">
                <img className='image1' src={DFScreenShot} alt="Overview" />
                <div>
                    <h2 className='text-shadow-sm'>Overview</h2>
                    <p>Utilizing Express.js, a popular Node.js framework, the application sets up a server that is both robust and adaptable. Key to its functionality is the integration of the EJS templating engine, which allows for dynamic rendering of HTML pages with embedded JavaScript. This approach effectively separates the server-side logic from the client-side interface, ensuring a clean and maintainable codebase.</p>
                </div>
            </div>

            <div className="section design">
                <div className='section-2-text'>
                    <h2 className='design-heading text-shadow-sm'>Design Approach</h2>
                    <p className='design-text'>In addition to aesthetic considerations, the design approach also emphasizes interactivity and responsiveness. This responsiveness is crucial when users expect seamless experiences across desktops, tablets, and smartphones. This design philosophy not only aids in establishing brand identity but also in crafting an interface that is both engaging and easy to navigate, catering to the needs of a diverse audience. </p>
                </div>
                <img className='image2' src={DFMoblie} alt="Design Approach" />
            </div>

            <div className="key-features extra-padding">
                <div className='feature-item'>
                    <div className='feature-heading text-shadow-sm'>Dynamic Image Rendering</div>
                    <div className='feature-text'>The gallery dynamically renders images, sourced from a static file directory.</div>
                </div>
                <div className='feature-item'>
                    <div className='feature-heading text-shadow-sm'>Responsive Design</div>
                    <div className='feature-text'>Ensuring the website is accessible and visually appealing across different devices and screen sizes</div>
                </div>
                <div className='feature-item'>
                    <div className='feature-heading text-shadow-sm'>User Interaction</div>
                    <div className='feature-text'>Features like a contact form, image filtering, and navigation links enhance user engagement</div>
                </div>
                <div className='feature-item'>
                    <div className='feature-heading text-shadow-sm'>SEO Optimization</div>
                    <div className='feature-text'>Use of HTML tags and structured data for better search engine visibility</div>
                </div>
            </div>
            <div className="section">
                <img src={DFGallery} className='image3' alt="Outcome" />
                <div>
                    <h2 className='text-shadow-sm'>Outcome</h2>
                    <p>This web application demonstrates a mixute of functionality and design, achieved through the thoughtful integration of server-side technologies, templating approaches, and client-side aesthetics. The use of Express.js and EJS templating enables a flexible backend, while the structured use of CSS ensures a cohesive and responsive frontend design. This results in an application that is not only pleasing to the eye but also provides a seamless and interactive user experience</p>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
