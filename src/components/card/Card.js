import React from "react";

function Card(props) {
  return (
    <div className='card'>
      <figure className='card__thumb'>
        <img src={props.src} alt={props.alt} className='card__image' />
        <figcaption className='card__caption'>
          <h2 className='card__title'>{props.title}</h2>
          <p className='card__snippet'>{props.description}</p>
          {/* <a href='/' className='card__button'>
            Read more
          </a> */}
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;
