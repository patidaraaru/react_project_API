import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import productImg from "../../img/img1.jpg";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  const [catData, setCatData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const {id} = useParams()

  useEffect(() => {
    const category = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        const result = await response.json();
        setCatData(result);
        console.log("Added:", result);
      } catch (error) {
        setError("Failed to add product:" + error.message);
      } finally {
        setLoading(false);
      }
    };
    category();
  }, []);

  if (error) return <p>This is error</p>;
  if (loading) return <p>TLoading.....</p>;

  return (
    <Container sx={{ paddingTop: "40px" }}>
      <h1 style={{textAlign:'center',paddingBottom:'20px'}}>Our Category</h1>
      <Grid container spacing={3} >
        {catData.map((item) => (
           <Link to={`/category/${item}`} key={item.id} style={{textDecoration:'none'}}>
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={productImg}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item}
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

export default Category;
