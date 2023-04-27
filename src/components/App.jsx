import React, { useState, useEffect } from 'react';
import { BrowserRouter as Routes, Route, Navigate, Switch } from 'react-router-dom';
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
    <div>
      <Header cartItemCount={getCartItemCount()} />
      <Switch>
        <Route path="/"><Home /></Route>
  
        <Route path="/pizza"><Pizza addToCart={addToCart} removeFromCart={removeFromCart} cartItemCount={getCartItemCount()} /></Route>
        <Route path="/cart"><Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} cartItemCount={getCartItemCount()} /></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
      </div>
  );
};
