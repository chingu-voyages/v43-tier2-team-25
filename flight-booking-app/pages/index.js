import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import bannerPic from '../public/Assets/Images/home/illustration trip.png'
import france from '../public/Assets/Images/home/cafe-de-flore.jpeg'
import maldives from '../public/Assets/Images/home/maldives.jpeg'
import hawaii from '../public/Assets/Images/home/hawai-botanical.jpeg'
import miami from '../public/Assets/Images/home/miami-beach.jpeg'
import dottedLinePlane from '../public/Assets/Images/home/airplane-illustration1.svg'


export default function Home() {


  const bannerCountries = [
    {
      img: france,
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
  ]



  return (
    <>
      <div className={`${styles.main} lg:px-[13.25rem] md:px-[3.125rem] px-5`}>

        <div className={`lg:mt-3 md:mt-14 grid md:grid lg:grid-cols-2 grid-cols-1`}>

          <div className={`my-8 text-center lg:text-left md:my-auto`}>

            <h2 className='lg:text-5xl md:text-4xl text-2xl font-bold text-grayishDark'> Travel around the  <span className='text-violet'>world</span> and have the greatest <span className='text-violet'>experience</span></h2>
            <Link href='/explore'>
              <button className={`bg-lightBlue text-lightColor font-semibold md:text-xl text-sm leading-8 rounded-md px-6 md:px-9 py-2 mt-6 md:mt-14 lg:mt-20 ${styles.btnBlue}`}> Explore more</button>
            </Link>

          </div>

          <div className={`md:mt-6 lg:mt-0 grid place-items-center`}>

            <Image src={bannerPic} className='lg:w-full md:w-[28.375rem] object-cover' alt='Banner Image' priority='true' />

          </div>

        </div>

        <div className={`mt-9`}>

          <div className={`md:relative grid md:grid-cols-2 lg:grid-cols-4 lg:gap-16 md:gap-8 gap-7 lg:h-[15rem] lg:mb-[13.25rem] mb-10`}>


            {
              bannerCountries.map((countries, id) => (
                <div key={id} className={`lg:h-full`}>

                  <div>
                    <Image src={countries.img} alt={countries.country} className='lg:w-full w-full rounded-md shadow-lg shadow-grayText h-[13rem] object-cover' />
                  </div>

                  <p className='mt-2 text-left text-xl text-grayText font-semibold'> {countries.country} </p>

                </div>
              ))
            }

            <div className={`hidden md:block md:absolute -z-10 md:top-28 md:-left-7 md:-right-12 lg:top-[4.375rem] lg:-left-[7.5rem] lg:-right-[12rem]`}>

              <Image src={dottedLinePlane} className='w-full' alt='Dotted line' aria-hidden='true' />

            </div>

          </div>

        </div>

      </div>

      <div className={``}>

      </div>
    </>
  )
}
