import { GetPlaceDetails } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'

const PHOTO_BASE_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=800&maxWidthPx=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

function InfoSection({trip}) {

  const [photourl,setphotourl]=useState();
  useEffect(()=>{
    trip && GetPlacePhoto();
  },[trip])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery: trip?.userSelection?.location?.label
    }
    const result= await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data)
      console.log(resp.data.places[0].photos[3].name)
      const PhotoUrl=PHOTO_BASE_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
      setphotourl(PhotoUrl)
      
    })
  }
  return (
    <div>
      <img src={photourl} className='h-[350px] w-full object-cover rounded-xl' />
        <div className='my-5 flex flex-col gap-2 '>
            <h2 className='font-bold text-2xl'>
                {trip?.userSelection?.location?.label}
            </h2>
            <div className='flex gap-5'>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>{trip?.userSelection?.noOfDays} days</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'> {trip?.userSelection?.traveler} </h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>{trip?.userSelection?.budget} Budget</h2>
            </div>
        </div>
    </div>
  )
}

export default InfoSection
