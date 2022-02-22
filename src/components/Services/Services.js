import React from "react";
import Card from "../card/Card";

function Services() {
  return (
    <div className='services'>
      <div className='container'>
        <div class='patterns'>
          <svg width='100%' height='100%'>
            <text x='50%' y='50%' text-anchor='middle'>
              Services
            </text>
          </svg>
        </div>
        <h3>
          We are here <span>for you</span>
        </h3>
        <p>
          If you are looking for exceptional tailoring service in London, then
          look no further!
        </p>
        <div className='service-card'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='service-card'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Services;
