import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem';
const PHOTO_BASE_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=480&maxWidthPx=720&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

function Hotels({trip}) {

  return (
    <div>
      <h2 className='text-xl font-bold mt-5'>Hotel Recommendation</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-5'>
        {trip?.tripdata?.hotel_options?.map((hotel,index)=>(
           <HotelCardItem hotel={hotel}/>       
        ))}
      </div>
    </div>
  )
}

export default Hotels
