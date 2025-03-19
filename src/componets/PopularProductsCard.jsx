import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = ({imgURL , name , price}) => {
  return (
    <div className='flex-1 flex flex-col w-full max-sm:w-ful'>
        <img src={imgURL} alt="name " className='w-[280px] h-[280px]' />
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="rating" width={24} height={24}/>
    <p className='text-xl   text-neutral-500'>(4.5)</p>
        </div>
    <p className='mt-2 font-semibold text-red-500'>{price}</p>
   <h3 className='mt-2 text-2xl font-semibold'>{name}</h3>
    </div>
  )
}

export default PopularProductsCard