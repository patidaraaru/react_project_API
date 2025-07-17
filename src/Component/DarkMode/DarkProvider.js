import React, { useState } from "react";
import DarkMode from "./CreateContext";

const DarkProvider = ({ children }) => {
  const [theme, setTheme] = useState("color");

  const ToggleTheme = () => {
    setTheme(prev => (prev === "color" ? "dark" : "color"));
  };

  return (
    <DarkMode.Provider value={{ ToggleTheme, theme }}>
      {children}
    </DarkMode.Provider>
  );
};

export default DarkProvider;
