// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
function ContactForm() {
  return (
    <form className='form' action=''>
      <div className='name-email-input'>
        <input placeholder='Name' type='text' />
        <input placeholder='Email' type='email' />
      </div>
      <div className='message'>
        <textarea
          placeholder='Message'
          name='message'
          cols='40'
          rows='10'
        ></textarea>
      </div>
      <div className='btn-container'>
        <button className='submit' type='submit'>
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
