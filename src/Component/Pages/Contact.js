import React from "react";
import useForm from "../Auth/useForm";
import { Box, TextField, Button, Typography } from "@mui/material";
import ShortBanner from "../Banner/ShortBanner";
import Footer from "../Footer/Footer";

const Contact = () => {
  const { store, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <ShortBanner title="Contact" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          px: 2,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: "500px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            type="text"
            value={store.name}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            value={store.email}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            value={store.password}
            onChange={handleChange}
            required
            fullWidth
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>

        <Box mt={4}>
          <Typography variant="h6">Live Preview</Typography>
          <Typography>Name: {store.name}</Typography>
          <Typography>Email: {store.email}</Typography>
          <Typography>Password: {store.password}</Typography>
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default Contact;
