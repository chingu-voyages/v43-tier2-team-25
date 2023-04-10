import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Assets/Images/shared/logo-footer.svg';
import instagram from '../public/Assets/Images/shared/instagram-icon.svg';
import facebook from '../public/Assets/Images/shared/facebook-icon.svg';
import tiktok from '../public/Assets/Images/shared/tiktok-icon.svg';

import { motion } from 'framer-motion';
import { container, item, itemFade } from '@/animation';

const hoverEffect = 'hover:text-primaryBlue duration-500 transition-all ease-in-out'

const Footer = () => {
  return (
    <footer className='bg-veryDarkBlue lg:px-[13.25rem] md:px-[3.125rem] px-5 py-9 overflow-y-hidden'>
      <motion.div variants={container} initial='hidden' whileInView='show' className='flex flex-col md:flex-row md:justify-between items-center'>


        <motion.div variants={itemFade} className='flex flex-col space-y-10 items-center md:items-start'>
          <Link href='/'>
            <Image src={logo} alt='Flighty logo' className=' scale-90 md:scale-100' />
          </Link>
          <h2 className='text-white text-base font-semibold'>@ Copyright 2023, All right reserved</h2>
        </motion.div>


        <motion.div variants={item} className='hidden lg:block'>
          <ul className='flex flex-col lg:flex-row gap-14 text-lightColor text-2xl font-medium'>
            <li className={hoverEffect}>
              <Link href='/'>Home</Link>
            </li>
            <li className={hoverEffect}>
              <Link href='/explore'>Explore</Link>
            </li>
            <li className={hoverEffect}>
              <Link href='/services'>Services</Link>
            </li>
          </ul>
        </motion.div>


        <motion.div variants={itemFade} className='flex flex-col space-y-10 border-t-2 md:border-t-0 border-t-lightColor  md:border-l-2 md:border-l-lightColor md:pl-4 pt-6 md:pt-0 md:mt-0 mt-9 items-center md:items-start'>

          <h2 className='text-base text-white font-semibold'>
            Contact us at : <Link href='mailto:dytomaomar@gmail.com' className='underline'>support@gmail.com</Link> 
          </h2>

          <div className='flex gap-6'>
            <Link href='#'>
              <Image src={facebook} alt='Facebook social' />
            </Link>
            <Link href='#'>
              <Image src={instagram} alt='Instagram social' />
            </Link>
            <Link href='#'>
              <Image src={tiktok} alt='Tiktok social' />
            </Link>
          </div>

        </motion.div>


      </motion.div>

    </footer>
  )
}

export default Footer