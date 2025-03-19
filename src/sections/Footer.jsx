import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../consonants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between flex-col items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
          <img src={footerLogo} width={150} height={46} alt="" /></a>
          <p className='mt-6 text-white sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store . Get Rewards</p>
    <div className='flex  items-center gap-5 mt-8'>
      {socialMedia.map((icon)=>(
        <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
          <img src={icon.src} alt="" width={24} height={24} />
        </div>
      ))}

    </div>
    <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-10'>
      {footerLinks.map((section)=>(
        <div
        key={section}>
          <h4 className='text-white font-medium text-2xl  mb-6'>{section.title}</h4>
          <ul>
            {section.links.map((link)=>(
              <li key={link.name} className='mt-3 text-white hover:text-gray-400'>
                <a href="">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
        </div>
        <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center '>
          <div className='flex flex-1 justify-start items-center gap-5 cursor-pointer'>
            <img src={copyrightSign} alt="" width={20} height={20} className='rounded-full m-0' />
            <p>Copyright . All rights reserverd</p>
          </div>
           <p className='cursor-pointer'>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer