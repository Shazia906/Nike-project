import { useState } from "react";
import { shoes, statistics } from "../consonants/index";
import { Button, ShoeCard } from "../componets/index";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className=' w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='mt-20 relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10  text-7xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 bg-white'>
            The New Arrival
          </span>
          <br />
          <span className='text-red-500 inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className=' text-neutral-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl  font-bold'>{stat.value}</p>
              <p className='leading-7 text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-60 bg-primary bg-hero bg-cover bg-center  bg-gray-300 rounded-2xl'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={600}
          height={480}
          className='object-contain relative z-10'
        />

        <div className='flex justify-center sm:gap-6 gap-4 absolute -bottom-[7%]  max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;