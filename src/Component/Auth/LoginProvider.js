import React, { useEffect, useState } from "react";
import LoginContext from "./LoginContext";
import { useNavigate } from "react-router-dom";

const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() =>{
   fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => console.log(data , "User data fetched successfully"));
  },[])

  const login = async ({ username, password }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
     console.log("Raw response:", response);
      if (!response.ok) throw new Error("Login failed");
      const data = await response.json();
      setUser(data);
      console.log("User logged in:", data);
      console.log("Login Token:", data.token);
      localStorage.setItem("userData", JSON.stringify(data));
      localStorage.setItem("Token", data.token);
      return data;
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  };
  // "username": "donero",
        // "password": "ewedon",

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("Token");
     navigate("/login");
  };

  return (
    <LoginContext.Provider value={{ login, logout, user }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
