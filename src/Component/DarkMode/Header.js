import React, { useContext } from 'react';
import DarkMode from './CreateContext';

const Header = () => {
  const { ToggleTheme, theme } = useContext(DarkMode);

  return (
    <header
      style={{
        background: theme === "dark" ? "#000" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        paddingTop: "100px",
        textAlign: "center"
      }}
    >
      <h1>React Context Theme App</h1>
      <button onClick={ToggleTheme}>
        Switch to {theme === "color" ? "dark" : "light"} Mode
      </button>
    </header>
  );
};

export default Header;
