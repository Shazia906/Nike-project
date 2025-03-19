import React from 'react'
import { products } from '../consonants'
import PopularProductsCard from '../componets/PopularProductsCard'



const PopularProducts = () => {
  return (
    <section id='products' className='padding-10 max-container max-sm:mt-12'>
      <div
      className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold'>Our <span className='text-red-500'>Popular</span> Products</h2>
       <p className='lg:max-w-lg mt-2 font-normal text-[16px] text-neutral-500'>Experience top-notch quality and style our sought-after selections. Discover a world of comfort , desighn , value.</p>
      </div>
      <div
      className='mt-16 grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 '>
        {products.map((product)=>(
          <PopularProductsCard key={product.name} {...product}/>
        ))}
      </div>

    </section>
  )
}

export default PopularProducts