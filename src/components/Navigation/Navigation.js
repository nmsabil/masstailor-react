import React from "react";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div className='navbar'>
      <div className='container navbar_container'>
        <div className='navbar_logo'>
          <a href='/'>
            <img src={logo} alt='MasssTailor Logo' />
          </a>
        </div>
        <div className='navbar_links'>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Services</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Work</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='navbar_cta'>
          <div>
            <a href='/'>
              <FontAwesomeIcon icon={faPhoneFlip} />
              <span>07424605611</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
