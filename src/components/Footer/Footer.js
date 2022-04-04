import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='logo'>
          <div className='desktop_logo'>
            <a href='/'>
              MASSS <span>TAILOR</span>
            </a>
          </div>
        </div>
        <div className='copyright'>
          <p>
            © 2022 Mohammad Sabil. All Rights Reserved. | Masss Tailor Southall
          </p>
        </div>
        <div className='icons'>
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
            <div className='phone'>
              <a href='tel:07424605611'>
                <FontAwesomeIcon icon={faPhoneFlip} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
