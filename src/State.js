import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
     <p>Count : {count}</p>
     { count <= 9 && (<button onClick={() => setCount(count + 1)}>Increment</button>)}
      
     {count >= 1 && (
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      )}
    </div>
  );
};

export default State;
