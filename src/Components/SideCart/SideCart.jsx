import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SideCart = ({watchTime}) => {
    // console.log(props.watchTime)
    const [time,setTime]=useState(watchTime)
    const [breakTime,setBreakTime]=useState(0)
     useEffect(()=>{
       const getWatchTimeFromStorage = localStorage.getItem("watch_time")
    //    console.log(getWatchTimeFromStorage)
       setTime(getWatchTimeFromStorage)

       const getBreakTime =localStorage.getItem("breakTime")
       setBreakTime(getBreakTime)

     },[watchTime])
    
     const handleBreakTime =(bt)=>{
         
    localStorage.setItem("breakTime",bt)
    setBreakTime(bt)
     }

     const handleComplete = ()=>{
        toast("its done bro")
     }

  return (
    <div className="text-center">
      <h1>My Cart</h1>

      <div className="mt-5 text-center">
        <p>total watch time</p>
        <input type="text" value={time-breakTime} disabled />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      <button onClick={()=>handleBreakTime(15)} className="w-25 btn-circle m-1 btn btn-info">15</button>
      <button onClick={()=>handleBreakTime(20)} className="w-25 btn-circle bg-warning btn btn-info">20</button>
      <button onClick={()=>handleBreakTime(25)} className="w-25  btn-circle m-1 bg-danger btn btn-info">25</button>
      <input className="mt-2" type="text" value={breakTime} disabled />
      <button onClick={handleComplete} className="mt-5 btn btn-info w-100">Complete</button>
    </div>
  );
};

export default SideCart;
