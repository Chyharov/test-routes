import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Pizza from 'pages/Pizza/Pizza';
import Cart from 'pages/Cart/Cart';
import Home from 'pages/Home/Home';

export const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
  };

  const removeFromCart = () => {
    const newCartItems = [...cartItems];
    newCartItems.pop();
    setCartItems(newCartItems);
  };

  const getCartItemCount = () => {
    const cartItemCount = cartItems.length;
    localStorage.setItem('cartItemCount', cartItemCount);
    return cartItemCount;
  };

  return (
    <Router>
      <Header cartItemCount={getCartItemCount()} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/pizza"
          element={<Pizza addToCart={addToCart} removeFromCart={removeFromCart} cartItemCount={getCartItemCount()} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} cartItemCount={getCartItemCount()} />}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};