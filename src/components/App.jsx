import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Routes, Router, Route, Navigate } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom'
import Pizza from 'pages/Pizza/Pizza';
import Cart from 'pages/Cart/Cart';
import Home from 'pages/Home/Home';
import Header from './Header/Header';

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
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
      <Routes>

      <Route
        path='/'
        element={
        <div>
        <p>Its a home page</p>
      </div>}>
      </Route>

      <Route
        path='/pizza'
        element={
        <div>
        <p>Its a pizza page</p>
      </div>}>
      </Route>

      <Route
        path='/cart'
        element={
        <div>
        <p>Its a cart page</p>
      </div>}>
      </Route>

      </Routes>
    </>
    
  );
};