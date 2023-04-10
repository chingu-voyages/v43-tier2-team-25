import React from 'react'
import Image from 'next/image';
import thailand from '../public/Assets/Images/services/thailand.jpg'
import highway from '../public/Assets/Images/services/highway.jpg'
import coast from '../public/Assets/Images/services/coast.jpg'
import mountain from '../public/Assets/Images/services/mountain.jpg'
import boat from '../public/Assets/Images/services/boat.jpg'
import flights from '../public/Assets/Images/services/airplane-engines.png'
import hotel from '../public/Assets/Images/services/City.png'
import restaurant from '../public/Assets/Images/services/restaurant-table.png'
import headset from '../public/Assets/Images/services/headset.svg'
import heartbreak from '../public/Assets/Images/services/heartbreak-fill.svg'
import lightening from '../public/Assets/Images/services/fast-fill.svg'
import management from '../public/Assets/Images/services/management-team.png'
import seniorMan from '../public/Assets/Images/services/senior-happy-man.jpeg'
import man from '../public/Assets/Images/services/carefree-guy.jpeg'
import woman from '../public/Assets/Images/services/entrepeneur-woman.jpeg'

import { container, item, itemFade } from '@/animation';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div className="place-content-center">
            <div className='lg:px-[13.25rem] md:px-[3.125rem] px-5'>


                {/* Change the code below */}

                

                <div id="default-carousel" className="relative w-full lg:mt-16 md:mt-14 mt-8" data-carousel="slide">
                    {/* Carousel wrapper */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {/* Item 1 */}
                        <div className=" duration-700 ease-in-out" data-carousel-item>
                            <Image width="300px" height="400px" src={thailand} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* Item 2 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={highway} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* Item 3 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={coast} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* Item 4 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={mountain} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* Item 5 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={boat} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>
                    {/* Slider Indicators */}
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full bg-white" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-[#D9D9D9]" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-[#D9D9D9]" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-[#D9D9D9]" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-[#D9D9D9]" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
                    {/* Slider Controls */}
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>





                {/* Change the above code  */}





                {/* Flights | Hotels | Restaurants */}
                <motion.div variants={container} initial='hidden' whileInView='show' id='flights-hotels-restaurants' className='flex md:flex-row flex-col md:gap-10 gap-4 content-evenly place-content-center p-8 bg-white rounded-lg'>

                    <motion.div variants={itemFade} id='flights' className='flex flex-col items-center lg:gap-6 gap-3 rounded-md  bg-[#e0ebff] py-4 px-16 lg:px-20 shadow-xl'>
                        <Image width='' height='' src={flights} className='w-5 h-5 lg:w-auto lg:h-auto' alt='airplane icon' />
                        <p className='text-xs lg:text-base'>Flights</p>
                    </motion.div>

                    <motion.div variants={itemFade} id='Hotels' className='flex flex-col rounded-md items-center lg:gap-6 gap-3  bg-[#e0ebff] py-4 px-16 lg:px-20 shadow-xl'>
                        <Image width='' height='' src={hotel} className='w-5 h-5 lg:w-auto lg:h-auto' alt='hotel icon' />
                        <p className='text-xs lg:text-base'>Hotels</p>
                    </motion.div>

                    <motion.div variants={itemFade} id='Restaurants' className='flex flex-col items-center lg:gap-6 gap-3 rounded-md bg-[#e0ebff] py-4 px-16 lg:px-20 shadow-xl'>
                        <Image width='' height='' src={restaurant} className='w-5 h-5 lg:w-auto lg:h-auto' alt='restaurant icon' />
                        <p className='text-xs lg:text-base'>Restaurants</p>
                    </motion.div>

                </motion.div>
                {/* Question */}

                <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: [30, 0] }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="mb-4 text-2xl font-bold tracking-tight text-grayishDark md:text-4xl lg:text-6xl text-center py-10">Why Choose <span className="text-blue-800">Us</span>?</motion.h1>
            </div>


            {/*Info Section */}
            <div id='white-container' className='bg-lightColor lg:px-[13.25rem] md:px-[3.125rem] px-5'>
                <motion.div variants={container} initial='hidden' whileInView='show' id="info-container" className="flex md:flex-row flex-col lg:gap-[9.75rem] justify-center items-center text-center md:pt-10 pt-8 lg:pb-20 md:pb-14 pb-5 bg-white">

                    {/*Item 1: 24/7 Support */}
                    <motion.div variants={itemFade} id='' className="lg:p-6 p-3 flex flex-col items-center lg:gap-5 gap-3 text-center">
                        <div id='circle-headphones' className="flex justify-center">
                            <Image width='' height='' alt=' 24/7 support' src={headset} className='px-5 py-4 rounded-full bg-[#2d04de]' />
                        </div>
                        <h4 className="font-semibold lg:text-3xl md:text-2xl text-xl">24/7 Support</h4>
                        <p className='lg:text-xl text-xs'>We're always here for you, reach out at any time.</p>
                    </motion.div>

                    {/*Item 2: Incredible Deals */}
                    <motion.div variants={itemFade} className='lg:p-6 p-3 flex flex-col items-center lg:gap-5 gap-3 text-center'>
                        <div id='circle-heart' className="flex justify-center">
                            <Image height='' width='' alt='incredible deals icon' src={heartbreak}
                                className='p-5 rounded-full bg-[#e88510]' />
                        </div>
                        <h4 className='font-semibold lg:text-3xl md:text-2xl text-xl'>Incredible Deals</h4>
                        <p className='lg:text-xl text-xs'>Reach your destination, at the lowest cost.</p>
                    </motion.div>

                    {/*Item 3: Fast Bookings */}
                    <motion.div variants={itemFade} className='lg:p-6 p-3 flex flex-col items-center lg:gap-5 gap-3 text-center'>
                        <div id='circle-lightening' className="flex justify-center">
                            <Image height='' width='' alt='fast booking icon' src={lightening}
                                className='p-5 rounded-full bg-[#04c731]'
                            />
                        </div>
                        <h4 className='font-semibold lg:text-3xl md:text-2xl text-xl'>Fast Bookings</h4>
                        <p className='lg:text-xl text-xs'>You can book a flight at any time without worrying.</p>
                    </motion.div>
                </motion.div>


                {/*Company History */}
                <motion.div variants={container} initial='hidden' whileInView='show' id="company-history" className='overflow-y-hidden'>
                    <motion.h2 variants={item} className="lg:mb-8 mb-4 text-2xl font-bold tracking-tight text-grayishDark md:text-4xl lg:text-6xl text-center pb-3" >Company <span className="text-violet">History</span></motion.h2>
                    <motion.p variants={item} className="text-justify">Lorem ipsum dolor sit amet consectetur. Interdum arcu volutpat interdum etiam et velit senectus. Bibendum vulputate dolor vestibulum vulputate sit quam. Erat lacus sollicitudin viverra sit nunc. Viverra vestibulum integer consectetur dignissim adipiscing sit. Neque tortor hac nibh malesuada interdum et posuere sit. Imperdiet quisque aliquam semper turpis nisl. At nunc elementum a nunc. Blandit consequat est et feugiat pellentesque mattis. Faucibus egestas aliquet blandit sed enim elementum.
                        Facilisis lorem nisi pulvinar pellentesque pharetra cursus. Ultrices odio ipsum nibh ac malesuada elit eu. Sit tempor mi egestas posuere sed vulputate neque ut purus. Gravida quis amet pharetra vitae lorem. Egestas odio at suscipit purus sapien ullamcorper. Malesuada et mattis lobortis elementum facilisi amet tempor. Risus neque amet massa ultrices enim.</motion.p>
                    <Image width='' height='' alt='team image' src={management}
                        className='mx-auto h-[19rem] md:[25.875rem] lg:h-[36.0625rem] w-auto mb-7 mt-4 md:mt-0' />
                </motion.div>

                {/* Testimonials */}
                <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: [30, 0] }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="text-center text-grayishDark lg:mb-16 mb-6 mt-8 font-bold text-2xl lg:text-5xl">Look at what people have to say about us</motion.h4>
                <motion.div variants={container} initial='hidden' whileInView='show' id='testimonial-container' className='flex md:flex-row flex-col gap-3 lg:gap-10 place-content-center'>
                    {/* Person 1 */}
                    <motion.div variants={itemFade} id='person-1' className='bg-white lg:py-4 lg:px-6 p-3 rounded-lg shadow-2xl'>
                        <div className='flex flex-row pb-4 items-center gap-4'>
                            <Image height='' width='' alt='picture of first testimonial person' className='lg:w-20 w-16 h-16 lg:h-20 rounded-full object-cover' src={seniorMan} />
                            <p className='font-medium'>Augusto De Vinchi</p>
                        </div>
                        <div id="opinion">
                            <p className='text-center'>"This is the best website I've used so far. I totally recommend it!"</p>
                        </div>

                    </motion.div>

                    {/* Person 2 */}
                    <motion.div variants={itemFade} id='person-2' className='bg-white p-3 rounded-lg shadow-2xl'>
                        <div className='flex flex-row pb-4 items-center gap-4'>
                            <Image alt='picture of testimonial man' src={man}
                                className='lg:w-20 w-16 h-16 lg:h-20 rounded-full object-cover' />
                            <p className='font-medium'>Akachukwu Oye</p>
                        </div>
                        <div id='opinion'>
                            <p className='text-center'>"I found it difficult to travel but flight
                                made everything easy for me."</p>
                        </div>
                    </motion.div>
                    {/* Person 3 */}
                    <motion.div variants={itemFade} id='person-3' className='bg-white p-3 rounded-lg shadow-2xl'>
                        <div className='flex flex-row pb-4 items-center gap-4'>
                            <Image height='' width='' alt='picture of third testimonial person' src={woman}
                                className='lg:w-20 w-16 h-16 lg:h-20 rounded-full object-cover'
                            />
                            <p className='font-medium'>Fahiza Sheirkh</p>
                        </div>
                        <div>
                            <p className='text-center'>"If you're looking for the best deals,
                                don't worry no more,
                                flighty's got you."</p>
                        </div>
                    </motion.div>

                </motion.div>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: [30, 0] }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="text-center pt-8 lg:mb-28 mb-16 uppercase font-medium md:text-2xl text-sm text-grayishDark tracking-[0.19em]">SO DON'T LOSE TIME, FLY WITH US! </motion.p>

            </div>
        </div>



    )
}

export default Services
