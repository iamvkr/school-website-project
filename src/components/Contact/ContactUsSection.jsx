import React from 'react'
import Contact from './Contact'
import iconsPack from '../../constants/iconsPack'

const ContactUsSection = () => {
  return (
    <div className="md:min-h-[80vh] flex items-center min-h-[70vh]  px-4 mt-4" id='contact-us-page'>
      <div className="flex items-center min-h-[70vh] flex-wrap w-full">
        <div className="contact-us bg-slate-900 min-h-[70vh] md:w-[50%] w-full rounded">
          <Contact />
        </div>
        <div className="intro md:w-[50%] w-full text-center pt-4 md:pt-0">
          <div className="h-80 w-[80%] inline-block">
            <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
          <h2 className='intro  md:text-2xl text-xl font-bold mx-4 text-center md:mt-8 mt-4'>
            Locate Us On Map
          </h2>

          {/*icons */}
          <div className='flex gap-x-4 w-full justify-center mt-4'>
            {iconsPack.Facebook}
            {iconsPack.Youtube}
            {iconsPack.Insta}
            {iconsPack.Twitter}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsSection