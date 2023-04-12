import React, { useState, useContext } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { IoLocationSharp } from 'react-icons/io5';
import Link from 'next/link';

import { AppContext } from '@/pages/_app';


const Hotel = ({ hotel, cart }) => {
    const [saved, setSaved] = useState(false);
    const { hotelsSaved, setHotelsSaved, loggedIn, count, setCount, hotelsAdded, setHotelsAdded, flightsAdded } = useContext(AppContext)
    return (
        <div className='relative w-full shadow-2xl'>
            {cart === 'No' ? (
                <div className='absolute top-4 right-4 w-fit'>
                    <BsFillHeartFill className={`text-xl cursor-pointer ${saved ? 'text-redLight' : 'text-[#FCFCFC]'}`}
                        onClick={() => {
                            if (loggedIn) {
                                if (cart === 'No') {
                                    setHotelsSaved([ ...hotelsSaved, hotel ]);
                                    setSaved(true);
                                    localStorage.setItem('hotelsSaved', JSON.stringify(hotelsSaved));
                                    setHotelsAdded(hotelsAdded + 1);
                                    setCount(hotelsAdded + flightsAdded);
                                }
                            } else {
                                window.prompt('You need to sign up to perform this action');
                            }
                        }}
                    />
                </div>
            ) : (
                <div className='absolute top-4 right-4 w-fit'>
                        <GrClose className='text-xl cursor-pointer text-grayText' 
                        onClick={() => {
                            setHotelsSaved(hotelsSaved.filter((item) => item !== hotel));
                            localStorage.setItem('hotelsSaved', JSON.stringify(hotelsSaved));
                            setHotelsAdded(hotelsAdded - 1);
                            setCount(flightsAdded + hotelsAdded);
                        }}
                    />
                </div>
            )}
            <div>
                <img src={hotel?.max_photo_url} alt={hotel?.city} className='w-full h-[250px] object-cover' />
            </div>
            <div className='px-4 py-5 space-y-3'>
                <h3 className='text-lg font-semibold text-grayishDark'>
                    {hotel?.hotel_name}
                </h3>
                <div className='flex items-center justify-between gap-6'>
                    <IoLocationSharp className='md:text-xl text-base text-grayishDark' />
                    <h3 className='md:text-xl text-base text-grayText'>{hotel?.address_trans}</h3>
                </div>
                <div className='flex items-center justify-between md:text-xl text-base text-grayText'>
                    <h3>Review:</h3>
                    <h3>{hotel?.review_score_word}</h3>
                </div>
                <div className='p-4 rounded-md shadow-xl bg-slate-300 grid place-items-center'>
                    <Link href={hotel?.url} target='_blank'>
                        <h3 className='md:text-xl text-base text-grayText'>Website</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hotel