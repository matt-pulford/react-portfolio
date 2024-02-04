import React, { useState } from 'react';
import './css/contact.css';
import emailjs from 'emailjs-com';
import thankYouImage from '../images/thank-you.png'; // Update this path to the correct location of your image

const Contact = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ngw3jjg', 'template_npkmggc', e.target, 'kaEejbHIadQMfJB9a')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          setShowThankYou(true); // Show the thank-you image
          setTimeout(() => {
            setShowThankYou(false); // Hide the thank-you image after 3 seconds and reset the form
            e.target.reset(); // Reset form fields here
          }, 2000);
      }, (error) => {
          console.log('Failed to send email:', error);
      });
  };

  return (
    <div className='contact'>
      <div className='contact-area'>
        <div className="contact-form">
          <form id='contact-form' onSubmit={handleSubmit}>
            <div className='name-section'>
              <label htmlFor="name">Name</label><br />
              <input type="text" name="name" id="name" />
            </div>
            <div className='email-section'>
              <label htmlFor="email">Email</label><br />
              <input type="email" name="email" id="email" required/>
            </div>
            <div className='message-section'>
              <label htmlFor="message">Message</label><br />
              <textarea id="message" name="message" rows="8" required></textarea>
            </div>
            <div className="submit-button">
              <button type="submit">Send</button>
            </div>
          </form>
          <img src={thankYouImage} alt="Thank You" className={`thank-you-img ${showThankYou ? 'show' : ''}`} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
