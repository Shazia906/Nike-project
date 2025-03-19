import React from 'react'

const ServiceCard = ({
    imgURL , label , subtext
}) => {
  return (
    <div className='flex-1 sm:w-[190px] sm:min-w-[190px] w-full rounded-[20px] shadow-lg shadow-zinc-300 bg-white px-10 py-16'>
        <div className="w-11 h-11 flex justify-center items-center bg-red-500 rounded-full">
            <img src={imgURL} alt="" width={24} height={24} />
        </div>
        <h3 className='mt-5 font-bold  text-3xl'>{label}</h3>
        <p className='mt-3 text-xl  text-neutral-600'>{subtext}</p>

    </div>
  )
}

export default ServiceCard