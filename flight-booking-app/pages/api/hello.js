// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


export const getAirportCode = async (cityName) => {
  try {
    const { data } = await axios.get('https://travel-advisor.p.rapidapi.com/airports/search', {
      params: { query: cityName, locale: 'en_US' },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })

    return data;

  } catch (error) {
    console.log(error)
  }
}

export const getPlaces = async ( coords ) => {
  try {
    const { data: [ data ] } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`, {
      params: {
        latitude: coords.lat,
        longitude: coords.lng,
        limit: '30',
        currency: 'USD',
        distance: '2',
        open_now: 'false',
        lunit: 'km',
        lang: 'en_US'
      },
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getLatLng = async (cityName) => {
  try {

    const { data } = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        cityName
      )}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`
    );
  
    if (data.status.code !== 200) {
      throw new Error(`Error: ${data.status.message}`);
    }
  
    const { lat, lng } = data.results[0].geometry;
    return { lat, lng };
  } catch (error) {
    console.log(error);
  }
}


export const getHotels = async (coords, checkIn, checkOut) => {
  try {
    const { data } = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
      {
        params: {
          units: 'metric',
          room_number: '1',
          longitude: coords.lng,
          latitude: coords.lat,
          filter_by_currency: 'ALL',
          order_by: 'price',
          locale: 'en-us',
          checkout_date: checkOut,
          adults_number: '2',
          checkin_date: checkIn,
          children_ages: '5,0',
          include_adjacency: 'true',
          children_number: '2',
          page_number: '0',
          categories_filter_ids: 'class::2,class::4,free_cancellation::1'
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_BOOKING_COM_API_KEY,
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
      }
    )

    return data;

  } catch(error) {
    console.log(error);
  }
}





//AIzaSyBT4f3NYVdDgpjZmNsSblCzDSGl5MGTc_E    api key

// client-ID          977792684584-6pdcocakeqnc143huct3f04kif2149ev.apps.googleusercontent.com
// client secret       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

// geocoding api key   9f230ecc3dd84588b2ee69c91b0b75cc
