// src/components/Wishlist.js
import React, { useContext } from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import productImg from '../../img/img1.jpg';
import WishListContext from '../WishList/WishListContext';

const Wishlist = () => {
  const { wishlist, removeToWishList } = useContext(WishListContext);

  return (
    <div style={{ marginTop: '80px' }}>
      <Typography variant="h4" gutterBottom>
        My Wishlist
      </Typography>
      <Grid container spacing={3}>
        {wishlist && wishlist.length > 0 ? (
          wishlist.map((item) => (
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
                    <Typography variant="h6">{item.price} USD</Typography>
                    <Typography variant="subtitle2">
                      Rating: {item.rating?.rate} ({item.rating?.count})
                    </Typography>
                    <button
                      style={{ marginTop: '10px' }}
                      onClick={() => removeToWishList(item.id)}
                    >
                      Remove from Wishlist
                    </button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No products in wishlist.</Typography>
        )}
      </Grid>
    </div>
  );
};

export default Wishlist;
