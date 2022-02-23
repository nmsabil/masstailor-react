import React from "react";
import Card from "../card/Card";
import img1 from "../../images/services/IndianDress.jpg";
import img2 from "../../images/services/punjabi_suit.jpg";
import img3 from "../../images/services/saree_blouse.jpg";
import img4 from "../../images/services/saree_fall.jpg";
import img5 from "../../images/services/unnamed.jpg";
import img6 from "../../images/services/2.jpg";

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
          <Card src={img1} alt='a' />
          <Card src={img2} alt='b' />
          <Card src={img3} alt='c' />
          <Card src={img4} alt='d' />
          <Card src={img5} alt='e' />
          <Card src={img6} alt='f' />
        </div>
      </div>
    </div>
  );
}

export default Services;
