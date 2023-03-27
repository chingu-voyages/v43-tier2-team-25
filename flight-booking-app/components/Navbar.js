import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/Assets/Images/shared/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr'


const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    return (
        <div>

            <nav className='w-full lg:pt-16 md:pt-10 pt-7'>


                <div className='justify-around px-4 md:flex md:items-center md:justify-between md:mx-[13.25rem] md:px-8 '>

                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>

                        {/* Logo */}
                        <Link href='/'>

                            <Image src={logo} alt='Flighty Logo' className='lg:h-11 md:h-8 h-6 z-20' />

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

                    <div className={`fixed md:static top-0 bottom-0 left-0 right-0 bg-black/50 lg:bg-transparent lg:backdrop-blur-none backdrop-blur-xl z-10  items-center pb-3 md:block ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                        }`}>

                        <ul className='h-full md:h-auto items-center justify-center md:flex bg-white md:bg-transparent'>


                            <li className='md:hidden flex justify-end'>
                                <button className='p-2 text-2xl text-grayText rounded-md outline-none focus:border-gray-400' onClick={
                                    () => setNavbar(false)
                                }>

                                    <GrClose alt='hamburger' />

                                </button>

                            </li>

                            <li className='pb-6 md:pb-0 text-xl text-grayText py-2 md:px-6 text-center border-b-2 md:border-b-0'>

                                <Link href='/' onClick={() => setNavbar(!navbar)}> Home</Link>

                            </li>

                            <li className='pb-6 md:pb-0 text-xl text-grayText py-2 md:px-6 text-center border-b-2 md:border-b-0'>

                                <Link href='/explore' onClick={() => setNavbar(!navbar)}> Explore</Link>

                            </li>

                            <li className='pb-6 md:pb-0 text-xl text-grayText py-2 md:px-6 text-center border-b-2 md:border-b-0'>

                                <Link href='/services' onClick={() => setNavbar(!navbar)}> Services</Link>

                            </li>
                            <li className=' md:hidden grid items-center'>

                                <button className='bg-primaryBlue px-5 py-2 mt-10 rounded-lg text-lightColor md:mt-0'>

                                    <Link href='#'>Sign Up</Link>

                                </button>

                            </li>


                        </ul>

                    </div>


                    <div className='md:block hidden'>

                        <button className='bg-primaryBlue px-5 py-2 mt-10 rounded-lg text-lightColor md:mt-0'>

                            <Link href='#'>Sign Up</Link>

                        </button>

                    </div>

                </div>


            </nav>
        </div>
    )

}

export default Navbar