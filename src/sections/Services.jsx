import React from 'react'
import { services} from '../consonants/index'
import ServiceCard from '../componets/ServiceCard'

const Services = () => {
  return (
    <section className='flex max-container flex-wrap justify-center gap-9'>
     {services.map((service)=>(
      <ServiceCard key={service.label} {...service}/>
     ))}
    </section>

  )
}
export default Services