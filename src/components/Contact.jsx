import React from 'react';
import './contact.css'

const Contact = () => {
  const handleSubmit = () => {
    // You can add your logic here for handling the form submission
    console.log('Form submitted!');
  };

  return (
    <div className='contact'>
      <div className='contact-area'>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>

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
