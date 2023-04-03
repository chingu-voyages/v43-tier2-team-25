import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/Assets/Images/shared/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr'

import styles from '../styles/Navbar.module.css';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [linkActive, setLinkActive] = useState("home");

    return (
        <div>

            <nav className='w-full lg:pt-16 md:pt-10 pt-7'>


                <div className='justify-between px-5 md:flex md:items-center md:justify-between md:px-11 lg:px-[13.25rem]'>

                    <div className='flex items-center justify-between md:block'>

                        {/* Logo */}
                        <Link href='/'>

                            <Image src={logo} alt='Flighty Logo' className='lg:h-11 md:h-8 h-6 w-[90px] md:w-auto z-20' />

                        </Link>


                        {/* Hamburger Button For Mobile */}
                        <div className='md:hidden'>


                            <button className='p-2 text-2xl text-grayText rounded-md outline-none focus:border-gray-400' onClick={
                                () => setNavbar(true)
                            }>

                                <GiHamburgerMenu alt='hamburger' />

                            </button>

                        </div>

                    </div>

                    <div className={`fixed flex justify-end lg:static top-0 bottom-0 left-0 right-0 bg-black/50 lg:bg-transparent md:backdrop-blur-none backdrop-blur-xl z-10 lg:block ${navbar ? ' block' : 'hidden'
                        }`}>

                        <motion.ul className='h-full md:absolute lg:static right-24 top-28 md:h-auto md:rounded-xl lg:rounded-none w-2/3 md:w-1/4 pt-7 md:pt-3 md:pb-7 lg:pb-0 lg:pt-0 px-5 md:px-6 lg:px-0 lg:w-auto items-center md:items-start lg:items-center md:justify-start justify-center md:flex md:gap-4 lg:gap-10 bg-white lg:bg-transparent md:flex-col lg:flex-row'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, scale: [0, 1] }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >


                            <li className='lg:hidden flex justify-end w-full'>
                                <button className='p-2 text-2xl md:text-base text-grayText rounded-md hover:opacity-75 outline-none focus:border-gray-400' onClick={
                                    () => setNavbar(false)
                                }>

                                    <GrClose alt='hamburger' />

                                </button>

                            </li>

                            <li className={`pb-6 md:pb-0 text-xl text-grayText ${linkActive === "home" ? "text-primaryBlue" : ""} py-2 md:py-0 text-center border-b-2 md:border-b-0 ${styles.navLink}`}>

                                <Link href='/' onClick={() => {
                                    setNavbar(!navbar);
                                    setLinkActive("home")
                                }}> Home</Link>

                            </li>

                            <li className={`pb-6 md:pb-0 text-xl text-grayText ${linkActive === "explore" ? "text-primaryBlue" : ""} py-2 md:py-0 text-center border-b-2 md:border-b-0 ${styles.navLink}`}>

                                <Link href='/explore' onClick={() => {
                                    setNavbar(!navbar);
                                    setLinkActive("explore")
                                }}> Explore</Link>

                            </li>

                            <li className={`pb-6 md:pb-0 text-xl text-grayText ${linkActive === "services" ? "text-primaryBlue" : ""} py-2 md:py-0 text-center border-b-2 md:border-b-0 ${styles.navLink}`}>

                                <Link href='/services' onClick={() => {
                                    setNavbar(!navbar);
                                    setLinkActive("services")
                                }}> Services</Link>

                            </li>
                            <li className=' md:hidden grid items-center'>

                                <button className='bg-primaryBlue px-5 py-2 mt-10 hover:opacity-75 rounded-lg text-lightColor md:mt-0'>

                                    <Link href='#'>Sign Up</Link>

                                </button>

                            </li>


                        </motion.ul>

                    </div>


                    <div className='lg:block hidden md:flex gap-6 lg:gap-0'>

                        <button className={`bg-primaryBlue lg:px-5 lg:py-2 md:px-4 md:py-[6px] mt-10 rounded-lg text-lightColor md:mt-0 md:text-sm lg:text-xl font-bold ${styles.btnBlue}`}>

                            <Link href='#'>Sign Up</Link>

                        </button>
                        <div className='lg:hidden'>


                            <button className='p-2 text-3xl text-grayText rounded-md outline-none focus:border-gray-400' onClick={
                                () => setNavbar(true)
                            }>

                                <GiHamburgerMenu alt='hamburger' />

                            </button>

                        </div>

                    </div>

                </div>


            </nav>
        </div>
    )

}

export default Navbar