import React from 'react'
import { offer } from '../assets/images'
import { Button } from '../componets'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-lg:flex-col gap-10 max-container'>
      <div className='flex-1 '>
        <img src={offer} width={773} height={687} className='object-contain' alt="" />  </div>
        <div className='flex flex-1 flex-col '>
        <h2 className='mt-10  text-4xl capitalize  font-bold lg:max-w-lg'>
            We Provide You 
          <span className='text-red-500'> {" "} Super </span>
          <span className='text-red-500'> {" "} Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg font-semibold text-neutral-500 text-xl'>
        Ensuring premiem comfort and style , our meticulously crafted footwer is desighned to elevate your expereince , provinding you with unmatched quality , innovation , and a touch of elegsnce
        </p>
       <p className='mt-6 lg:max-w-lg text-neutral-500 text-xl font-semibold'>Our dedications to detail and excellence ensures your satisfication </p>
       <div className='mt-11 flex gap-2'> <Button label='View detail' iconURL={arrowRight} />
       <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-white border-black max-w-[200px] rounded-full">View detail <img src={arrowRight} alt="" /></button>
       </div>
      </div>
    </section>
  )
}

export default SpecialOffer