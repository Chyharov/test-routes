import { Link } from 'react-router-dom';
import { BsPlus, BsDash, BsTrash } from 'react-icons/bs';
import Button from 'components/Button/Button';
import s from './CartList.module.scss';

function CartList({ cartItems, handleRemoveFromCart, handleAddToCart, getCartItemQuantity, totalPrice, handleClearCart, removeFromCartItem, handleToast }) {
  return (
    <div className={`container ${cartItems.length === 0 ? s.cart__contaner_choose : s.cart__container}`}>
      {cartItems.length === 0 ? (
        <h1>Please choose pizza <Link to="/"><Button text="here" aria-label="Button choose pizza" ></Button></Link></h1>
      ) : (
        <>
          <ul className={s.pizzaList}>
            {cartItems.map((item, index) => {
              const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
              if (itemIndex !== index) {
                return null;
              }
              return (
                <li key={index} className={s.pizzaListItem}>
                  <div className={s.pizzaListItem__container}>
                    <img
                      className={s.pizzaListItem__image}
                      width="100px"
                      height="100px"
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className={s.pizzaListItem__info}>
                      <h2 className={s.pizzaListItem__title}>{item.title}</h2>
                      <p className={s.pizzaListItem__description}>{item.description}</p>
                    </div>
                  </div>

                  <div className={s.pizzaListItem__priceContainer}>
                    <p className={s.pizzaListItem__price}>{item.price * getCartItemQuantity(item)} UAH</p>
                    <button type="button" aria-label="Button remove from cart" className={s.pizzaListItem__cartButtonTrash} onClick={() => removeFromCartItem(item)}>
                      <BsTrash aria-label="Icon remove from cart" className={s.pizzaListItem__cartButtonSvg}/>
                    </button>
                    <div className={s.pizzaListItem__cartControls}>
                      <button type="button" aria-label="Button decrement" className={s.pizzaListItem__cartButton_decrement} onClick={() => handleRemoveFromCart(item)}>
                        <BsDash aria-label="Decrement icon" className={s.pizzaListItem__cartButtonSvg}/>
                      </button>
                      <span className={s.pizzaListItem__cartQuantity}>{getCartItemQuantity(item)}</span>
                      <button type="button" aria-label="Button increment" className={s.pizzaListItem__cartButton_increment} onClick={() => handleAddToCart(item)}>
                        <BsPlus aria-label="Increment icon" className={s.pizzaListItem__cartButtonSvg}/>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={s.totalContainer}>
            <p className={s.totalPrice}>Total: {totalPrice} UAH</p>
            <Button text="Make an order" aria-label="Button Make an order" onClick={() => { handleClearCart(); handleToast(); }}/>
          </div>
        </>
      )}
      </div>
  );
}

export default CartList;