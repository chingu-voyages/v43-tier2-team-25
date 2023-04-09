import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephoneFill } from 'react-icons/bs';


const PopularPlaces = ({ places }) => {
  return (
    <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4'>
      {places?.map((place, id) => (
        <div className='bg-white w-full' key={id}>

          <div>
            <img src={place?.photo ? place?.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place?.name} className='w-full h-auto object-cover' />
          </div>

          <div className='p-5 space-y-3 text-xl font-medium'>
            <h3>{place?.name}</h3>

            <div className='flex justify-between items-center md:text-xl text-base text-grayText'>
              <p className='text-grayishDark'>Price</p>
              <p>{place?.price_level}</p>
            </div>

            <div className='flex justify-between items-center md:text-xl text-base text-grayText'>
              <p className='text-grayishDark'>Ranking</p>
              <p>{place?.ranking}</p>
            </div>

            <div className='flex flex-wrap items-center justify-between'>
              {place?.cuisine?.map(({ name }) => (
                <div key={name} className='p-4 text-sm rounded-md shadow-xl bg-slate-200 text-grayText'>
                  <h4>{name}</h4>
                </div>
              ))}
            </div>

            {place?.address && (
              <div className='flex justify-between items-center md:text-xl text-base text-grayText'>
                <IoLocationOutline />
                <p>{place.address}</p>
              </div>
            )}

            {place?.phone && (
              <div className='flex justify-between items-center md:text-xl text-base text-grayText'>
                <BsTelephoneFill />
                <p>{place.phone}</p>
              </div>
            )}

            <div>
              <button className='p-4 bg-slate-300 text-grayText rounded-md border-[1] border-grayishDark' onClick={() => window.open(place?.website, '_blank')}>
                Website
              </button>
            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

export default PopularPlaces