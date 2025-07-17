import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import productImg from "../../img/img1.jpg";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoadding] = useState();

  useEffect(() => {
    const addProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        console.log("Added:", result);
      } catch (error) {
        setError("Failed to add product:" + error.message);
      } finally {
        setLoadding(false);
      }
    };

    addProduct();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <Grid container spacing={3} sx={{ paddingBTop: "150px" }}>
      {data.map((item) => (
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
  );
};

export default ProductList;
