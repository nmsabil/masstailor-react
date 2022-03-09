import React from "react";

function reviewCard(props) {
  return (
    <div className={`reviewCard ${props.cardnumber || ""}`}>
      <figure className='snip1192'>
        <blockquote>{props.quote} </blockquote>
        <div className='author'>
          <img
            style={{ display: "none" }}
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg'
            alt='sq-sample1'
          />
          <div className='name'>
            {props.star}
            <h5>{props.name}</h5>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default reviewCard;
