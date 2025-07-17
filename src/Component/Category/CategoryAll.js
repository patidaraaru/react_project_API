import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productImg from "../../img/img1.jpg";

const CategoryAll = () => {
  const { id } = useParams();
  const [categorys, setCategory] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true); // ✅ FIXED

  useEffect(() => {
    const CategoryDetail = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${id}`
        );
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        const result = await response.json();
        setCategory(result);
        console.log("Fetched category data:", result);
      } catch (error) {
        setError("Failed to load category: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    CategoryDetail();
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (loading) return <p>...Loading Data</p>;

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Category: {id}
      </Typography>
      <Grid container spacing={3} sx={{ paddingTop: "50px" }}>
        {categorys.map((item) => (
          <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ maxWidth: 240 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image || productImg}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="h6">${item.price}</Typography>
                    <Typography variant="body2">
                      ⭐ {item.rating?.rate} ({item.rating?.count} reviews)
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryAll;
