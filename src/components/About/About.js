import React from "react";
import img from "../../images/hero/IMG_8572.jpg";
import IconDescription from "../iconDescription/IconDescription";

import { faScissors, faAward, faStar } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className='about'>
      <div className='header'>
        <div className='patterns'>
          <svg width='100%' height='100%'>
            <text x='50%' y='50%' textAnchor='middle'>
              About
            </text>
          </svg>
        </div>
        <h3>
          <span>Background</span>
        </h3>
      </div>
      <div className='about-content'>
        <img src={img} className='image' />
        <div className='content'>
          <div>
            Marajuddin grew up with a tape measure draped around his neck. His
            father drew him to his side as a young child so that he could have
            an unimpeded view of what he did—and what his father before him had
            done—for a living. What remains with him, foremost, from those
            earliest, foreign moments was his father’s demeanor: gracious,
            patient, focused.
            <span className='span'>
              Mr Maraj is Asian womenswear specialist located in Southall,
              London
            </span>
          </div>
          <div className='icons'>
            <IconDescription
              icon={faScissors}
              textColor='40 Years'
              text=' Expirience'
            />
            <IconDescription
              icon={faAward}
              textColor='Indian dress '
              text='Specialist'
            />
            <IconDescription
              icon={faStar}
              textColor='Best Quality'
              text='Guaranteed'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
