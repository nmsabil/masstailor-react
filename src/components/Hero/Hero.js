import React from "react";
import Slider from "react-slick";
import img1 from "../../images/hero/IMG_8572.jpg";
import img2 from "../../images/hero/IMG_8626.jpg";
import img3 from "../../images/hero/IMG_8646.jpg";
import img4 from "../../images/hero/IMG_8672.jpg";

function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='hero-container'>
      <Slider {...settings}>
        <div className='slide'>
          <img src={img1} alt='' />
        </div>
        <div className='slide'>
          <img src={img2} alt='' />
        </div>
        <div className='slide'>
          <img src={img3} alt='' />
        </div>
        <div className='slide'>
          <img src={img4} alt='' />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
