import React from 'react'
import SliderEm from './SliderEm'
import { SchoolIntro } from '../constants/Constant'

const HeroSection = () => {
  return (
    <div className="md:min-h-[80vh] flex items-center min-h-[70vh]  px-2 md:mb-0 mb-4">
        <div className="flex items-center min-h-[70vh] flex-wrap w-full">
          {/* left side */}
          <div className="Carasoul  h-[70vh] md:w-1/2 w-full">
            <SliderEm />
          </div>
          {/* right side */}
          <div className="intro  md:w-1/2 w-full text-center pt-4 md:pt-0 flex md:flex-col flex-col-reverse md:gap-y-0 gap-y-4">
            <img className='h-44 rounded md:h-64 inline-block mx-auto' src="LOGO.png" alt="" />
            <h2 className='intro  md:text-3xl text-xl font-bold mx-4 text-center md:mt-8 mt-4'>
              {SchoolIntro}
            </h2>
          </div>
        </div>
      </div>
  )
}

export default HeroSection