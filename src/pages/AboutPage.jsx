import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full md:w-[85%] mx-auto my-2 text-white px-2'>
            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold '>History</h2>
                <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
            </div>

            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold'>Vision</h2>
                <p>To create a learning environment that fosters academic excellence, critical
                    thinking, and ethical values.</p>
            </div>

            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold'>Mission</h2>
                <p>To empower students with the knowledge, skills, and values needed to thrive
                    in a dynamic world.</p>
            </div>

            <div className="principal-section px-2 py-3 border rounded mt-4 flex gap-2 items-center">
                <div className="image min-w-[30%] md:min-w-[auto]">
                    <img src="https://www.shutterstock.com/image-photo/portrait-indian-male-teacher-standing-260nw-1765602338.jpg" 
                    className='h-24 object-cover' alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Principal's Message</h2>
                    <p>At Springdale, we believe in nurturing the potential of every
                        student and guiding them towards a successful future.</p>
                </div>
            </div>

            <div className='px-2 py-3 border rounded mt-4'>
                <h2 className='text-2xl font-bold'>Infrastructure and Facilities</h2>
                <div className='text-sm'>
                    <ul>
                        <li className='infra-list'>State-of-the-art science and computer labs</li>
                        <li className='infra-list'>Spacious and well-equipped classrooms</li>
                        <li className='infra-list'>Library with a vast collection of books and digital resources</li>
                        <li className='infra-list'>Sports facilities including a playground, gymnasium, and swimming pool</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutPage