import React, { use, useEffect, useState } from "react";
import { TextField } from "@mui/material";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userDatass");
    console.log("Stored User Data:", storedUserData);
  }, []);
   

  const FormDataIsAdded = async (formData) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await FormDataIsAdded(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
    localStorage.setItem("userDatass", JSON.stringify(formData));
    alert("Form submitted successfully!");
  };

  return (
    <>
      <form
        onSubmit={HandleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "500px",
          margin: "auto",
        }}
      >
        <TextField
          type="text"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={HandleChange}
          value={formData.name}
        />
        <TextField
          type="email"
          name="email"
          label="email"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={HandleChange}
          value={formData.email}
        />
        <TextField
          type="password"
          name="password"
          label="password"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={HandleChange}
          value={formData.password}
        />
        <TextField
          type="phone"
          name="phone"
          label="phone"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={HandleChange}
          value={formData.phone}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactComponent;
