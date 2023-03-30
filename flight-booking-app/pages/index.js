import React from 'react'
import Head from 'next/head'
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

        <div className={`absolute top-[55rem] md:top-[35rem] lg:top-[45rem] grid w-11/12 mx-auto`}>

          <div className={`md:relative grid md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto`}>


            {
              bannerCountries.map( (countries) => (
                <div key={countries.id} className={`my-6 w-11/12 mx-auto`}>

                  <div >
                    
                    <Image src={ countries.img }  className={`w-full md:w-[250px] md:mx-auto rounded-md shadow-lg shadow-grayText mx-auto`} />
                  </div>

                  <p className='mt-4 text-left md:ml-[3rem] lg:ml-3 text-lg text-grayText font-bold'> { countries.country } </p>

                </div>
              ))
            }

            <div className={`opacity-0 md:opacity-[1] md:absolute md:top-[10rem] md:left-[18rem]`}>

              <Image src={dottedLinePlane} className='w-full lg:ml-[6rem]' />

            </div>

          </div>

        </div>
        
      </div>

      <div className={``}>

      </div>
    </>
  )
}
