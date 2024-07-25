import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { slideData } from '../constants/Constant';


const SliderEm = () => {
    
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    return (
        <div className="embla overflow-hidden my-2" ref={emblaRef}>
            <div className="embla__container flex flex-nowrap gap-x-2 cursor-pointer">
                {slideData.map((slide,_in)=>{
                    return (<div key={slide.s_id} className={`embla__slide min-w-full min-h-[68vh] bg-no-repeat bg-cover select-none bg-bottom `}
                        style={{background:`url('${slide.thumbnail}')`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
                        <span className='text-center text-3xl pt-4 font-bold  block w-full h-[68vh] bg-[linear-gradient(#000000,#00000000,#000000)]'>
                            {slide.text}
                        </span>
                    </div>)
                })
                }
            </div>

            <div className="flex justify-between px-4 -mt-10 z-10 relative text-white">
                <button className="embla__prev" onClick={scrollPrev}>
                    {/* prev svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button>
                <button className="embla__next" onClick={scrollNext}>
                    {/* next svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default SliderEm