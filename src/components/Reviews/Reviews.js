import React from "react";

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
          <div
      class="tagembed-container"
      style="width: 1000px; height: 1000px; overflow: auto"
    >
      <div
        class="tagembed-socialwall"
        data-wall-id="29609"
        view-url="https://widget.tagembed.com/29609?view"
      ></div>
      <script
        src="//widget.tagembed.com/embed.min.js"
        type="text/javascript"
      ></script></div>
      </div>
    </div>
  );
}

export default Reviews;
