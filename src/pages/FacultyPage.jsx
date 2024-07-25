import React from 'react'
import FacultyCard from '../components/FacultyCard'
import { facultyDetails } from '../constants/Constant'

const FacultyPage = () => {
    return (
        <div className='w-full md:w-[85%] mx-auto my-2 text-white px-2'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-4 md:px-0">
                {/* faculty map */}
                {facultyDetails.map((fac,i)=>(<FacultyCard key={i} fac={fac}/>))}
            </div>
        </div>
    )
}

export default FacultyPage