// src/context/WishListProvider.js
import { useState } from "react";
import WishListContext from '../WishList/WishListContext';

const WishListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishList = (product) => {
    setWishlist((prev) => {
      const exist = prev.some((item) => item.id === product.id);
      if (!exist) {
        alert("Added to wishlist");
        console.log("Product added to wishlist:", product);
        return [...prev, product];
      }
      alert("Already in wishlist");
      return prev;
    });
  };

  const removeToWishList = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    alert("Removed from wishlist");
    console.log("Product removed from wishlist:", id);
  };

  return (
    <WishListContext.Provider
      value={{ wishlist, addToWishList, removeToWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
