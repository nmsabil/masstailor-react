import React from "react";

function reviewCard() {
  return (
    <div className='reviewCard'>
      <figure className='snip1192'>
        <blockquote>
          Calvin: Sometimes when I'm talking with others, my words can't keep up
          with my thoughts. I wonder why we think faster than we speak. Hobbes:
          Probably so we can think twice.{" "}
        </blockquote>
        <div className='author'>
          <img
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg'
            alt='sq-sample1'
          />
          <h5>Pelican Steve</h5>
        </div>
      </figure>
    </div>
  );
}

export default reviewCard;
