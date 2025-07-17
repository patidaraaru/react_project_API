import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import productImg from "../../img/img1.jpg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductLimit = () => {
  const [limit, setLimit] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const LimitedProduct = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=4"
        );
        const result = await response.json();
        setLimit(result);
        console.log("Method Error", result);
      } catch (error) {
        setError("Failed to add product:" + error.message);
      } finally {
        setLoading(false);
      }
    };
    LimitedProduct();
  }, []);

  if (error) return <p>This is Error</p>;
  if (loading) return <p>Loading......</p>;
  return (
    <Container sx={{ paddingY: "40px" }}>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Our Products
      </h1>
      <Grid container spacing={2}>
        {limit.map((item) => (
         <Link to={`/product/${item.id}`} style={{textDecoration:'none'}}>
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ maxWidth: 240 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img || productImg}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                  <Typography variant="h5" sx={{ color: "text.secondary" }}>
                    {item.price}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "text.secondary" }}>
                    {item.rating.rate} and {item.rating.count}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Link>
        ))}
        </Grid>
      <Link
        to="/product"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="contained">View All</Button>
      </Link>
    </Container>
  );
};

export default ProductLimit;
