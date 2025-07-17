import React, { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef(""); // 1️⃣ Create a ref

  const handleClick = () => {
    inputRef.current.focus(); // 2️⃣ Access DOM element
    inputRef.current.style.background = "red";
    inputRef.current.style.color = "#fff";
  };

  return (
    <div style={{ padding: "2rem" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />
      <br />
      <br />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
};

export default RefHook;
