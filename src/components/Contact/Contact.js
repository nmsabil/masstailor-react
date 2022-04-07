import React from "react";
import { useRef } from "react";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import GoogleMaps from "../GoogleMaps/GoogleMaps";

function Contact() {
  return (
    <div className='contact' id='contact'>
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
      <div className='address-form container'>
        <div className='half-width'>
          <div className='address'>
            <div className='phone'>
              TEL.: <a href='tel:07424605611'>07424605611</a>
            </div>
            <div className='company-address'>
              Masss Tailor, <br />
              <a href='https://www.google.com/maps/place/MASSS+Tailor/@51.4998756,-0.3856994,17z/data=!3m1!4b1!4m5!3m4!1s0x487672b143b1add7:0x289fa0e9b80719b4!8m2!3d51.4998625!4d-0.3833921'>
                68 King St (Unit 7) Sidhu Market,
              </a>
              <br /> Southall UB5 4DD
            </div>

            <div className='social'>
              <div className='email'>
                <a href='mailto:Marajshotoken@gmail.com'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <div className='facebook'>
                <a href='https://www.facebook.com/marajuddin.marajuddin'>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </div>
              <div className='instagram'>
                <a href='https://instagram.com/massstailor?igshid=fjcgzmt8zlgg'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='half-width'>
          <div className='form-container'>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className='google-maps container'>
        <GoogleMaps />
      </div>
    </div>
  );
}

export default Contact;
