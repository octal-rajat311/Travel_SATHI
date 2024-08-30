import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const PHOTO_BASE_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=800&maxWidthPx=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY;


function PlansCardItem({plans}) {
    const [photourl,setphotourl]=useState();
  useEffect(()=>{
    plans && GetPlacePhoto();
  },[plans])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery: plans?.place
    }
    const result= await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data)
      console.log(resp.data.places[0].photos[3].name)
      const PhotoUrl=PHOTO_BASE_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
      setphotourl(PhotoUrl)
      
    })
  }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+plans?.place} target='_blank' >
                  <div className='shadow-lg rounded-lg transition-all cursor-pointer grid hover:scale-105 border-black'>
                  <h2 className='text-sm text-red-500 font-semibold'>🕰️{plans?.time}</h2>
                  <div className="flex gap-3 m-2">
                    
                      <img src={photourl} className='w-[130px] h-[130px] rounded-xl'/>
                      

                      <div className='flex flex-col mt-3 gap-2'>
                          <h2 className='text-md font-bold'>{plans?.place}</h2>
                          <p className='text-xs text-gray-500 '>{plans?.details}</p>
                          <h2 className='text-sm '>💰{plans?.ticket_pricing}</h2>
                          </div>
                          
                      </div>
                  </div> 
                  </Link>  
  )
}

export default PlansCardItem
