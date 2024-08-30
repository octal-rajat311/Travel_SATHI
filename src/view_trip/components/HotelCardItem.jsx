import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PHOTO_BASE_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=300&maxWidthPx=600&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

function HotelCardItem({hotel}) {
    const [photourl,setphotourl]=useState();
  useEffect(()=>{
    hotel && GetPlacePhoto();
  },[hotel])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery: hotel?.name
    }
    const result= await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data)
      console.log(resp.data.places[0].photos[3].name)
      const PhotoUrl=PHOTO_BASE_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
      setphotourl(PhotoUrl)
      
    })
  }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.name+","+ hotel?.address} target='_blank' >
            <div className='hover:scale-110 transition-all cursor-pointer'>
                <img src={photourl} className='rounded-xl cover h-[200px] w-full object-cover'/>
                <div className='flex flex-col mt-3'>
                    <h2 className='text-md font-bold'>{hotel?.name}</h2>
                    <h2 className='text-xs text-gray-500'>📍{hotel?.address}</h2>
                    <h2 className='text-sm '>💰{hotel?.price}</h2>
                    <h2 className='text-sm'>⭐{hotel?.rating}</h2>
                </div>
            </div> 
            </Link>   
  )
}

export default HotelCardItem
