import React from 'react'

const AdmissionPage = () => {
    return (
        <div className='w-full md:w-[85%] mx-auto my-2 text-white px-2 md:min-h-[65vh]'>
            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold '>Process</h2>
                <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
            </div>

            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold'>Criteria</h2>
                <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."</p>
            </div>

            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold'>Important Dates</h2>
                <div className='text-sm'>
                    <ul>
                        <li className='infra-list'>Admission Form Availability: March 1st</li>
                        <li className='infra-list'>Last Date for Submission: March 31st</li>
                        <li className='infra-list'>Entrance Test: April 15th</li>
                        <li className='infra-list'>Announcement of Results: April 30th</li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default AdmissionPage