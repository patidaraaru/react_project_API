// src/components/ShortBanner.js
import React from "react";
import { Box, Typography } from "@mui/material";

const ShortBanner = ({ title = "Page" }) => {
  return (
    <Box
      sx={{
        background: "#f2f2f2",
        height: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mt: 0, // adjust if you have a fixed navbar
        mb: 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
         {title}
      </Typography>
    </Box>
  );
};

export default ShortBanner;
