import { useState, useEffect } from "react"
import { sliderClasses } from '@mui/material';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import Image from "next/image";

import thailand from '../public/Assets/Images/services/thailand.jpg'
import highway from '../public/Assets/Images/services/highway.jpg'
import coast from '../public/Assets/Images/services/coast.jpg'
import mountain from '../public/Assets/Images/services/mountain.jpg'
import boat from '../public/Assets/Images/services/boat.jpg'

import { motion } from "framer-motion";

export default function Carousel({
    slides,
    autoSlide = false,
    autoSlideInterval = 3000
}) {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const autoSlideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(autoSlideInterval)
    }, [])
    return (
        <div className="w-full bg-white rounded-t-lg">
            <div className='overflow-hidden relative rounded-lg'>

                <div className='flex w-full items-center transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                    <Image src={thailand} alt='carousel image' className={`lg:h-[411px] h-[210px] min-w-full object-cover inline-block `} />
                    <Image src={highway} alt='carousel image' className={`lg:h-[411px] h-[210px] min-w-full object-cover inline-block `} />
                    <Image src={coast} alt='carousel image' className={`lg:h-[411px] h-[210px] min-w-full object-cover inline-block `} />
                    <Image src={mountain} alt='carousel image' className={`lg:h-[411px] h-[210px] min-w-full object-cover inline-block `} />
                    <Image src={boat} alt='carousel image' className={`lg:h-[411px] h-[210px] min-w-full object-cover inline-block `} />
                </div>

                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <ChevronLeft size={25} />
                    </button>
                    <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <ChevronRight size={25} />
                    </button>
                </div>
                {/* Indicator section that shows how many photos there are */}
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {slides.map((_, i) => (
                            <div key={i} className={`
                            transition-all w-3 h-3 bg-white rounded-full
                            ${curr === i ? "p-2" : "bg-opacity-50"}
                            `} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}