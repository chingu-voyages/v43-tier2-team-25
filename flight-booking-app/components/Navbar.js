import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/Assets/Images/shared/logo.svg'
import closeIcon from '../public/Assets/Images/shared/icon-x.svg'
import hamburger from '../public/Assets/Images/shared/Hamburger_icon.svg.png'


const Navbar = () => {

  const [ navbar, setNavbar ] = useState(false)

  return (
    <div>

      <nav className='w-full fixed top-0 left-0 right-0 z-10'>
        

        <div className='justify-around px-4 mx-auto md:flex md:items-center md:justify-between md:lg:max-w-7xl md:px-8 '> 
          
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>

            {/* Logo */}
            <Link href='/'>

              <Image  src={logo} alt='Flighty Logo' width={100} height={100} />

            </Link>


            {/* Hamburger Button For Mobile */}
            <div className=''>
      
              <div className='md:hidden'>

              

                <button className='p-2 text text-gray-700 rounded-md outline-none focus:border-gray-400' onClick={
                  () => setNavbar(!navbar)
                }>

                  {
                    navbar ? (
                      <Image src={closeIcon} width={30} height={30} alt='closeNavbar' />
                    ) : (
                      <Image src={hamburger} width={30} height={30} alt='hamburger' />
                    )
                  }

                </button>

              </div>

            </div>

          </div>

          <div className={`flex-1 justify-self-center items-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navbar ? 'p-12 md:p-0 block' : 'hidden'
          }`}>

          <ul className='h-screen md:h-auto items-center justify-center md:flex md:items-center'>

            <div className='md:flex md:ml-auto'>



            <li className='pb-6 text-xl text-grayText py-2 md:px-6 text-center border-b-2 md:border-b-0 md:mt-6'> 

            <Link href='/' onClick={() => setNavbar(!navbar)}> Home</Link> 
            
            </li>

            <li className='pb-6 text-xl text-grayText py-2 md:px-6 text-center border-b-2 md:border-b-0 md:mt-6'> 

            <Link href='/explore' onClick={() => setNavbar(!navbar)}> Explore</Link> 
            
            </li>

            <li className='pb-6 text-xl text-grayText py-2 md:px-6 text-center border-b-2 md:border-b-0 md:mt-6'> 

            <Link href='/services' onClick={() => setNavbar(!navbar)}> Services</Link> 
            
            </li>

            </div>
            
            <div className='text-center md:text-left md:flex md:items-center md:w-6/12'>

              <button className='bg-primaryBlue px-5 py-2 mt-10 rounded-lg text-white md:ml-auto md:my-auto md:mt-6'> 
                          
                <Link href='#'>Sign Up</Link>
                                      
              </button>

            </div>
          

          </ul>

          
          
          
        </div>

        </div>
       

      </nav>
    </div>
  )

}

export default Navbar