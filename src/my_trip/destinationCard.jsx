import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const PHOTO_BASE_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=300&maxWidthPx=600&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY;


function DestinationCard({destination}) {

    const [photourl,setphotourl]=useState();
  useEffect(()=>{
    destination && GetPlacePhoto();
  },[destination])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery: destination?.userSelection?.location?.label
    }
    const result= await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data)
      console.log(resp.data.places[0].photos[3].name)
      const PhotoUrl=PHOTO_BASE_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
      setphotourl(PhotoUrl)
      
    })
  }

  return (
    <a href={'/view-trip/'+ destination?.id} >
            <div className='hover:scale-110 transition-all cursor-pointer'>
                <img src={photourl} className='rounded-xl cover h-[200px] w-full object-cover'/>
                <div className='flex flex-col mt-3'>
                    <h2 className='text-md font-bold'>{destination?.userSelection?.location?.label}</h2>
                    <h2 className='text-xs text-gray-500'>{destination?.userSelection?.noOfDays} days trip with {destination?.userSelection?.budget} budget</h2>
                    {/* <h2 className='text-sm text-gray-500'>{destination?.userSelection?.traveler}</h2>
                    <h2 className='text-sm text-gray-500'>{destination?.userSelection?.budget}</h2> */}
                </div>
            </div> 
     </a> 
  )
}

export default DestinationCard
