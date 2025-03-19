import React from 'react'
import { arrowRight } from '../assets/icons'
import { Button } from '../componets'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-md:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col '>
        <h2 className='mt-10  text-4xl capitalize  font-bold lg:max-w-lg'>
            We Provide You 
          <span className='text-red-500'>  Super </span>
          <span className='text-red-500'> Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg font-semibold text-neutral-500 text-lg leading-7'>
        Ensuring premiem comfort and style , our meticulously crafted footwer is desighned to elevate your expereince , provinding you with unmatched quality , innovation , and a touch of elegsnce
        </p>
       <p className='mt-6 lg:max-w-lg text-neutral-500 text-lg leading-7 font-semibold'>Our dedications to detail and excellence ensures your satisfication </p>
       <div className='mt-11'> <Button label='View detail' iconURL={arrowRight} /></div>

      </div>
      <div className='flex-1 flex justify-center items-center '>
     <img src={shoe8} alt=""
     width={570}
     height={522}
     className='object-contain' />
      </div>

    </section>
  )
}

export default SuperQuality