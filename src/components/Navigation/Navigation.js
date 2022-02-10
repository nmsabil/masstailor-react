import React from "react";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar_logo'>
          <img src={logo} alt='' />
        </div>
        <div className='navbar_links'>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='navbar_cta'>
          <div>
            <FontAwesomeIcon className='me-2' icon={faPhoneFlip} />
            <span>07424605611</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
