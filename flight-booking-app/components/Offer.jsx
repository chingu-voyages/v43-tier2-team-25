import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import airplane from '../public/Assets/Images/explore/airplane.png';
import styles from '../styles/Home.module.css';

import { GrClose } from 'react-icons/gr';

import { AppContext } from '@/pages/_app';


const Schedule = ({ departure, arrival, duration, borders }) => {
    return (
        <div className={`text-sm text-grayishDark text-center lg:text-left space-y-[1.375rem] flex items-center flex-col ${borders}`}>
            <h3>{departure}</h3>
            <h3 className={styles.lineBreak}>{duration}</h3>
            <h3>{arrival}</h3>
        </div>
    )
}



const Offer = ({ flight, cta }) => {
    const [added, setAdded] = useState(false);
    const [checking, setChecking] = useState(false);
    const { loggedIn, setFlightsSaved, flightsSaved, count, setCount, flightsAdded, setFlightsAdded, hotelsAdded } = useContext(AppContext);


    return (
        <div className='flex relative flex-col lg:flex-row justify-between gap-6 lg:gap-0 md:py-4 md:px-7 px-4 py-4 bg-lightColor md:rounded-2xl rounded-xl shadow-2xl items-center font-rubik'>
            <div className='flex justify-between gap-10 w-full lg:w-auto items-center'>
                <div className='flex flex-col gap-6'>
                    <div className='grid place-items-center w-[50px] h-[50px] md:w-[110px] md:h-[110px] rounded-full bg-[#E0F5F7]'>
                        <Image src={airplane} alt="Airplane" className='md:h-7 h-4 object-cover' />
                    </div>
                    <div className='text-grayText text-xs uppercase space-y-[6px] text-center'>
                        <h2>{`Carrier: ${flight?.itineraries[0]?.segments[0]?.carrierCode}`}</h2>
                        <h2>{`Aircraft: ${flight?.itineraries[0]?.segments[0]?.aircraft.code}`}</h2>
                    </div>
                </div>

                <div className='flex flex-col gap-8 lg:hidden'>
                    <h3>Deadline for ticketing: <span className='font-bold text-sm'>{flight?.lastTicketingDate}</span></h3>
                    <button className={`md:py-[10px] py-2 md:px-[26px] px-4 font-semibold text-lightColor md:rounded-2xl rounded-xl md:text-xl text-base ${cta === 'Add to cart' ? added ? 'bg-green' : 'bg-primaryBlue' : ''} ${cta === 'Checkout' ? checking ? 'bg-green' : 'bg-primaryBlue' : ''}`}
                        onClick={() => {
                            if (loggedIn) {
                                if (cta === 'Add to cart') {
                                    setFlightsSaved([ ...flightsSaved, flight ]);
                                    setAdded(true);
                                    localStorage.setItem('flightsSaved', JSON.stringify(flightsSaved));
                                    setFlightsAdded(flightsAdded + 1);
                                    setCount(flightsAdded + hotelsAdded);
                                } else {
                                    setChecking(true);
                                    setTimeout(() => {
                                        setFlightsSaved(flightsSaved.filter((item) => item !== flight));
                                        localStorage.setItem('flightsSaved', JSON.stringify(flightsSaved));
                                        setFlightsAdded(flightsAdded - 1)
                                        setCount(flightsAdded + hotelsAdded);
                                    }, 1500)
                                }
                            } else {
                                window.prompt('You need to sign up to save this item');
                            }
                        }}
                    >
                        {cta === 'Add to cart' ? added ? 'Added' : 'Add to cart' : checking ? 'Checked' : 'Checkout'}
                    </button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-5 lg:gap-7'>
                {flight?.itineraries[0]?.segments.map((segment) => (
                    <div key={segment?.id}>
                        <Schedule departure={`${segment?.departure?.iataCode} ${segment?.departure?.at.replace('T', 'Time: ')}`} duration={segment?.duration.substr(2)} arrival={`${segment?.arrival?.iataCode} ${segment?.arrival?.at.replace('T', 'Time: ')}`} borders={Number(segment?.id) >= 2 ? 'border-t-2 pt-2 md:pt-0 border-t-grayishDark md:border-t-0' : ''} />

                    </div>
                ))}
                <div className='tex-sm text-grayishDark flex flex-col justify-between'>
                    <h3>Price for 1 adult: <span className='font-bold text-green'>{`${flight?.travelerPricings[0]?.price?.total} ${flight?.travelerPricings[0]?.price?.currency}`}</span></h3>
                    <h3>Total price: <span className='font-bold text-green'>{`${flight?.price?.total} ${flight?.price?.currency}`}</span></h3>
                </div>
            </div>

            <div className='lg:flex flex-col justify-between gap-9 hidden'>
                <h3>Deadline for ticketing: <span className='font-bold text-sm'>{flight?.lastTicketingDate}</span></h3>
                <button className={`py-[10px] px-[26px] font-semibold text-lightColor rounded-2xl text-xl ${cta === 'Add to cart' ? added ? 'bg-green' : 'bg-primaryBlue' : ''} ${cta === 'Checkout' ? added ? 'bg-green' : 'bg-primaryBlue' : ''}`}
                    onClick={() => {
                        if (loggedIn) {
                            if (cta === 'Add to cart') {
                                setFlightsSaved([ ...flightsSaved, flight ]);
                                setAdded(true);
                                localStorage.setItem('flightsSaved', JSON.stringify(flightsSaved));
                                setFlightsAdded(flightsAdded + 1);
                                setCount(flightsAdded + hotelsAdded);
                            } else {
                                setChecking(true);
                                setTimeout(() => {
                                    setFlightsSaved(flightsSaved.filter((item) => item !== flight));
                                    localStorage.setItem('flightsSaved', JSON.stringify(flightsSaved));
                                    setFlightsAdded(flightsAdded - 1)
                                    setCount(flightsAdded + hotelsAdded);
                                }, 1500)
                            }
                        } else {
                            window.prompt('You need to sign up to save this item');
                        }
                    }}
                >
                    {cta === 'Add to cart' ? added ? 'Added' : 'Add to cart' : checking ? 'Checked' : 'Checkout'}
                </button>
            </div>

            {cta === 'Checkout' && (
                <div className='absolute cursor-pointer top-4 right-4'>
                    <GrClose className='text-xl cursor-pointer text-grayText' 
                        onClick={() => {
                            setFlightsSaved(flightsSaved.filter((item) => item !== flight));
                            localStorage.setItem('flightsSaved', JSON.stringify(flightsSaved));
                            setCount(count - 1);
                            setFlightsAdded(flightsAdded - 1)
                        }}
                    />
                </div>
            )}
        </div>
    )
}

export default Offer