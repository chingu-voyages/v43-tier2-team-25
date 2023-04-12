import React, { createContext, useState } from 'react'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { auth } from '@/config/Firebase';

export const AppContext = createContext(null);


export default function App({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [flightsSaved, setFlightsSaved] = useState([]);
  const [restaurantsSaved, setRestaurantsSaved] = useState([]);
  const [hotelsSaved, setHotelsSaved] = useState([]);
  const [count, setCount] = useState(0);
  const [hotelsAdded, setHotelsAdded] = useState(0);
  const [flightsAdded, setFlightsAdded] = useState(0);

  const [showItemsSaved, setShowItemsSaved] = useState(false);

  const value = {
    loggedIn,
    setLoggedIn,
    flightsSaved,
    setFlightsSaved,
    restaurantsSaved,
    setRestaurantsSaved,
    hotelsSaved,
    setHotelsSaved,
    showItemsSaved,
    setShowItemsSaved,
    count,
    setCount,
    hotelsAdded,
    setHotelsAdded,
    flightsAdded,
    setFlightsAdded
  }
  return (
    <AppContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}


