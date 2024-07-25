import React from 'react'

const Contact = () => {
  return (
    <section className="contact-section mx-8 mt-4 text-white">
    <h2 className='text-3xl font-bold text-center underline'>Contact Us</h2>

    {/* contact form begins here */}
    <form action="#" method="post" className=' bg-white text-black flex flex-col gap-y-2 p-2 rounded mt-4'> 
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required className='border-slate-600 border-2 rounded'/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required className='border-slate-600 border-2 rounded'/>

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required className='border-slate-600 border-2 rounded' rows={5}></textarea>

      <button type="submit" className='w-1/2 text-center bg-slate-500 mx-auto px-2 py-1 rounded font-bold text-white hover:bg-slate-700'>Send Message</button>
    </form>

    <div className="contact-info mt-4 text-sm md:text-base pb-4">
      <p><strong>Phone:</strong> +1 (123) 456-7890</p>
      <p><strong>Email:</strong> info@springdale.edu</p>
      <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
    </div>
  </section>
  )
}

export default Contact