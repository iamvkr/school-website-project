import React from 'react'
import iconsPack from '../constants/iconsPack'
import { StudentCoincilList, achivmentsList, activitiesList } from '../constants/Constant'

const StudentPage = () => {

    return (
        <div className='w-full md:w-[85%] mx-auto my-2 text-white px-2'>
            <div className='px-2 py-3  mt-4'>
                <h2 className='text-2xl font-bold text-center'>Life at Springdale</h2>
                <div className='border rounded pb-2 bg-slate-300 text-black'>
                    <h2 className='text-lg font-bold text-center flex w-full justify-center items-center gap-x-1 mt-4'>{iconsPack.Star} Extracurricular Activities {iconsPack.Star}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-4 md:px-0 justify-items-center">
                        {/* activites populate here */}
                        {activitiesList.map((act, i) => (<div key={i} className="feature-boxes h-32 w-32 border rounded-lg shadow shadow-black flex items-center justify-center flex-col gap-y-2 cursor-pointer">
                            <span className='scale-125 '>{iconsPack[act.icon]}</span>
                            <h5>{act.title}</h5>
                        </div>))}
                    </div>
                </div>
            </div>
            <div className='px-2 py-3  mt-4'>
                <div className='border rounded pb-2 bg-slate-300 text-black'>
                    <h2 className='text-lg font-bold text-center flex w-full justify-center items-center gap-x-1 mt-4'>{iconsPack.Star} Achievements {iconsPack.Star}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 px-4 md:px-0 justify-items-center">
                        {/* achivment populate here */}
                        {achivmentsList.map(({ std }, i) => (<div key={i} className="feature-boxes h-40 w-48 border rounded-lg shadow shadow-black flex items-center justify-center flex-col gap-y-2 cursor-pointer">
                            <span className='scale-150 '>{iconsPack.User}</span>
                            <h5>{std}</h5>
                        </div>))}

                    </div>
                </div>
            </div>
            <div className='px-2 py-3  mt-4'>
                <div className='border rounded pb-2 bg-slate-300 text-black'>
                    <h2 className='text-lg font-bold text-center flex w-full justify-center items-center gap-x-1 mt-4'>{iconsPack.Star} Student Council {iconsPack.Star}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 px-4 md:px-0 justify-items-center">
                        {/* Student Coincil List populate here */}
                        {StudentCoincilList.map((std, i) => (<div key={i} className="feature-boxes h-40 w-48 border rounded-lg shadow shadow-black flex items-center justify-center flex-col gap-y-2 cursor-pointer">
                            <span className='scale-150 '>{iconsPack.User}</span>
                            <div>
                                <h5 className='text-center'>{std.title}</h5>
                                <h6 className='text-center'>{std.name}</h6>
                            </div>
                        </div>))}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudentPage