import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import LoginContext from "./LoginContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
   const isAuthenticated = localStorage.getItem("Token");
  const navigate = useNavigate();
  const { login, user } = useContext(LoginContext);
  const [data, setData] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUserData = localStorage.getItem("userDatass");
    if (storedUserData) {
      setData(JSON.parse(storedUserData));
    }
  }, []);



  const HandleSubmit = async (e) => {
    e.preventDefault();
    const loggedInUser = await login({ username, password });
    console.log("Logged in user:", loggedInUser);
    if (loggedInUser?.token) {
      alert("Login successful");
      navigate("/");
    }
    else{
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <Box
        sx={{
          width: 350,
          margin: "auto",
          marginTop: 8,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" mb={3} textAlign="center">
          Login
        </Typography>

        <form onSubmit={HandleSubmit}>
          <TextField
            label="username"
            variant="outlined"
            fullWidth
            margin="normal"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            InputProps={{}}
          />

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Log In
          </Button>

          <Link to="/register">Don't have an account? Register</Link>
          
        </form>
      </Box>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Login;
