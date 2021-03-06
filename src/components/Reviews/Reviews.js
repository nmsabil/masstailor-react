import React from "react";
import ReviewCard from "../reviewCard/ReviewCard";

function Reviews() {
  return (
    <div className='reviews' id='reviews'>
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
            quote='????????? ???????????? ???????????? ???????????????  ????????? ???????????? ?????? ???????????? ???????????? ?????? ????????? ??????????????? ??????????????? ???????????? ????????? ??????????????? ???????????? ????????????  ??????????????? ????????? ?????????????????????'
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
          <ReviewCard
            cardnumber='card-7'
            quote='Was in the area looking for a tailor and found this spot...just needed to get measured...very friendly and professional...he offered advice and guidance on what was being proposed...much appreciated...paaji, salute!!'
            name='SilvaBack'
          />
          <ReviewCard
            cardnumber='card-8'
            quote='Visited Masss Tailor after being let down by previous tailors in Southall. Was welcomed as soon as I came in. Very friendly and polite.  Had 2 shirts that needed slimming up and trousers that needed tightening. Was told how it would be done and given a quick date for pickup. Picked up my clothes and was amazed to see how well they were done. Clothes fitted very well. Overall very happy with the service. Highly recommend to anyone looking for a good tailor. Will surely be coming back for more alterations. Thank you very much.'
            name='Mohammad Sabil'
          />
          <ReviewCard
            cardnumber='card-9'
            quote='Absolutely first rate service. Alteration beautifully done on the same day.'
            name='Rosalie Wilkinson'
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
