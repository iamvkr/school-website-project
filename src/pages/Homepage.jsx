import React from 'react'
import HeroSection from '../components/HeroSection';
import NoticesSection from '../components/Notices/NoticesSection';
import ContactUsSection from '../components/Contact/ContactUsSection';

const Homepage = () => {


  return (
    <div className='w-full md:w-[85%] mx-auto my-2 text-white'>

      <HeroSection/>

      <NoticesSection/>

      <ContactUsSection/>
    </div>
  )
}

export default Homepage