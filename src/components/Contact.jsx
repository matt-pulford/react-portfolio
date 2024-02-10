import React from 'react';
import './css/contact.css'
import emailjs from 'emailjs-com';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_ngw3jjg', 'template_npkmggc', e.target, 'kaEejbHIadQMfJB9a')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          // Handle successful email sending (e.g., show a confirmation message)
      }, (error) => {
          console.log('Failed to send email:', error);
          // Handle email sending failure (e.g., show an error message)
      });
  };
  

  return (
    <div className='contact'>
      <div className='contact-area'>
        <div className="contact-form">
          <form id='contact-form' onSubmit={handleSubmit}>

            <div className='name-section'>
              <label for="name">Name</label><br />
              <input type="text" name="name" id="name" />
            </div>
            <div className='email-section'>
              <label for="email">Email</label><br />
              <input type="email" name="email" id="email" />
            </div>
            <div className='message-section'>
              <label for="message">Message</label><br />
              <textarea id="message" name="message" rows="8"></textarea>
            </div>
            <div className="submit-button">
              <button type="submit">Send</button>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
