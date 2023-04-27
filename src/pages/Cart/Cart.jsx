import s from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { BsPlus, BsDash } from "react-icons/bs";
import { useState } from "react";

function Cart({ cartItems, removeFromCart, addToCart}) {
  const [cart, setCart] = useState({});

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[item.id] = newCart[item.id] ? newCart[item.id] + 1 : 1;
      addToCart(item);
      return newCart;
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.id] === 1) {
        delete newCart[item.id];
      } else {
        newCart[item.id] = newCart[item.id] - 1;
        removeFromCart(item);
      }
      return newCart;
    });
  };

  const getCartItemQuantity = (item) => {
    return cart[item.id] || 0;
  };

  if (cartItems.length === 0) {
    return (
      <div className={'container ' + s.cart__container}>
        <h1>Please, choose pizza <Link to='/pizza'><button type='button' className={s.cart__hereBtn}>here</button></Link></h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <ul className={s.pizzaList}>
        {cartItems.map((item, index) => (
          <li key={index} className={s.pizzaListItem}>
            <img width="280px" height="280px" className={s.pizzaListItem__image} src={item.image} alt={item.title} loading="lazy"/>
            <div className={s.pizzaListItem__container}>
              <p className={s.pizzaListItem__title}>{item.title}</p>
              <p className={s.pizzaListItem__description}>{item.description}</p>
                <div className={s.pizzaListItem__priceContainer}>
                <p className={s.pizzaListItem__price}>${item.price}</p>

                          <div className={s.pizzaListItem__cartControls}>
                            <button className={s.pizzaListItem__cartButton} onClick={() => handleRemoveFromCart(item)}><BsDash/></button>
                            <span className={s.pizzaListItem__cartQuantity}>{getCartItemQuantity(item)}</span>
                            <button className={s.pizzaListItem__cartButton} onClick={() => handleAddToCart(item)}><BsPlus/></button>
                          </div>

                    </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;