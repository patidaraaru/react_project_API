import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import RegisterContext from "./RegisterContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(RegisterContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    const success = await register(userData);
    if (success) {
      console.log("Registration successful:", success);
      navigate("/login");
    } else {
      console.log("Registration failed");
    }
    localStorage.setItem("userDatass", JSON.stringify(userData));
    console.log("User data saved to localStorage:", userData);

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form
      onSubmit={HandleSubmit}
      style={{
        width: "500px",
        margin: "auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
      }}
    >
      <TextField
        label="username"
        name="username"
        type="text"
        onChange={handleChange}
        required
        fullWidth
        sx={{ marginBottom: "16px" }}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
        required
        fullWidth
        sx={{ marginBottom: "16px" }}
      />
      <TextField
        label="firstname"
        name="firstname"
        type="text"
        onChange={handleChange}
        required
        fullWidth
        sx={{ marginBottom: "16px" }}
      />
      <TextField
        label="lastname"
        name="lastname"
        type="text"
        onChange={handleChange}
        required
        fullWidth
        sx={{ marginBottom: "16px" }}
      />
      <TextField
        label="email"
        name="email"
        type="email"
        onChange={handleChange}
        required
        fullWidth
        sx={{ marginBottom: "16px" }}
      />
      <TextField
        label="phone"
        name="phone"
        type="text"
        onChange={handleChange}
        required
        fullWidth
        sx={{ marginBottom: "16px" }}
      />
      <TextField
        label="address"
        name="address"
        type="text"
        onChange={handleChange}
        required
        fullWidth
        sx={{ marginBottom: "16px" }}
      />
      <button type="submit" sx={{ marginTop: "16px" }}>
        Register
      </button>
      <Link to="/login">Already have an account? Login</Link>
    </form>
  );
};

export default Register;
