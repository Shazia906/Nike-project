import React from 'react'
import { star } from '../assets/icons'

const ReviewCards = ({imgURL , customerName , rating , feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col shadow-lg shadow-zinc-100 '>
   <img src={imgURL} alt="" className='rounded-full object-cover w-[120px] h-[120px]' />
   <p className='mt-6 max-w-sm text-center text-neutral-500 font-semibold text-xl '>{feedback}</p>
   <div className='mt-3 flex justify-center     items-center gap-2.5'>
    <img src={star}  alt="" width={24} height={24}  className='object-contain'/>
    <p className='text-xl text-neutral-500'>({rating})</p>
   </div>
   <h3 className='mt-1 text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCards