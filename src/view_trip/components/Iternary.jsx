import React from 'react'
import { Link } from 'react-router-dom'
import PlansCardItem from './PlansCardItem';

function Iternary({trip}) {
  return (
    <div >
      <h2 className='text-xl font-bold mt-7'>Places to Visit</h2>
      <div className='grid gap-3'>
        {trip?.tripdata?.itinerary?.map((day,index)=>(
            <div>
            <h2 className='text-lg font-bold mt-2'>Day {index}</h2>
            <div className='grid md:grid-cols-2 gap-5 '>
              {day?.plan?.map((plans,index)=>(
                  <PlansCardItem plans={plans}/>         
              ))}
            </div>
          </div>        
        ))}
      </div>
    </div>
  )
}

export default Iternary;
