import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import bannerPic from '../public/Assets/Images/home/illustration trip.png'
import maldives from '../public/Assets/Images/home/maldives.jpeg'
import hawaii from '../public/Assets/Images/home/hawai-botanical.jpeg'
import miami from '../public/Assets/Images/home/miami-beach.jpeg'
import dottedLinePlane from '../public/Assets/Images/home/airplane-illustration1.svg'

import deco from '../public/Assets/Images/home/world-with-suitcase.png';

import london from '../public/Assets/Images/home/londonImg.jpeg'

import attraction1 from '../public/Assets/Images/home/luc-boegly-sergio-prazia.jpeg';
import attraction2 from '../public/Assets/Images/home/hotels-in-mauritus.jpeg';
import statue from '../public/Assets/Images/home/statue-of-liberty.jpeg';
import beach from '../public/Assets/Images/home/beach-background.jpeg';
import pool from '../public/Assets/Images/home/highest-infinity-pool-dubai.jpeg';

import hotel1 from '../public/Assets/Images/home/pexels-pixabay-261102.jpg'
import hotel2 from '../public/Assets/Images/home/pexels-pixabay-53577.jpg'
import hotel3 from '../public/Assets/Images/home/pexels-tom-balabaud-1579739.jpg'

import { IoLocationOutline } from 'react-icons/io5';

import { container, item, itemFade } from '@/animation';
import { motion } from 'framer-motion';


const popularHotels = [
  {
    image: hotel1,
    address: 'Rue saint Patrick, Paris',
    review: '4.9 reviews (368 ratings)',
    hotel_name: 'Cafe de Flore'
  },
  {
    image: hotel2,
    address: '7 Gracechurch Street, London EC3V 0DR',
    review: '4.8 reviews (214 ratings)',
    hotel_name: 'San Domenico House'
  },
  {
    image: hotel3,
    address: 'Gaafaru, North Central Province',
    review: '4.5reviews (165 ratings)',
    hotel_name: 'Gaafaru View Inn'
  }
]



const Home = () => {


  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '74070d570emshf91e655a2a4dad6p19c0f3jsncf425bc71d01',
  //     'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',

  //   }
  // };

  // useEffect(() => {
  //   const fetchHotel = async () => {
  //     const response = await fetch('https://booking-com.p.rapidapi.com/v1/static/hotels', options)
  //     const json = await response.json()
  //     setHotel(json.result)
  //     console.log(hotel)
  //   }
  //   fetchHotel();
  // }, [])


  const imgHotels = [hotel1, hotel2, hotel3]



  const bannerCountries = [
    {
      img: london,
      country: 'France',
    },

    {
      img: maldives,
      country: 'Maldives',
    },

    {
      img: hawaii,
      country: 'Hawaii',
    },

    {
      img: miami,
      country: 'Miami',
    },
  ];



  return (
    <>
      <div className={`${styles.main} lg:px-[13.25rem] md:px-[3.125rem] px-5 font-rubik`}>

        <motion.div variants={container} initial='hidden' whileInView='show' className='lg:mt-3 md:mt-14 grid md:grid lg:grid-cols-2 grid-cols-1'>

          <motion.div variants={item} className='my-8 text-center lg:text-left md:my-auto'>

            <h2 className='lg:text-5xl md:text-4xl text-2xl font-bold text-grayishDark'> Travel around the  <span className='text-violet'>world</span> and have the greatest <span className='text-violet'>experience</span></h2>
            <Link href='/explore'>
              <button className='bg-lightBlue text-lightColor font-semibold md:text-xl text-sm leading-8 rounded-md px-6 md:px-9 py-2 mt-6 md:mt-14 lg:mt-20 ${styles.btnBlue}'> Explore more</button>
            </Link>

          </motion.div>

          <motion.div variants={itemFade} className='md:mt-6 lg:mt-0 grid place-items-center'>

            <Image src={bannerPic} className='lg:w-full md:w-[28.375rem] object-cover' alt='Banner Image' priority='true' />

          </motion.div>

        </motion.div>

        <div className='mt-9'>

          <motion.div variants={container} initial='hidden' whileInView='show' className='md:relative z-10 grid md:grid-cols-2 lg:grid-cols-4 lg:gap-16 md:gap-8 gap-7 lg:h-[15rem] lg:mb-20 mb-10'>


            {
              bannerCountries.map((countries, id) => (
                <motion.div variants={itemFade} key={id} className='lg:h-full'>

                  <div>
                    <Image src={countries.img} alt={countries.country} className='lg:w-full w-full rounded-md shadow-lg shadow-grayText h-[13rem] object-cover' />
                  </div>

                  <p className='mt-2 text-left text-xl text-grayText font-semibold'> {countries.country} </p>

                </motion.div>
              ))
            }

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2, duration: 0.5, ease: 'easeIn'}} className='hidden md:block md:absolute -z-[1] md:top-28 md:-left-7 md:-right-12 lg:top-[4.375rem] lg:-left-[7.5rem] lg:-right-[12rem]'>

              <Image src={dottedLinePlane} className='w-full' alt='Dotted line' aria-hidden='true' />

            </motion.div>

          </motion.div>

        </div>

        <motion.div variants={container} initial='hidden' whileInView='show' className=''>

          <motion.h2 variants={item} className='text-center lg:text-4xl text-2xl md:text-3xl font-bold text-grayishDark'> Popular <span className='text-violet'>Hotels</span> to visit </motion.h2>

          <motion.h3 variants={item} className='text-grayText md:text-2xl text-xl text-center font-medium md:mt-5 mt-3'> Pick the right destination with us and travel with confidence</motion.h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:mt-11 mt-8 relative z-[5] lg:mb-20 md:mb-12'>


            {
              popularHotels.map((hotel, id) => (
                <motion.div variants={itemFade} key={id} className='bg-lightColor rounded-xl text-left'>
                  <div>
                    <Image src={hotel.image} alt={hotel.hotel_name} className='object-cover w-full lg:h-[23.25rem] md:h-[10.9rem] rounded-t-xl' />
                  </div>
                  <div className='py-3 px-4 flex flex-col gap-2'>
                    <div className='flex items-center gap-4 text-grayText text-xl'>
                      <IoLocationOutline />
                      <p className='lg:text-base text-xs'>{hotel.address}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#F1C936" />
                      </svg>
                      <p className='text-grayishDark lg:text-base text-xs'>{hotel.review}</p>
                    </div>

                    <h4 className='text-left font-medium lg:text-2xl text-base text-grayishDark'>{hotel.hotel_name}</h4>
                  </div>
                </motion.div>
              ))

            }

            <div className='absolute w-[129px] h-[137px] blur-[100px] bottom-0 right-0 -z-[1] bg-violet' />

          </div>

        </motion.div>

        <motion.div variants={container} initial='hidden' whileInView='show' className='lg:pb-[13.5rem] md:pb-[7rem] pb-14 relative'>
          <motion.h2 variants={item} className='lg:text-4xl md:text-3xl text-2xl font-semibold text-grayishDark mb-11 mt-8'>Let us do the <span className='text-violet'>work</span> so you don’t have to <span className='text-violet'>worry</span> about anything.</motion.h2>

          <div className='grid relative z-10 lg:grid-cols-3 grid-cols-1 gap-6'>

            <motion.div variants={itemFade} className='relative'>

              <Image className='w-full lg:h-[515px] md:h-[388px] h-[12rem] rounded-xl object-cover' src={beach} />

              <div className={`absolute inset-0 flex px-3 py-4 ${styles.linearGradient} rounded-xl text-left items-end text-lightColor`}>
                <p className='text-xs md:text-sm lg:text-base'>Discover the most beautiful beaches around the world and share you exeriences with your friends and family</p>
              </div>

            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none lg:grid-rows-2 gap-6'>

              <motion.div variants={itemFade} className='relative'>
                <Image className='rounded-xl w-full lg:h-[15.3125rem] md:h-[11.25rem] h-[12rem] object-cover' src={pool} alt='Random attraction in the world' />

                <div className={`absolute inset-0 flex px-3 py-4 ${styles.linearGradient} rounded-xl text-left items-end text-lightColor`}>
                  <p className='text-xs md:text-sm lg:text-base'>Stay in the most beautiful hotels in the world without caring about money</p>
                </div>

              </motion.div>

              <motion.div variants={itemFade} className='relative'>
                <Image className='rounded-xl w-full lg:h-[15.3125rem] md:h-[11.25rem] h-[12rem] object-cover' src={attraction2} alt='Random attraction in the world' />

                <div className={`absolute inset-0 flex px-3 py-4 ${styles.linearGradient} rounded-xl text-left items-end text-lightColor`}>
                  <p className='text-xs md:text-sm lg:text-base'>Discover the best deals in you next destination</p>
                </div>

              </motion.div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none lg:grid-rows-2 gap-6'>

              <motion.div variants={itemFade} className='relative'>
                <Image className='rounded-xl w-full lg:h-[15.3125rem] md:h-[11.25rem] h-[12rem] object-cover' src={attraction1} alt='Random attraction in the world' />

                <div className={`absolute inset-0 flex px-3 py-4 ${styles.linearGradient} rounded-xl text-left items-end text-lightColor`}>
                  <p className='text-xs md:text-sm lg:text-base'>We take you there without problem</p>
                </div>

              </motion.div>

              <motion.div variants={itemFade} className='relative'>
                <Image className='rounded-xl w-full lg:h-[15.3125rem] md:h-[11.25rem] h-[12rem] object-cover' src={statue} alt='Random attraction in the world' />

                <div className={`absolute inset-0 flex px-3 py-4 ${styles.linearGradient} rounded-xl text-left items-end text-lightColor`}>
                  <p className='text-xs md:text-sm lg:text-base'>Don’t waste your time and book a flight <Link href='/explore' className='underline text-lightBlue'>now</Link></p>
                </div>

              </motion.div>

            </div>

          </div>
          <Image src={deco} alt='Illustration' className='absolute bottom-0 h-[74px] w-auto right-0 -z-0 md:h-[127px] lg:h-[241px] lg:-right-[13rem]' aria-hidden='true' />
          <div className='w-[179px] h-[117px] blur-[100px] bg-orange-500 absolute left-0 bottom-16 z-0' />
        </motion.div>

      </div>




    </>
  )
}

export default Home
