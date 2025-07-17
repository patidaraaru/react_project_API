import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { detail } = useParams();
  const [proDetail, setProDetail] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ start loading

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${detail}`);
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        const result = await response.json();
        setProDetail(result);
      } catch (error) {
        setError("Failed to load product: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetail();
  }, [detail]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxHeight: 500,
              maxWidth: 500,
              overflow: "hidden",
            }}
          >
            <img
              src={proDetail.image}
              alt={proDetail.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ maxWidth: 600 }}>
          <Typography variant="h4">{proDetail.title}</Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
            {proDetail.description}
          </Typography>

          <Typography variant="h5" sx={{ mb: 3 }}>
            ₹{proDetail.price}
          </Typography>

          <Typography variant="subtitle1">
            Category: {proDetail.category}
          </Typography>

          <Typography variant="body2" sx={{ mt: 2 }}>
            ⭐ {proDetail.rating?.rate} ({proDetail.rating?.count} reviews)
          </Typography>

          <Divider sx={{ my: 4 }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
