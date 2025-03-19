import React from 'react'
import {Button} from "../componets/index"

const Subscribe = () => {
  return (
    <section className='max-container flex flex-col justify-between items-center gap-10 max-lg:flex-col' id='contact-us'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-bold'>Sign UP Form 
        <span className='text-red-500'> Updates </span>  $ Newsletter 
      </h3>
  <div className='lg:max-w-[60%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-neutral-500 rounded-full'>
    <input type="text" placeholder='subscribe@nike.com' className='sm:flex-1 max-sm:w-full  text-neutral-500 pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-neutral-500 max-sm:rounded-full' />
    <div className='flex max-sm:justify-end items-center'>
    <Button label="Sign Up"  />
  </div> 
  </div> 
  
    </section>
  )
}

export default Subscribe