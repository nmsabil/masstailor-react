import React from "react";
import ImageGallery from "react-image-gallery";
import img0 from "../../images/hero/IMG_8626.jpg";
import img1 from "../../images/gallery/1.jpg";
import img2 from "../../images/gallery/2.jpg";
import img3 from "../../images/gallery/3.jpg";
import img4 from "../../images/gallery/4.jpg";
import img5 from "../../images/gallery/5.jpg";
import img6 from "../../images/gallery/6.jpg";
import img7 from "../../images/gallery/7.jpg";
import img8 from "../../images/gallery/8.jpg";
import img9 from "../../images/gallery/9.jpg";
import img10 from "../../images/gallery/10.jpg";
import img11 from "../../images/gallery/11.jpg";
import img12 from "../../images/gallery/12.jpg";
import img13 from "../../images/gallery/13.jpg";
import img14 from "../../images/gallery/14.jpg";
import img15 from "../../images/gallery/15.jpg";
import img16 from "../../images/gallery/16.jpg";
import img17 from "../../images/gallery/17.jpg";
import img18 from "../../images/gallery/18.jpg";
import img19 from "../../images/gallery/19.jpg";
import img20 from "../../images/gallery/20.jpg";
import img21 from "../../images/gallery/21.jpg";
import img22 from "../../images/gallery/22.jpg";
import img23 from "../../images/gallery/23.jpg";
import img24 from "../../images/gallery/24.jpg";
import img25 from "../../images/gallery/25.jpg";
import img26 from "../../images/gallery/26.jpg";
import img27 from "../../images/gallery/27.jpg";
import img28 from "../../images/gallery/28.jpg";
import img29 from "../../images/gallery/29.jpg";
import img30 from "../../images/gallery/30.jpg";
import img31 from "../../images/gallery/31.jpg";
import img32 from "../../images/gallery/32.jpg";
import img33 from "../../images/gallery/33.jpg";
import img34 from "../../images/gallery/34.jpg";

function Work() {
  const images = [
    {
      original: img0,
      thumbnail: img0,
    },
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
    {
      original: img13,
      thumbnail: img13,
    },
    {
      original: img14,
      thumbnail: img14,
    },
    {
      original: img15,
      thumbnail: img15,
    },
    {
      original: img16,
      thumbnail: img16,
    },
    {
      original: img17,
      thumbnail: img17,
    },
    {
      original: img18,
      thumbnail: img18,
    },
    {
      original: img19,
      thumbnail: img19,
    },
    {
      original: img20,
      thumbnail: img20,
    },
    {
      original: img21,
      thumbnail: img21,
    },
    {
      original: img22,
      thumbnail: img22,
    },
    {
      original: img23,
      thumbnail: img23,
    },
    {
      original: img24,
      thumbnail: img24,
    },
    {
      original: img25,
      thumbnail: img25,
    },
    {
      original: img26,
      thumbnail: img26,
    },
    {
      original: img27,
      thumbnail: img27,
    },
    {
      original: img28,
      thumbnail: img28,
    },
    {
      original: img29,
      thumbnail: img29,
    },
    {
      original: img30,
      thumbnail: img30,
    },
    {
      original: img31,
      thumbnail: img31,
    },
    {
      original: img32,
      thumbnail: img32,
    },
    {
      original: img33,
      thumbnail: img33,
    },
    {
      original: img34,
      thumbnail: img34,
    },
  ];

  return (
    <div className='work'>
      <div className='header'>
        <div className='patterns'>
          <svg width='100%' height='100%'>
            <text x='50%' y='50%' textAnchor='middle'>
              Our Work
            </text>
          </svg>
        </div>
        <h3>
          <span>Gallery</span>
        </h3>
      </div>
      <div className='gallery'>
        <ImageGallery items={images} thumbnailPosition='top' />;
      </div>
    </div>
  );
}

export default Work;
