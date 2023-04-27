import s from './Pizza.module.scss'
import { BsCartFill, BsPlus, BsDash } from "react-icons/bs";
import { products } from '../../services/Products';
import { useState } from "react";

function Pizza({ addToCart, removeFromCart }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || {});

  const handleAddToCart = (pizza) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[pizza.id] = newCart[pizza.id] ? newCart[pizza.id] + 1 : 1;
      addToCart(pizza);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleRemoveFromCart = (pizza) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[pizza.id] > 0) {
        newCart[pizza.id] -= 1;
        removeFromCart(pizza);
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
      return newCart;
    });
  };

  const getCartItemQuantity = (pizza) => {
    return cart[pizza.id] || 0;
  };

  return (
    <div className='container'>
      <ul className={s.pizzaList}>
        {products.map((pizza) => (
          <li className={s.pizzaListItem} key={pizza.id}>
            <img loading='lazy' width="280px" height="280px" className={s.pizzaListItem__image} src={pizza.image} alt={pizza.title} />
            <div className={s.pizzaListItem__container}>
                <p className={s.pizzaListItem__title}>{pizza.title}</p>
                <p className={s.pizzaListItem__description}>{pizza.description}</p>
                <div className={s.pizzaListItem__priceContainer}>
                  <p className={s.pizzaListItem__price}>${pizza.price}</p>
                  {getCartItemQuantity(pizza) > 0 ? (
                    <div className={s.pizzaListItem__cartControls}>
                      <button className={s.pizzaListItem__cartButton} onClick={() => handleRemoveFromCart(pizza)}><BsDash/></button>
                      <span className={s.pizzaListItem__cartQuantity}>{getCartItemQuantity(pizza)}</span>
                      <button className={s.pizzaListItem__cartButton} onClick={() => handleAddToCart(pizza)}><BsPlus/></button>
                    </div>
                  ) : (
                    <button type='button' className={s.pizzaListItem__btn} onClick={() => handleAddToCart(pizza)}><BsCartFill/> Add to cart</button>
                  )}
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pizza;
