import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex items-center mx-56 gap-9 flex-col'>
      <h1 className='font-extrabold text-[48px] text-center mt-16'
      > <span className='text-[rgb(5,168,237)]'>Discover Your Next Adventure with AI:</span>   Personalized Itineraries at Your Fingertips </h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator,creating custom itineraries tailored to your interest and budget</p>

    
    <Link to={'/create-trip'}><Button> Get Started</Button> </Link>
      
    </div>
  )
}

export default Hero
