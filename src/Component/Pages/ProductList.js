import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import productImg from "../../img/img1.jpg";
import { Link } from "react-router-dom";
import WishListContext from "../WishList/WishListContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const { wishlist, addToWishList, removeToWishList } =
     useContext(WishListContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        console.log("Fetched products:", result);
      } catch (error) {
        setError("Failed to fetch products: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <Grid container spacing={3} sx={{ paddingTop: "50px" }}>
      {data.map((item) => {
        const isInWishlist = wishlist.some((wishItem) => wishItem.id === item.id);
       

        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            style={{ position: "relative" }}
          >
            <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
              <Card sx={{ maxWidth: 240 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image || productImg}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      ${item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ⭐ {item.rating?.rate} ({item.rating?.count} reviews)
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <button
              style={{
                position: "absolute",
                top: "0",
                right: "0px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() =>
                isInWishlist
                  ? removeToWishList(item.id)
                  : addToWishList(item)
              }
            >
              {isInWishlist ? (
                <FavoriteIcon sx={{ color: "#e91e63" }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: "#e91e63" }} />
              )}
            </button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
