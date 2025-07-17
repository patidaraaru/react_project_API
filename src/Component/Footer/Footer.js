import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        py: 4,
        mt: 5,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} sx={{ width: "50%" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              🦋 App
            </Typography>
            <Typography variant="body2">
              Bringing you natural and effective self-care products.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ width: "20%" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
              <NavLink to="/product" className="nav-link">
                Product
              </NavLink>
              <NavLink to="/gallery" className="nav-link">
                Gallery
              </NavLink>
              
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ width: "20%" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Email: support@app.com</Typography>
            <Typography variant="body2">Phone: +91 123 456 7890</Typography>
            <Typography variant="body2">Location: India</Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            textAlign: "center",
            mt: 3,
            borderTop: "1px solid #444",
            pt: 2,
            fontSize: "14px",
            color: "#aaa",
          }}
        >
          © {new Date().getFullYear()} App. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
