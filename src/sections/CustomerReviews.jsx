import React from 'react'
import {reviews} from "../consonants/index";
import { ReviewCards } from '../componets';

const CustomerReviews = () => {
  return (
    <section className='max-container' >
      <h3 className='text-center text-4xl font-bold'> What Our 
        <span className='text-red-500'> Customer </span>
         Says?
      </h3>
   <p className='mt-4 text-center mx-auto max-w-lg text-neutral-500 font-semibold'>Hear genuine stories from our satisfied customer about their exceptional experience with us.</p>
   <div className='mt-24 flex flex-1 justify-center items-center max-lg:flex-col gap-14'>
    {reviews.map((review)=>(
      <ReviewCards key={review.customerName} imgURL={review.imgURL} customerName={review.customerName}
      rating = {review.rating}
      feedback = {review.feedback}
      />
    ))}
   </div>
    </section>
  )
}

export default CustomerReviews