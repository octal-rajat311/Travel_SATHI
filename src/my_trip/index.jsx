import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import DestinationCard from "./destinationCard";

function Mytrip() {
  const navigate = useNavigate();

  const [userTrips, setuserTrips] = useState([]);

  useEffect(() => {
    GetUserTip();
  }, []);

  const GetUserTip = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }
   
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    setuserTrips([]);
    querySnapshot.forEach((doc) => {
      setuserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  console.log(userTrips);
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="grid grid-cols-2 md:grid-cols-3  mt-3 gap-5">
        {userTrips?.map((places, index) => (
          <DestinationCard destination={places} />
        ))}
      </div>
    </div>
  );
}

export default Mytrip;
