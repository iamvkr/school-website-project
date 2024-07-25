import React from 'react'

const FacultyCard = ({fac}) => {
    const {name, desc, thImg} = fac
    return (
        <div className="bg-white rounded shadow-md p-4">
            <img src={thImg} alt={"book.bookname"} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-gray-500 text-lg font-medium overflow-hidden whitespace-nowrap text-ellipsis">{name}</h3>
            <p className="text-gray-500">{desc}</p>
        </div>
    )
}

export default FacultyCard