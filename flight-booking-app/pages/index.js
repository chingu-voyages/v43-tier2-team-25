import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import bannerPic from '../public/Assets/Images/home/illustration trip.png'



export default function Home() {
  return (
    <>
      <div className={`${styles.main} relative p-2`}>

        <div className={`absolute top-20 grid p-3 md:grid md:grid-cols-2`}>

          <div className={`my-8 text-center md:text-left md:my-auto`}>

            <h2 className='text-5xl font-bold'> Travel around the  <span className='text-lightBlue'>world</span> and have the greatest <span className='text-lightBlue'>experience</span></h2>

            <button className='bg-lightBlue text-white rounded-md px-4 py-2 mt-10'> Explore more</button>

          </div>

          <div className={`my-8`}>

            <Image src={bannerPic} />

          </div>

        </div>
        
      </div>
    </>
  )
}
