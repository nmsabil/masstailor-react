import React from "react";

function Card(props) {
  return (
    <div class='card'>
      <figure class='card__thumb'>
        <img src={props.src} alt={props.alt} class='card__image' />
        <figcaption class='card__caption'>
          <h2 class='card__title'>{props.title}</h2>
          <p class='card__snippet'>{props.description}</p>
          <a href='/' class='card__button'>
            Read more
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;
