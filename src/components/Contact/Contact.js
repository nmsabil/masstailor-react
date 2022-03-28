import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className='contact'>
      <div className='header'>
        <div className='patterns'>
          <svg width='100%' height='100%'>
            <text x='50%' y='50%' textAnchor='middle'>
              Contact
            </text>
          </svg>
        </div>
        <h3>
          Get in<span> touch</span>
        </h3>
      </div>
      <div className='gallery'>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
