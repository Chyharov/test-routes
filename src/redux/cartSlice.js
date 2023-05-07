import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  cart: JSON.parse(localStorage.getItem('cart')) || {},
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { pizza } = action.payload;
      const { cartItems, cart } = state;
      const newCartItems = [...cartItems, pizza];
      const newCart = { ...cart };
      newCart[pizza.id] = (newCart[pizza.id] || 0) + 1;
      localStorage.setItem('cart', JSON.stringify(newCart));
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      state.cartItems = newCartItems;
      state.cart = newCart;
    },
    removeFromCart: (state, action) => {
      const { pizza } = action.payload;
      const { cartItems, cart } = state;
      const newCartItems = [...cartItems];
      const index = newCartItems.findIndex((cartItem) => cartItem.id === pizza.id);
      if (index >= 0) {
        newCartItems.splice(index, 1);
        const newCart = { ...cart };
        newCart[pizza.id] -= 1;
        if (newCart[pizza.id] <= 0) {
          delete newCart[pizza.id];
        }
        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        state.cartItems = newCartItems;
        state.cart = newCart;
      }
    },
    clearCart: (state) => {
      localStorage.removeItem('cart');
      localStorage.removeItem('cartItems');
      state.cartItems = [];
      state.cart = {};
    },
    removeFromCartItem: (state, action) => {
      const { item } = action.payload;
      const { cartItems, cart } = state;
      const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      const newCart = { ...cart };
      if (newCart[item.id] > 0) {
        newCart[item.id] -= 1;
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      state.cartItems = newCartItems;
      state.cart = newCart;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeFromCartItem } = cartSlice.actions;
export default cartSlice.reducer;
