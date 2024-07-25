import React from 'react'

const AcademicsPage = () => {

    return (
        <div className='w-full md:w-[85%] mx-auto my-2 text-white px-2 md:min-h-[65vh]'>
            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold'>Curriculum</h2>
                <div className=''>
                    <ul>
                        <li className='infra-list my-1 text-sm'><span className='font-bold text-md'>Primary (Grades 1-5):</span> English, Mathematics, Science, Social Studies, Art, Physical Education</li>
                        <li className='infra-list my-1 text-sm'><span className='font-bold text-md'>Secondary (Grades 6-10):</span> English, Mathematics, Science (Physics, Chemistry,Biology), Social Studies, Computer Science, Physical Education, Art</li>
                        <li className='infra-list my-1 text-sm'><span className='font-bold text-md'>Senior Secondary (Grades 11-12):</span>
                            <ul>
                                <li className='infra-list my-1 text-sm'><span className='font-bold text-md'>Science Stream:</span> Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
                                <li className='infra-list my-1 text-sm'><span className='font-bold text-md'>Commerce Stream:</span> Accountancy, Business Studies, Economics,Mathematics, English</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold '>Teaching Methodologies</h2>
                <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
            </div>

            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold'>Educational Resources</h2>
                <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
            </div>
            
        </div>
    )
}

export default AcademicsPage