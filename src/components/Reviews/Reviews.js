import React from "react";
import { ElfsightWidget } from "react-elfsight-widget";

function Reviews() {
  return (
    <div className='services'>
      <div className='container'>
        <div class='patterns'>
          <svg width='100%' height='100%'>
            <text x='50%' y='50%' text-anchor='middle'>
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
        <div className=''>
          <ElfsightWidget widgetID='9d7e7745-df8f-4488-8ee9-971bcbd8fb76' />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
