import React from "react";
import HairData from "./HairData";
import BodyData from "./BodyData";
import SkinDate from "./SkinDate";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const allProducts = [...HairData, ...BodyData, ...SkinDate];

 
  localStorage.setItem("Product", JSON.stringify(allProducts));


  const HandleAddedProduct = (product) => {
    let existingData = [];

    const stored = localStorage.getItem("AddProductData");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        existingData = Array.isArray(parsed) ? parsed : [parsed];
      } catch (e) {
        console.error("Failed to parse cart data:", e);
      }
    }

    const alreadyExists = existingData.some((item) => item.id === product.id);
    if (alreadyExists) {
      alert("Product already in cart!");
      return;
    }
    const updatedCart = [...existingData, { ...product, quantity: 1 }];
    localStorage.setItem("AddProductData", JSON.stringify(updatedCart));
    alert("Product added to cart!");
  };

  const HandleRemoveProduct = (product) => {
    const stored = localStorage.getItem("AddProductData");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      const updatedCart = parsed.filter((item) => item.id !== product.id);
      localStorage.setItem("AddProductData", JSON.stringify(updatedCart));
      alert("Product removed from cart!");
    } catch (e) {
      console.error("Failed to remove product:", e);
    }
  };

  return (
    <Grid container spacing={3} sx={{ paddingBottom: "50px" }}>
      {allProducts.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card sx={{ maxWidth: 270 }}>
            <CardActionArea component={Link} to={`/productlist/${item.category}/${item.id}`}>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => HandleAddedProduct(item)}>Add</Button>
            <Button onClick={() => HandleRemoveProduct(item)}>Remove</Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllProduct;
