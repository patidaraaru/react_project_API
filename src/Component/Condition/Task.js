import { useState } from "react";

const Task = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log-Out" : "Log-In"} Click
      </button>
      <p> {isLoggedIn ? "“Welcome back, Aarti!”" : "Please log in"}</p>
    </div>
  );
};

export default Task;
