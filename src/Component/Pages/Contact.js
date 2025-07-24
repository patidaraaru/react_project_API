import React from "react";
import useForm from "../Auth/useForm";
import { Box, TextField, Button, Typography } from "@mui/material";
import ShortBanner from "../Banner/ShortBanner";
import Footer from "../Footer/Footer";
import ContactComponent from "../Forms/ContactComponent";

const Contact = () => {


  return (
    <>
      <ShortBanner title="Contact" />
     <ContactComponent />
      <Footer/>
    </>
  );
};

export default Contact;
