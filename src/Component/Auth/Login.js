import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import LoginContext from "./LoginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    const success = login({ email, password });
    if (success) {
      navigate("/");
    } else {
      setError("Error");
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
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        </form>
      </Box>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Login;
