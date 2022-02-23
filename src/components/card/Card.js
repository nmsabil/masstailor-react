import React from "react";

function Card(props) {
  return (
    <div class='card'>
      <figure class='card__thumb'>
        <img src={props.src} alt={props.alt} class='card__image' />
        <figcaption class='card__caption'>
          <h2 class='card__title'>
            NASA Has Found Hundreds Of Potential New Planets
          </h2>
          <p class='card__snippet'>
            NASA released a list of 219 new “planet candidates” discovered by
            the Kepler space telescope, 10 of which are similar to Earth’s size
            and may be habitable by other life forms.
          </p>
          <a href='/' class='card__button'>
            Read more
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;