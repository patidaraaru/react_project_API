import RegisterContext from "./RegisterContext";
import axios from "axios";
import React, { useEffect, useState } from "react";


const RegistrationProvide = ({ children }) => {
  const [state, setState] = useState();

useEffect(() => {
  const deleteData = async () => {
    try {
      const response = await axios.delete("https://fakestoreapi.com/users/9");
      console.log("Deleted user:", response.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  deleteData();
}, []);

  const register = async (userData) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/users",
        userData
      );
      console.log("Registration successful:", response.data);
      setState(response.data);
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      return null;
    }
  };
  const logout = () => {
    setState(null);
    localStorage.removeItem("userDatass");
    localStorage.removeItem("Token");
    console.log("User logged out");
  };

  return (
    <RegisterContext.Provider value={{ register, state, logout }}>
      {children}
    </RegisterContext.Provider>
  );
};


export default RegistrationProvide;
