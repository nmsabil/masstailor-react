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
        <p className='subtitle'>
          If you are looking for exceptional tailoring service in London, then
          look no further!
        </p>
        <div className='service-card'>
          <Card
            src={img1}
            alt='IndianDress'
            title='Indian Dress'
            description='Our made to measure Indian Dress service starts with a personalised one to one meeting at our premises. All Indian suits are hand drafted, cut and fitted to the shape and style of our customers.'
          />
          <Card
            src={img2}
            alt='PunjabiDress'
            title='Punjabi Dress'
            description='Punjabi Suits are personally hand drafted, cut and fitted to the shape and style of our customers. Our handmade bespoke suit service is known to be on par with the best bespoke tailors in the world.'
          />
          <Card
            src={img3}
            alt='SareeBlouse'
            title='Saree Blouse'
            description='For all kinds of dress, western and Indian, we provide alterations. Designs to match and fit, different necklines and sleeves to choose.'
          />
          <Card
            src={img4}
            alt='SareeFall'
            title='Saree Falls'
            description='Variety of professionally stitched saree falls. Exotic patterns and borders accents the elegance of your sarees.'
          />
          <Card
            src={img5}
            alt='Suit'
            title='Suit'
            description='Both Full & Semi Bespoke items are hand drafted, cut, and stitched.'
          />
          <Card
            src={img6}
            alt='Alteration'
            title='Alteration'
            description='Alterations to pants and jeans. Shorten or lengthen, take in or let out. Personalise your outfit'
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
