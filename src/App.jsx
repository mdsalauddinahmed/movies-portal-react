import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
 
import './App.css'
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SideCart from './Components/SideCart/SideCart';

function App() {
  const[watchTime,setWatchTime]= useState("")
  const handleWatchTime = (time)=>{
  // console.log(time)
  
  const previousWatchTime = JSON.parse(localStorage.getItem("watch_time"))
  console.log(previousWatchTime)
  if(previousWatchTime){
    const newWatchTime = previousWatchTime+time;
    localStorage.setItem("watch_time",newWatchTime)
    // console.log(newWatchTime)
    setWatchTime(newWatchTime)
  }else{
    localStorage.setItem("watch_time",time)
    setWatchTime(time)
  }
    
  // const removeWatchTime =(time)=>{
  //   const selectWatchTime =localStorage.getItem("watch_time" )
  //   if(selectWatchTime){
  //     delete  selectWatchTime.time;
  //   }
  // }

  }
  return (
     <div className='container'>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>
     <div className='d-flex justify-content-between'>
     <div className="home_container">
        <Home handleWatchTime={handleWatchTime}></Home>
      </div>
      <div className="side_cart col-md-4 card">
        <SideCart watchTime={watchTime}></SideCart>
      </div>
     </div>
      
      <Contact></Contact>
      <ToastContainer></ToastContainer>
      </div>
     
  )
}

export default App
