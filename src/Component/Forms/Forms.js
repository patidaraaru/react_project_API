import React, { useState } from "react";

const Forms = () => {
  const [getData, SetgetData] = useState("");
  const [area, SetArea] = useState("");
  const [result, setResult] = useState ('')
 


  const HandleSubmit = (e) => {
    e.preventDefault();
  
    setResult(`Thanks, ${getData}! Your feedback: ${area}`);
    SetgetData("")
    SetArea("")
  };
  return (
    <div>
      <form action="" onSubmit={HandleSubmit}>
        <input
          type="text"
          name="getData"
          value={getData}
          onChange={(e) => SetgetData(e.target.value)}
        />
        <br></br>
        <br></br>
        <textarea
          placeholder="Enter the describtion"
          value={area}
          name="area"
          rows={3}
          onChange={(e) => SetArea(e.target.value)}
        ></textarea>{" "}
        <br></br>
        <br></br>
        <button>Submit</button>
        <br></br>
      </form>
      <p>
       {result}
      </p>
    </div>
  );
};

export default Forms;
