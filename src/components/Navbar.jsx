import React, { useState } from 'react'
import { SchoolAddress, SchoolName, links } from '../constants/Constant'
import { Link } from 'react-router-dom'
import iconsPack from '../constants/iconsPack'

const Navbar = () => {
  const [isMobileNavOpen, setisMobileNavOpen] = useState(false) //keeps track if mobile nav is open or closed.

  return (
    <nav className='mx-2 md:w-[85%] md:mx-auto'>
      {/* top nav section */}
      <div className='min-h-24 bg-slate-200 w-full flex rounded-none  items-center px-4 py-2 md:flex-row flex-col justify-center md:justify-normal'>
        <div className='logo'>
          <img src="LOGO.png" alt="school logo" className='h-16 m-2 rounded' />
        </div>
        <div className="brand text-2xl font-bold w-auto">
          <div className='text-center'>{SchoolName}</div>
          <div className='text-sm text-center'>{SchoolAddress}</div>
        </div>
      </div>

      {/* bottom nav section for md and lg device */}
      <div className="hidden md:flex justify-between px-2 mt-4 text-white bg-[#22438C]">
        <ul className=' w-full flex bottom-nav'>
          {/* links from constant are populated */}
          {links.map((link, i) => {
            if (!(link.sublink)) {
              return (<li key={i}><Link to={link.href} className='block py-4 px-5 text-center'>{link.title}</Link></li>)
            }
            return (<li className='inline-block relative' key={i}>
              <Link to={link.href} className='block py-4 px-5 text-center'>{link.title} ▾</Link>
              <ul className="dropdown bg-[#22438C] w-full absolute hidden z-20">
                {link.sublink.map((sublink,indx)=>{
                  return (<li key={indx}><Link  to={sublink.href} className='block py-4 px-5 text-center'>{sublink.title}</Link></li>)
                })}
              </ul>
            </li>)
          })}

        </ul>
      </div>

      {/* for mobile device bottom nav bar: */}
      <div className={`md:hidden`}>
        <div className="flex w-full h-18 bg-[#22438C] text-white justify-between px-4 py-2 mt-2">
          <h4>Home</h4>
          <h4 onClick={() => { setisMobileNavOpen(!isMobileNavOpen) }}>
            {/* menu bar icon */}
            {iconsPack.Menu}
          </h4>
        </div>

        {/* nav links */}
        <ul className={`${!isMobileNavOpen && "hidden"} w-full flex flex-col bottom-nav bg-[#22438C] text-white`}>
          {links.map((link,i)=>(<li key={i}><Link  to={link.href} className='block py-4 px-5 text-center'>{link.title}</Link></li>))}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar