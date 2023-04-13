import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import FlightOffer from '@/components/FlightOffer';


import axios from 'axios';
import { getAirportCode, getPlaces, getLatLng, getHotels } from './api/hello';
import PopularPlaces from '@/components/PopularPlaces';

import CircularProgress from '@mui/material/CircularProgress';

import heroAirplane from '../public/Assets/Images/explore/airplane-transparent.png';
import arrowLine from '../public/Assets/Images/explore/arrow-line.png';
import blackMan from '../public/Assets/Images/explore/black-man-suitcase.png';
import youngMan from '../public/Assets/Images/explore/teenage-yellow.png';
import airplaneEngine from '../public/Assets/Images/explore/airplane-engine.svg';
import globe from '../public/Assets/Images/explore/globe.png';
import globeMd from '../public/Assets/Images/explore/globe-md.png';
import globeSm from '../public/Assets/Images/explore/globe-sm.png';
import airplaneIcon from '../public/Assets/Images/explore/airplane.svg';
import calendar from '../public/Assets/Images/explore/calendar-date.svg';
import hotel from '../public/Assets/Images/explore/hotel.svg';
import cup from '../public/Assets/Images/explore/cup-hot.svg';

import { BsSearch } from 'react-icons/bs';
import PopularHotels from '@/components/PopularHotels';

import { motion } from 'framer-motion';
import { container, itemFade, contain } from '@/animation';

const Amadeus = require('amadeus');

const Explore = () => {
  const [date, setDate] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const [travelDateError, setTravelDateError] = useState(false);
  const [checkOutError, setCheckOutError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [checkOut, setCheckOut] = useState('');

  const [flights, setFlights] = useState([]);
  const [city, setCity] = useState('');
  const [type, setType] = useState('restaurants');

  const [destination, setDestination] = useState('');
  const [departureAirportCode, setDepartureAirportCode] = useState('');
  const [destinationAirportCode, setDestinationAirportCode] = useState('');
  const [coords, setCoords] = useState(null);
  const [places, setPlaces] = useState([]);

  const [hotels, setHotels] = useState([]);

  const [section, setSection] = useState('flights');

  //getting user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        fetchLocation(latitude, longitude).then((data) => {
          setCity(`${data?.city ? data.city : data?.localityInfo?.informative[1]?.name.slice(data?.localityInfo?.informative[1]?.name.indexOf('/') + 1)}`);
        })

      },
        error => console.log(error)
      );
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }, [])

  // Try to get the iata code for a city to pass it to te flights search function
  useEffect(() => {
    if (city) {

      getAirportCode(city).then((data) => {
        setDepartureAirportCode(data?.length ? data[0]?.code : '');
        console.log(data)
      });
    }
    if (destination) {

      getAirportCode(destination).then((codes) => {
        if (codes) {
          setDestinationAirportCode(codes?.length ? codes[0]?.code : '');
          console.log(codes);
        }
      });
    }

  }, [city, destination])

  //fetch the destination latitude and longitude.
  useEffect(() => {
    if (destination) {

      getLatLng(destination)
        .then((latLng) => {
          setCoords(latLng);
          console.log(latLng);
          if (coords) console.log(coords)
        })
    }
  }, [destination])

  //fetching popular restaurants in destination location
  useEffect(() => {
    if (coords) {

      setIsLoading(true);

      getPlaces(coords)
        .then((data) => {
          console.log(data)
          setPlaces(data?.filter((place) => place.name && Number(place.num_reviews) > 0));
          setIsLoading(false);
        })
    }
  }, [coords])

  //fetching the available hotels in destination location
  useEffect(() => {
    if (coords && travelDate && checkOut) {

      getHotels(coords, travelDate, checkOut)
        .then((data) => {
          console.log(data?.result);
          setHotels(data?.result);
        })
    }
  }, [coords, travelDate, checkOut])

  //amadeus self services
  const amadeus = new Amadeus({
    clientId: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET
  });

  // fetching available flights on user entry
  useEffect(() => {
    if (departureAirportCode && destinationAirportCode && travelDate) {

      amadeus.shopping.flightOffersSearch.get({
        originLocationCode: departureAirportCode,
        destinationLocationCode: destinationAirportCode,
        departureDate: travelDate,
        adults: '2',
        max: 30
      }).then((response) => {
        setFlights(response.data);
      }).catch((responseError) => {
        console.log(responseError.code);
      });
    }
  }, [departureAirportCode, destinationAirportCode, travelDate])

  useEffect(() => {
    if (destinationAirportCode) {
      amadeus.referenceData.location(destinationAirportCode).get()
        .then(function (response) {
          console.log(response);
        }).catch(function (response) {
          console.error(response);
        });
    }
  }, [destinationAirportCode])


  const handleSubmit = (e) => {
    e.preventDefault();

    if (travelDate) {
      setTravelDateError(false)
    } else {
      setTravelDateError(true)
    }

    if (checkOut) {
      setCheckOutError(false)
    } else {
      setCheckOutError(true)
    }

    if (city) {
      setCityError(false)
    } else {
      setCityError(true)
    }

    if (destination) {
      setDestinationError(false)
    } else {
      setDestinationError(true)
    }
  }


  const getDate = () => {
    const currentDate = new Date();

    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    setDate(formattedDate);
  }
  return (
    <div className='lg:mt-10 lg:px-[13.25rem] md:px-[3.125rem] px-5 overflow-x-hidden' onLoad={getDate}>

      <motion.div variants={container} initial='hidden' whileInView='show' className='relative lg:mb-[22rem] md:pb-56 pb-[9.625rem] lg:pb-0'>
        <motion.h2 variants={itemFade} className='text-center lg:text-5xl lg:leading-[4rem] md:text-4xl md:mt-14 mt-8 text-2xl font-bold text-grayishDark'>
          Find the right <span className='text-violet'>destination</span> in<br /> one click
        </motion.h2>
        <motion.div variants={itemFade}>
          <Image src={blackMan} alt='Black man with suitcase' className='lg:mt-20 z-[5] relative md:mt-14 mt-9 lg:w-[250px] lg:h-[250px] md:w-[176px] md:h-[176px] w-[86px] h-[86px]' />
          <Image src={youngMan} alt='Young smiling boy' className='absolute z-[5] lg:right-6  -right-4 lg:top-24 md:top-16 top-9 md:-right-[3.125rem] lg:h-[250px] lg:w-[250px] md:w-[176px] md:h-[176px] w-[86px] h-[86px]' />
          <Image src={arrowLine} alt='Line' className='absolute lg:top-[6.25rem] md:top-16 top-10 left-[10px] lg:left-[10.25rem] -z-[0] lg:w-4/5' />
          <Image src={heroAirplane} alt='Airplane takeoff' className='absolute lg:top-[12.5rem] md:bottom-5 lg:bottom-auto bottom-6 lg:left-[13.75rem] md:right-2 lg:right-auto right-8 lg:w-[800px] md:w-[583px] w-[310px]' />
        </motion.div>
      </motion.div>

      <div className='lg:mb-28 md:mb-16 mb-12'>
        <motion.div variants={container} initial='hidden' whileInView='show' className='flex items-center gap-2 mb-7'>
          <Image src={airplaneEngine} aria-hidden='true' alt='Airplane' />
          <h3 variants={itemFade} className='lg:text-2xl md:text-xl font-semibold text-grayText'>Flights</h3>
        </motion.div>

        <motion.form variants={container} initial='hidden' whileInView='show' className="flex flex-col md:flex-row lg:gap-16 md:gap-7 gap-4 lg:py-14 lg:px-8 md:py-7 md:px-5 p-5 rounded-2xl md:-mx-9 lg:mx-0">
          <div className='flex flex-col md:flex-row lg:gap-8 gap-4 flex-1'>

            <motion.div variants={itemFade} className='relative md:flex-1'>
              <label htmlFor="departure" className='flex items-center gap-2 absolute top-3 left-4'>
                <span>From</span>
                <Image src={airplaneIcon} alt='Aircraft' aria-hidden='true' />
              </label>
              <input type="text" name='departure' value={city} id='departure' placeholder='Ancarta, pacifique' className={`text-grayText w-full ${cityError ? 'border-red-600' : ''}`} required
                onChange={(e) => setCity(e.target.value)}
              />
            </motion.div>

            <motion.div variants={itemFade} className='relative md:flex-1'>
              <label htmlFor="destination" className='flex items-center gap-2 absolute top-3 left-4'>
                <span>To</span>
                <Image src={airplaneIcon} alt='Aircraft' aria-hidden='true' className='rotate-180' />
              </label>
              <input type="text" name='destination' id='destination' placeholder='Miami, America' className={`text-grayText w-full ${destinationError ? 'border-red-600' : ''}`} value={destination} required
                onChange={(e) => setDestination(e.target.value)}
              />
            </motion.div>

            <motion.div variants={itemFade} className='relative md:flex-1'>
              <label htmlFor="date" className='flex items-center gap-2 absolute top-3 left-4'>
                <span>Travel Date</span>
                <Image src={calendar} alt='Calendar Icon' aria-hidden='true' />
              </label>
              <input type='date' name='date' id='date' className={`text-grayText w-full ${travelDateError ? 'border-red-600' : ''}`} min={date} value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
              />
            </motion.div>

            <motion.div variants={itemFade} className='relative md:flex-1'>
              <label htmlFor="date" className='flex items-center gap-2 absolute top-3 left-4'>
                <span>Return Date</span>
                <Image src={calendar} alt='Calendar Icon' aria-hidden='true' />
              </label>
              <input type='date' name='date' id='date' className={`text-grayText w-full ${checkOutError ? 'border-red-600' : ''}`} min={travelDate} value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </motion.div>

          </div>
          <motion.div variants={itemFade}>
            <button type="submit" aria-label='Search' className='lg:py-[1.375rem] lg:px-[1.625rem] py-3 px-[0.875rem] rounded-xl bg-primaryBlue md:h-full w-1/2 grid place-items-center md:w-auto mx-auto md:mx-0'
              onClick={handleSubmit}
            >
              <BsSearch aria-hidden='true' className='lg:text-4xl md:text-3xl text-xl text-lightColor' />
            </button>
          </motion.div>
        </motion.form>

      </div>

      <Image src={globe} alt='Planet Earth' className='absolute lg:-right-40 hidden lg:block right-0 lg:w-[500px] md:w-[240px] w-[154px] lg:top-[75vh] top-[50vh]' />
      <Image src={globeMd} alt='Planet Earth' className='absolute lg:-right-40 hidden md:block lg:hidden right-0 lg:w-[500px] md:w-[160px] w-[154px] lg:top-[75vh] top-[50vh]' />
      <Image src={globeSm} alt='Planet Earth' className='absolute lg:-right-40 block md:hidden right-0 lg:w-[500px] md:w-[240px] w-[110px] lg:top-[75vh] top-[50vh]' />

      <div>

        <motion.div variants={container} initial='hidden' whileInView='show' className='flex gap-5'>
          <motion.div variants={itemFade} className={`flex items-center gap-2 ${section === 'flights' ? 'bg-white' : ''} md:rounded-t-2xl rounded-t-md md:p-3 p-1 cursor-pointer`}
            onClick={() => setSection('flights')}
          >
            <Image src={airplaneEngine} aria-hidden='true' alt='Airplane' />
            <h3 className='lg:text-2xl md:text-base text-xs font-semibold text-grayText'>Available <span className='text-violet'>Flights</span></h3>
          </motion.div>
          <motion.div variants={itemFade} className={`flex items-center gap-2 ${section === 'hotels' ? 'bg-white' : ''} md:rounded-t-2xl rounded-t-md md:p-3 p-1 cursor-pointer`}
            onClick={() => {
              setSection('hotels');
              setType('hotels')
            }}
          >
            <Image src={hotel} aria-hidden='true' alt='Airplane' />
            <h3 className='lg:text-2xl md:text-base text-xs font-semibold text-grayText'>Popular <span className='text-violet'>hotels</span> in miami</h3>
          </motion.div>
          {/* <div className={`flex items-center gap-2 ${section === 'restaurants' ? 'bg-white' : ''} md:rounded-t-2xl rounded-t-md md:p-3 p-1 cursor-pointer`}
            onClick={() => {
              setSection('restaurants');
              setType('restaurants')
            }}
          >
            <Image src={cup} aria-hidden='true' alt='Airplane' />
            <h3 className='lg:text-2xl md:text-base text-xs font-semibold text-grayText'>Popular <span className='text-violet'>Restaurants</span> in miami</h3>
          </div> */}
        </motion.div>

        <div className='py-7 px-5 bg-white lg:mb-28 mb-16 shadow-2xl md:rounded-tr-2xl md:rounded-b-2xl rounded-tr-md rounded-b-md'>
          {section === 'flights' ?
            city && travelDate && checkOut && destination ?
              flights.length ?
                <FlightOffer flights={flights} /> : (
                  <div className='grid place-items-center w-full h-12'>
                    <CircularProgress />
                  </div>
                ) : (
                <div>
                  <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2, duration: 0.5, ease: 'easeInOut'}} className='text-center text-base text-grayText md:text-xl'>Fill the field to get available flights!</motion.h1>
                </div>
              )
            : destination ? isLoading ?
              (
                <div className='grid place-items-center w-full h-12'>
                  <CircularProgress />
                </div>
              )
              : section === 'hotels' ? <PopularHotels hotels={hotels} /> : (
                <div>
                  <h1 className='text-center text-base text-grayText md:text-xl'>Fill the field to get popular hotels!</h1>
                </div>
              )
                : <PopularPlaces places={places} />
          }
        </div>
      </div>

    </div>
  )
}


const fetchLocation = async (lat, lng) => {
  const { data } = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);

  return data;
}


export default Explore