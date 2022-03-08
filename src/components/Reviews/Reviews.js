import React from "react";
import ReviewCard from "../reviewCard/ReviewCard";

function Reviews() {
  return (
    <div className='reviews'>
      <div className='container'>
        <div className='header'>
          <div className='patterns'>
            <svg width='100%' height='100%'>
              <text x='50%' y='50%' textAnchor='middle'>
                Reviews
              </text>
            </svg>
          </div>
          <h3>
            What Our <span>customers say</span>
          </h3>
          {/* <p className='subtitle'>
          If you are looking for exceptional tailoring service in London, then
          look no further!
        </p> */}
        </div>
        <div className='review'>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
