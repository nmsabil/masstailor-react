import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [isActive, setActive] = useState("false");

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return (
    <div className='navbar'>
      <div className='desktop'>
        <div className='container desktop_container'>
          <div className='desktop_logo'>
            <a href='/'>
              MASSS <span>TAILOR</span>
            </a>
          </div>
          <div className='desktop_links'>
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
          <div className='desktop_cta'>
            <div>
              <a href='tel:07424605611'>
                <FontAwesomeIcon icon={faPhoneFlip} />
                <span>07424605611</span>
              </a>
            </div>
          </div>
          <a
            className={"mobile-nav-button " + (isActive ? "" : "show")}
            href='/'
            onClick={handleToggle}
          >
            <span></span>
          </a>
        </div>
      </div>
      <div className={"navbar mobile " + (isActive ? "" : "show")}>
        <nav>
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
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
