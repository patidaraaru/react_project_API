import React, { useEffect, useState } from 'react'

const Clock = () => {
 const [clock, setClock]= useState(new Date());


 useEffect (()=>{
  const TimeTaken = setInterval(()=>{
   setClock (new Date())
  },1000)
  return () => clearInterval(TimeTaken)
 },[]);
  return (
    <div>
      <p>{clock.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock
