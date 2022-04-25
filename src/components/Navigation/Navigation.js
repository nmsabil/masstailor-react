import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import ScrollspyNav from "react-scrollspy-nav";

function Navigation() {
  const [isActive, setActive] = useState("false");

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  const handleCall = (e) => {
    window.open("tel:07424605611", "_self");
  };

  return (
    <ScrollspyNav
      scrollTargetIds={["services", "reviews", "about", "work", "contact"]}
      offset={-100}
      activeNavClass='active'
    >
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
                  <a href='#services'>Services</a>
                </li>
                <li>
                  <a href='#reviews'>Testimonials</a>
                </li>
                <li>
                  <a href='#about'>About</a>
                </li>

                <li>
                  <a href='#work'>Work</a>
                </li>

                <li>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
            </div>
            <div className='desktop_cta'>
              <div>
                <a onClick={handleCall}>
                  <FontAwesomeIcon icon={faPhoneFlip} />
                  <span>07424605611</span>
                </a>
              </div>
            </div>
            <a
              className={"mobile-nav-button " + (isActive ? "" : "show")}
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
                <a href='#services' onClick={handleToggle}>
                  Services
                </a>
              </li>
              <li>
                <a href='#reviews' onClick={handleToggle}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href='#about' onClick={handleToggle}>
                  About
                </a>
              </li>

              <li>
                <a href='#work' onClick={handleToggle}>
                  Work
                </a>
              </li>

              <li>
                <a href='#contact' onClick={handleToggle}>
                  Contact
                </a>
              </li>

              <div className='mobile-cta'>
                <div>
                  <a onClick={handleCall}>
                    <FontAwesomeIcon icon={faPhoneFlip} />
                    <span>07424605611</span>
                  </a>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </ScrollspyNav>
  );
}

export default Navigation;
