import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function reviewCard(props) {
  return (
    <div className={`reviewCard ${props.cardnumber || ""}`}>
      <figure className='snip1192'>
        <blockquote>{props.quote} </blockquote>
        <div className='author'>
          <div className='name'>
            <div className='stars'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h5>{props.name}</h5>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default reviewCard;
