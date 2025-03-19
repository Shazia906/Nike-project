import React from 'react'
import { ourProducts } from '../consonants'
import { star } from '../assets/icons'
import { heart } from '../assets/images'

const OurProductsSection = () => {
  return (
    <section id='products' className='padding-10 max-container max-sm:mt-12'>
      <div
      className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold'> Our  Products </h2>
       <p className='lg:max-w-lg mt-2 font-normal text-[16px] text-neutral-500'>Experience top-notch quality and style our sought-after selections. Discover a world of comfort , desighn , value.</p>
      </div>
      <div
      className='mt-16 grid  place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  sm:gap-4 gap-14 '>
        {ourProducts.map((product)=>(
         <div key={product.name} className='flex-1 flex flex-col items-center w-full max-sm:w-ful shadow-lg  shadow-zinc-300 bg-white rounded-2xl'>
               <div className='relative'>
  <img src={product.imgURL} alt="name" className='w-[300px] h-[300px]  
  rounded-2xl'  
  />
  <img src={heart} alt="" width={70} height={70}
       className='absolute top-2.5 left-[220px] z-10 rounded-full'/>
</div>
                <div className='mt-8 flex justify-start gap-2.5'>
                    <img src={star} alt="rating" width={24} height={24}/>
            <p className='text-xl   text-neutral-500'>(4.5)</p>
                </div>
            <p className='mt-2 font-semibold text-red-500'>{product.name}</p>
           <h3 className='mt-2 text-2xl font-semibold'>{product.price}</h3>
            </div>
       
        ))}
      </div>

    </section>
  )
}

export default OurProductsSection