import React from 'react'

const NoticesCard = ({title}) => {
    return (
        <div className="notice-box border-2 border-slate-200 rounded h-72 md:w-1/4 w-full">
            <h2 className='text-xl font-medium text-center bg-slate-500 h-[10%] text-white'>{title}</h2>
            <div className="notice-box p-2 h-[80%] bg-slate-800">
                {/* List of notices goes here */}
                <p>Notice 1</p>
                <p>Notice 2</p>
                <p>Notice 3</p>
                <p>Notice 4</p>
            </div>
            <h2 className='font-medium  bg-slate-500 h-[10%] px-2 pt-1  hover:bg-slate-700'>
                {/* A BUTTON to navigate to full page notices */}
                <button>Read More</button>
            </h2>
        </div>
    )
}

export default NoticesCard