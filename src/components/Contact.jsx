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
        <div className="contact-heading">
          <h1>Contact Form</h1>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              Subject<br />
              <input type="text" name="subject" />
            </label>
            <br />
            <label>
              Name<br />
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email<br />
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              Message<br />
              <textarea rows={4} name="message"></textarea>
            </label>
            <br />
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
