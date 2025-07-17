import React, { useReducer } from 'react'

const ItemReducer = () => {
 const reducer =(state, action)=>{
  if(action.type === "INCREMENT") {
   return state + 1;
  }
  if(action.type === "DECREMENT") {
   return state > 0 ? state - 1 : 0;
  }      
  if(action.type === "RESET") {
   return 0;
  }      
 }
 
 const [count , dispatch] = useReducer(reducer ,0)
  return (
    <div>
     <h5>{count}</h5>
     <button onClick={()=>dispatch({type : "INCREMENT"})}>Increment</button>
     <button onClick={()=>dispatch({type : "DECREMENT"})}>Decrement</button>
     <button onClick={()=>dispatch({type : "RESET"})}>Reset</button>
    
    </div>
  )
}

export default ItemReducer
