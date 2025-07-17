import React, { useState } from "react";

const FeedBack = () => {
  const [name, setName] = useState('');
  const [get, setGet] = useState('');
  const HandleClick = () => {
    if (name.trim() === "") {
      setGet(`Enter your feedback`);
    } else {
      setGet(`Thanks for your feedback: ${name}`);
    }
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Feedback"
      ></input>
      <button onClick={HandleClick}>Submit</button>
      <p>{get}</p>
    </div>
  );
};

export default FeedBack;



