import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navigation() {
  const [isActive, setActive] = useState("false");
  const [onClickStyle, setonClickStyle] = useState("true");

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
                <AnchorLink offset='50' href='#services'>
                  Services
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset='130' href='#about'>
                  About
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset='50' href='#work'>
                  Work
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset='50' href='#reviews'>
                  Testimonial
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset='80' href='#contact'>
                  Contact
                </AnchorLink>
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
              <AnchorLink onClick={handleToggle} offset='40' href='#services'>
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={handleToggle} offset='120' href='#about'>
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={handleToggle} offset='40' href='#work'>
                Work
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={handleToggle} offset='40' href='#reviews'>
                Testimonial
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={handleToggle} offset='70' href='#contact'>
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
