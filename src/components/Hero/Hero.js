import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/hero/IMG_8572.jpg";
import img2 from "../../images/hero/IMG_8626.jpg";
import img3 from "../../images/hero/IMG_8646.jpg";
import img4 from "../../images/hero/IMG_8672.jpg";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
  };
  return (
    <div className='hero-container'>
      <Slider {...settings}>
        <div className='slide'>
          <div className='content'>
            <h3 className='location'>London Southall</h3>
            <h1>
              -Masss <span>Tailor</span>-
            </h1>
            <h2>
              MADE TO MEASURE | ALL TYPES OF STITCHING | ALTERATIONS AND REPAIRS
            </h2>
          </div>
          <img src={img2} alt='' />
        </div>
        <div className='slide'>
          <div className='content'>
            <h3 className='location'>ASIAN WOMENSWEAR SPECIALIST</h3>
            <h1>
              -40 YEARS <span>OF EXPERIENCE</span>-
            </h1>
          </div>
          <img src={img1} alt='' />
        </div>
        <div className='slide'>
          <div className='content'>
            <h3 className='location'>LONDON’S FINEST</h3>
            <h1>
              -EXPERT <span>TAILORING</span>-
            </h1>
          </div>
          <img src={img3} alt='' />
        </div>
        <div className='slide'>
          <div className='content'>
            <h3 className='location'>MADE-TO-MEASURE</h3>
            <h1>
              -FIT<span> GUARANTEE</span>-
            </h1>
          </div>
          <img src={img4} alt='' />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
