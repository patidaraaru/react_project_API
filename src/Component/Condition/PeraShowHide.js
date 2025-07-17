import  { useState } from 'react'

const PeraShowHide = () => {
 const[show,setShow] = useState(false)
  return ( 
    <div>
     <button onClick={()=>setShow(!show)} >
      {
       show ? "Hide" : "Show"
      }
     </button>
      {
      show && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae fugiat ipsam est odio nostrum laboriosam expedita voluptas, debitis quae eius, perferendis quam quos dignissimos. Similique enim deleniti illum doloremque!</p>
      }
    </div>
  )
}

export default PeraShowHide
