import React, { useState } from "react";
import LoginContext from "./LoginContext";

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const fakeUSer = {
    email: "test@gmail.com",
    password: "96321",
  };
  const login = ({ email, password }) => {
    if (email === fakeUSer.email && password === fakeUSer.password) {
       setUser(email);
       return true
    }
  };
  const logout = () => {
    setUser(null);
    return  false
  };

  return (
    <LoginContext.Provider value={{ login, logout, user }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
