import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import productImg from "../../img/img1.jpg";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WishListContext from "../WishList/WishListContext";

const ProductLimit = () => {
  const [limit, setLimit] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { wishlist, addToWishList, removeToWishList } =
    useContext(WishListContext);

  useEffect(() => {
    const LimitedProduct = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=4"
        );
        const result = await response.json();
        setLimit(result);
      } catch (error) {
        setError("Failed to fetch products: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    LimitedProduct();
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <Container sx={{ paddingY: "40px" }}>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Our Products
      </h1>
      <Grid container spacing={2}>
        {limit.map((item) => {
          const isInWishlist = wishlist.some((w) => w.id === item.id);
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.id}
              style={{ position: "relative" }}
            >
              <Card sx={{ maxWidth: 240, position: "relative" }}>
                <IconButton
                  onClick={() =>
                    isInWishlist
                      ? removeToWishList(item.id)
                      : addToWishList(item)
                  }
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    backgroundColor: "white",
                  }}
                >
                  {isInWishlist ? (
                    <FavoriteIcon sx={{ color: "#e53935" }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ color: "#9e9e9e" }} />
                  )}
                </IconButton>

                <CardActionArea>
                  <Link to={`/product/${item.id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image || productImg}
                      alt={item.title}
                    />
                  </Link>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        height: "50px",
                        overflow: "hidden",
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Typography variant="h5" sx={{ color: "text.secondary" }}>
                      ${item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      ⭐ {item.rating.rate} ({item.rating.count})
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Link
        to="/product"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button variant="contained">View All</Button>
      </Link>
    </Container>
  );
};

export default ProductLimit;
