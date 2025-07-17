import React, { useState } from 'react'

const Events = () => {
 const [click, setClick] = useState()
 const HandleClick = ()=>{
   setClick("Thanks for clicking, Aarti!")
 }
  return (
    <div>
      <button onClick={HandleClick}>Click ME</button>
      <p>{click}</p>
    </div>
  )
}

export default Events
