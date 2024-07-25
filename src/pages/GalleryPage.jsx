import React from 'react'
import iconsPack from '../constants/iconsPack'
import { galleryData } from '../constants/Constant'

const GalleryPage = () => {
    return (
        <div className='w-full md:w-[85%] mx-auto my-2 text-white px-2'>
            <div className='px-2 py-3  mt-4'>
                <h2 className='text-2xl font-bold text-center'>Gallery</h2>
                <div className='border rounded pb-2'>
                <h2 className='text-lg font-bold text-center flex w-full justify-center items-center gap-x-1 mt-4'>{iconsPack.Star} PHOTOS {iconsPack.Star}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-4 md:px-0 justify-items-center">
                    {galleryData.photos.map((photo,i)=>(<div key={i} className="feature-boxes h-36 w-full  overflow-hidden">
                        <a href="#"><img loading="lazy" src={photo.url} alt="photo" className='h-full w-full object-cover' /></a>
                    </div>))}

                </div>
                </div>
            </div>
            <div className='px-2 py-3  mt-4'>
                {/* <h2 className='text-2xl font-bold text-center'>Gallery</h2> */}
                <div className='border rounded pb-2'>
                <h2 className='text-lg font-bold text-center flex w-full justify-center items-center gap-x-1 mt-4'>{iconsPack.Star} Videos {iconsPack.Star}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 px-4 md:px-0 justify-items-center">
                    {galleryData.videos.map((vid,i)=>(<div key={i} className="feature-boxes h-64 w-full ">
                        <iframe loading="lazy" width="100%" height="100%" src={vid.url} 
                        title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>))}
                    
                </div>
                </div>
            </div>

            
        </div>
    )
}

export default GalleryPage