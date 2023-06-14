import React, { useState, useContext, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';

import { container, itemFade } from '@/animation';

import Offer from './Offer';
import Hotel from './Hotel';

import { AppContext } from '@/pages/_app';
import styles from '../styles/Navbar.module.css';


const Saved = () => {
    const [savedItems, setSavedItems] = useState('flights');
    const { flightsSaved, hotelsSaved, setHotelsSaved, restaurantsSaved, setFlightsSaved, setShowItemsSaved, setHotelsAdded, setFlightsAdded, setCount, flightsAdded, hotelsAdded } = useContext(AppContext);

    useEffect(() => {
        const flightsState = localStorage.getItem('flightsSaved');
        const items = JSON.parse(flightsState) || [];

        const hotelsState = localStorage.getItem('hotelsSaved');
        const hotelsItems = JSON.parse(hotelsState) || [];
        setFlightsSaved(items);
        setFlightsAdded(Number(items.length));
        setHotelsSaved(hotelsItems);
        setHotelsAdded(Number(hotelsItems.length));
        setCount(Number(items.length) + Number(hotelsItems.length));
    }, [])


    return (
        <div className='fixed z-50 inset-0 bg-black/70 grid place-items-center'>
            <motion.div className='font-rubik py-4 lg:px-8 px-4 overflow-y-scroll lg:w-[68.5rem] md:w-[42.4rem] w-[20.9375rem] lg:mt-[9rem] lg:mb-16 md:mb-[10rem] md:mt-[6.75rem] mt-[5.625rem] mb-7 lg:max-h-[712px] md:max-h-[75vh] max-h-[80vh] lg:rounded-3xl rounded-xl bg-white'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: [0, 1] }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                <div className='flex justify-between items-center pb-4 border-b-2 border-b-grayText mb-6 lg:mb-8'>
                    <h3 className='text-grayishDark md:text-xl text-base uppercase font-semibold'>Saved Items</h3>
                    <GrClose className='text-grayishDark cursor-pointer md:text-2xl text-xl' onClick={() => setShowItemsSaved(false)} />
                </div>
                <div className='flex items-center mb-7 md:gap-7 justify-between'>
                    <div className={`md:px-8 relative cursor-pointer px-6 py-4 ${savedItems === 'flights' ? 'rounded-xl bg-lightColor shadow-xl' : ''}`}
                        onClick={() => setSavedItems('flights')}
                    >
                        <h3 className='md:text-lg text-sm text-grayText'>
                            Flights saved
                        </h3>
                        {flightsAdded && (<p className={`px-[6px] py-[1px] absolute inline-block -top-1 -right-1 rounded-full bg-veryDarkBlue text-[10px] font-semibold text-white ${styles.notifItems}`}>{flightsAdded}</p>)}
                    </div>
                    <div className={`md:px-8 relative cursor-pointer px-6 py-4 ${savedItems === 'hotels' ? 'rounded-xl bg-lightColor shadow-xl' : ''}`}
                        onClick={() => setSavedItems('hotels')}
                    >
                        <h3 className='md:text-lg text-sm text-grayText'>
                            Hotels saved
                        </h3>
                        {hotelsAdded && (<p className={`px-[6px] py-[1px] absolute inline-block -top-1 -right-1 rounded-full bg-veryDarkBlue text-[10px] font-semibold text-white ${styles.notifItems}`}>{hotelsAdded}</p>)}
                    </div>

                </div>

                <motion.div variants={container} initial='hidden' whileInView='show' className={`${savedItems === 'flights' ? 'flex flex-col lg:gap-10 md:gap-7 gap-4' : 'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 font-rubik'}`}>
                    {
                        savedItems === 'flights' ?
                            flightsSaved.length ?
                                flightsSaved.map((flight, id) => (
                                    <motion.div variants={itemFade} key={id}>
                                        <Offer flight={flight} cta='Checkout' />
                                    </motion.div>
                                )) :
                                (<div className='text-center'>
                                    <h2 className='text-xl text-grayishDark'>No saved Flights</h2>
                                </div>) :
                            savedItems === 'hotels' && hotelsSaved.length ?
                                hotelsSaved?.map((hotel, id) => (
                                    <motion.div variants={itemFade} key={id}>
                                        <Hotel hotel={hotel} cart='Yes' />
                                    </motion.div>
                                )) :
                                (<div className='text-center'>
                                    <h2 className='text-xl text-grayishDark'>No saved Hotels</h2>
                                </div>)
                    }
                </motion.div>


            </motion.div>

        </div>
    )
}

export default Saved