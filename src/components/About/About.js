import React from "react";

function About() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='header'>
          <div className='patterns'>
            <svg width='100%' height='100%'>
              <text x='50%' y='50%' textAnchor='middle'>
                About
              </text>
            </svg>
          </div>
          <h3>
            What Our <span>customers say</span>
          </h3>
        </div>
        <div className='review'></div>
      </div>
    </div>
  );
}

export default About;
