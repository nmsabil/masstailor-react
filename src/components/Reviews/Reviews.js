import React from "react";
import ReviewCard from "../reviewCard/ReviewCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        </div>
        <div className='review'>
          <ReviewCard
            cardnumber='card--2'
            quote='Amazing work! Found MASSS tailor online and went off the reviews provided and they did not fail! Staff were lovely and very friendly and helpful. Managed to get my engagement suit altered flawlessly for a perfect fit! Has earned themselves a life long customer moving forward for anything tailor related !!'
            name='Saeed Issa'
            star={<FontAwesomeIcon icon='fa-solid fa-star' />}
          />
          <ReviewCard
            cardnumber='card--1'
            quote='Amazing tailor, Im so happy with my new outfit - he was very professional, clearly knew what he was doing, and even went beyond the alterations I requested to ensure the dress fit me perfectly. I really love the new dress and will definitely return here for future tailoring.'
            name='Divya Sukumar'
          />
          <ReviewCard
            cardnumber='card-0'
            quote="Maraj is the best tailor in the town. I'm regularly in need  for alterations and made to measure, I have been to many tailors in Southall but this one was by far the best quality work.  I got a lengha and blouse made, it was perfect fit and on time. I highly recommend!!! Very very happy with his service. Thanks a lot Masss tailor. Definitely check him out if you haven't already. You won't regret it."
            name='San'
          />
          <ReviewCard
            cardnumber='card-1'
            quote='I am very happy with MASSS Tailor. The quality of the work and the professionalism was brilliant as he altered two of my trousers. I will be using MASSS tailoring again in the future and definitely recommend his service.'
            name='P B'
          />
          <ReviewCard
            cardnumber='card-2'
            quote='Very recommend tailor, he made my dress perfect fit with all beautiful details and blink for new year, Im very happy with it'
            name='Monika Sxyzkx'
          />
          <ReviewCard
            cardnumber='card-3'
            quote='I have been using his services for the past 5 years. He is a master at his work! Very efficient, responsive and affordable!'
            name='Tarun Pawar'
          />
          <ReviewCard
            cardnumber='card-4'
            quote='मास टेलर बहुत अच्छा  काम करता है बहुत टेलर से काम कराया लेकिन पहली बार अच्छा टेलर मिला  लन्दन में धन्यवाद'
            name='Azra Sultana'
          />
          <ReviewCard
            cardnumber='card-5'
            quote='One of the best tailors in southall. His work is incredible'
            name='M B'
          />
          <ReviewCard
            cardnumber='card-6'
            quote='Very polite gent! Great service. I recommend him to my friends and family'
            name='Bao Dang'
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
