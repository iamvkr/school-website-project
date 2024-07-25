import React from 'react'
import NoticesCard from './NoticesCard'

const NoticesSection = () => {
  return (
    <div className="notices-section">
      <h2 className='text-center font-bold text-3xl underline'>Common Notices</h2>
      <div className="notice-box-container flex gap-4 mt-4 flex-wrap md:flex-nowrap px-4 md:px-0">
        {/* notice cards 1 */}
        <NoticesCard title="Junior wing"/>
        <NoticesCard title="Senior wing"/>
        <NoticesCard title="Admissions"/>
        <NoticesCard title="Fee Payment"/>
      </div>
    </div>
  )
}

export default NoticesSection