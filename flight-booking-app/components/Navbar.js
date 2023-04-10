import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'
import Image from 'next/image'

import logo from '../public/Assets/Images/shared/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { BsCart3 } from 'react-icons/bs';

import styles from '../styles/Navbar.module.css';
import { motion } from 'framer-motion';

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { AppContext } from '@/pages/_app';
import Saved from './Saved'
import { contain, itemFade } from '@/animation'

const Navbar = () => {
    const provider = new GoogleAuthProvider();
    const router = useRouter();

    const [navbar, setNavbar] = useState(false);
    const [logoutBtn, setLogoutBtn] = useState(false);
    const [user, setUser] = useState(null)
    const { setLoggedIn, loggedIn, setShowItemsSaved, showItemsSaved, count, setCount, hotelsAdded, setHotelsAdded, flightsAdded, setFlightsAdded } = useContext(AppContext);

    const auth = getAuth();

    const authStateChangeHandler = (authState) => {
        if (!authState) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true);
        }
    }

    //Checking if the user has signed up
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChangeHandler)

        return () => {
            unsubscribe()
        }

    }, [])

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                setLoggedIn(true);
                const user = result.user;
                setUser(user);
                console.log(user);
                // ...
            }).catch((error) => {
                console.log(error);
                // ...
            });
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setLoggedIn(false)
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            {showItemsSaved && <Saved />}
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

                    <div className={`fixed flex justify-end lg:static top-0 bottom-0 left-0 right-0 bg-black/50 lg:bg-transparent md:backdrop-blur-none backdrop-blur-xl z-[100] lg:block ${navbar ? ' block' : 'hidden'
                        }`}>

                        <motion.ul className='h-full md:absolute lg:static right-24 top-28 md:h-auto md:rounded-xl lg:rounded-none w-2/3 md:w-1/4 pt-7 md:pt-3 md:pb-7 lg:pb-0 lg:pt-0 px-5 md:px-6 lg:px-0 lg:w-auto items-center md:items-start lg:items-center md:justify-start justify-center md:flex md:gap-4 lg:gap-10 bg-white lg:bg-transparent md:flex-col lg:flex-row'
                            variants={contain} initial='hidden' whileInView='show'
                        >


                            <motion.li variants={itemFade} className='lg:hidden flex justify-end w-full'>
                                <button className='p-2 text-2xl md:text-base text-grayText rounded-md hover:opacity-75 outline-none focus:border-gray-400' onClick={
                                    () => setNavbar(false)
                                }>

                                    <GrClose alt='hamburger' />

                                </button>

                            </motion.li>

                            <motion.li variants={itemFade} className={`pb-6 md:pb-0 text-xl text-grayText ${router.pathname === "/" ? "text-primaryBlue" : ""} py-2 md:py-0 text-center border-b-2 md:border-b-0 ${styles.navLink}`}>

                                <Link href='/' onClick={() => {
                                    setNavbar(!navbar);
                                }}> Home</Link>

                            </motion.li>

                            <motion.li variants={itemFade} className={`pb-6 md:pb-0 text-xl text-grayText ${router.pathname === "/explore" ? "text-primaryBlue" : ""} py-2 md:py-0 text-center border-b-2 md:border-b-0 ${styles.navLink}`}>

                                <Link href='/explore' onClick={() => {
                                    setNavbar(!navbar);
                                }}> Explore</Link>

                            </motion.li>

                            <motion.li variants={itemFade} className={`pb-6 md:pb-0 text-xl text-grayText ${router.pathname === "/services" ? "text-primaryBlue" : ""} py-2 md:py-0 text-center border-b-2 md:border-b-0 ${styles.navLink}`}>

                                <Link href='/services' onClick={() => {
                                    setNavbar(!navbar);
                                }}> Services</Link>

                            </motion.li>

                            {loggedIn &&
                                <li className={`pb-6 md:pb-0 text-xl text-grayText lg:hidden py-2 md:py-0 text-center border-b-2 md:border-b-0 ${styles.navLink}`}
                                    onClick={() => {
                                        handleLogout();
                                        setNavbar(!navbar);
                                    }}
                                >
                                    Sign out
                                </li>
                            }

                            <motion.li variants={itemFade} className=' md:hidden grid items-center'>

                                {loggedIn ? (
                                    <div className='flex gap-8 items-center md:justify-start justify-center pt-4 md:pt-0'>
                                        <div className='relative'>
                                            <BsCart3 title='Saved' className='text-3xl text-grayText cursor-pointer' onClick={() => {
                                                setShowItemsSaved(true);
                                                setNavbar(false);
                                            }} />
                                            {Number(count) ? <p className={`rounded-full text-xs absolute -top-[6px] -right-[6px] px-[6px] py-[1px] bg-redLight text-white font-semibold ${styles.notifCart}`}>{count}</p> : ''}
                                        </div>
                                        <div className='rounded-full border-2 border-grayText cursor-pointer'>
                                            <img src={user?.photoURL} alt={user?.displayName} width={36} height={36} className='w-9 h-9 rounded-full' />
                                        </div>
                                    </div>
                                ) : <button className='bg-primaryBlue px-5 py-2 mt-10 hover:opacity-75 rounded-lg text-lightColor md:mt-0'
                                    onClick={handleLogin}
                                >
                                    Sign Up
                                </button>}

                            </motion.li>


                        </motion.ul>

                    </div>


                    <div className='lg:block hidden md:flex gap-6 lg:gap-0'>

                        {loggedIn ? (
                            <div className='flex gap-8 items-center'>
                                <div className='relative'>
                                    <BsCart3 title='Saved' className='text-3xl text-grayText cursor-pointer' onClick={() => {
                                        setShowItemsSaved(true);
                                        setNavbar(false);
                                    }} />
                                    {Number(count) ? <p className={`rounded-full text-xs absolute -top-[6px] -right-[6px] px-[6px] py-[1px] bg-redLight text-white font-semibold ${styles.notifCart}`}>{count}</p> : ''}
                                </div>
                                <div className='rounded-full border-2 border-grayText cursor-pointer' onClick={() => { setLogoutBtn(!logoutBtn) }}>
                                    <img src={user?.photoURL} alt={user?.displayName} width={36} height={36} className='w-9 h-9 rounded-full' />
                                </div>
                                {logoutBtn &&
                                    <motion.button className='bg-white px-8 py-4 absolute top-[8.375rem] right-[13.25rem] hover:opacity-75 rounded-lg text-grayishDark md:mt-0 hidden lg:block'
                                        onClick={handleLogout}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1, scale: [0, 1] }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    >
                                        Sign Out
                                    </motion.button>
                                }
                            </div>
                        ) :
                            <button className={`bg-primaryBlue lg:px-5 lg:py-2 md:px-4 md:py-[6px] mt-10 rounded-lg text-lightColor md:mt-0 md:text-sm lg:text-xl font-bold ${styles.btnBlue}`} onClick={handleLogin}>
                                Sign Up
                            </button>
                        }
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