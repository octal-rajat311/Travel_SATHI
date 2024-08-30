import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import Iternary from '../components/Iternary';


function Viewtrip() {
    const {tripId}= useParams();
    const [trip,setTrip]= useState([]);

    useEffect(()=>{
        tripId && GetTripData();
    },[tripId])
    const GetTripData=async()=>{
        const docRef= doc(db,'AITrips',tripId);
        const docSnap=await getDoc(docRef)
        if(docSnap.exists()){
            console.log("Document",docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No data found");
            alert("No trip Found");
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
    <InfoSection trip={trip}/>
    <Hotels trip={trip}/>
    <Iternary trip={trip}/>
    </div>
  )
}

export default Viewtrip
