import React from 'react';
import './css/services.css'; 

function Services() {
  return (
    <div className="flex-container">
      <div className="flex-row-container">
        <section>
          <h2 className='section-header text-shadow-mid'>Front-End Development</h2>
          <p className='section-discription'>Crafting intuitive user interfaces using HTML, CSS, and JavaScript. I leverage the power of CSS Flexbox and Grid to ensure responsive and adaptable layouts.</p>
        </section>
        <section>
          <h2 className='section-header text-shadow-mid'>Frameworks & Libraries</h2>
          <p className='section-discription'>Proficient in using popular frameworks and libraries such as React, Node.js, Bootstrap, Flask, EJS, and Express to build dynamic and efficient web applications.</p>
        </section>
        <section>
          <h2 className='section-header text-shadow-mid'>Database Management</h2>
          <p className='section-discription'>Skilled in integrating databases like MongoDB, SQL, and PostgreSQL, ensuring robust data management and security.</p>
        </section>
        <section>
          <h2 className='section-header text-shadow-mid'>Emerging Technologies</h2>
          <p className='section-discription'>Venturing into the realm of Web3, I'm equipped to develop solutions that are not only functional but also future-ready.</p>
        </section>
      </div>
      <div className='service-spacer'></div>
      <footer>
        I'm committed to delivering quality web solutions that are tailored to your unique requirements. Whether it's a simple website or a complex web application, my focus is on creating an engaging user experience without overcomplicating things.
      </footer>
    </div>
  );
}

export default Services;
