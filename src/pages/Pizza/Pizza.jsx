import { BsCartFill, BsPlus, BsDash } from "react-icons/bs";
import { products } from '../../services/Products';
import s from './Pizza.module.scss'

function Pizza({ handleAddToCart, handleRemoveFromCart, getCartItemQuantity }) {
  
  return (
    <section className={s.section__pizzaPage}>
    <div className='container'>
      <h1 className='visually__hidden'>PizzaStyle - order your pizza online</h1>
      <ul className={s.pizzaList}>
        {products.map((pizza) => (
          <li className={s.pizzaListItem} key={pizza.id}>
            <img loading='lazy' width="280px" height="280px" className={s.pizzaListItem__image} src={pizza.image} alt={pizza.title} />
            <div className={s.pizzaListItem__container}>
                <h2 className={s.pizzaListItem__title}>{pizza.title}</h2>
                <p className={s.pizzaListItem__description}>{pizza.description}</p>
                <div className={s.pizzaListItem__priceContainer}>
                  <p className={s.pizzaListItem__price}>{pizza.price} UAH</p>
                  {getCartItemQuantity(pizza) > 0 ? (
                    <div className={s.pizzaListItem__cartControls}>
                      <button type="button" aria-label="Button decrement" className={s.pizzaListItem__cartButton_decrement} onClick={() => handleRemoveFromCart(pizza)}><BsDash aria-label="Decrement icon" className={s.pizzaListItem__cartButtonSvg}/></button>
                        <span className={s.pizzaListItem__cartQuantity}>{getCartItemQuantity(pizza)}</span>
                      <button type="button" aria-label="Button increment" className={s.pizzaListItem__cartButton_increment} onClick={() => handleAddToCart(pizza)}><BsPlus aria-label="Increment icon" className={s.pizzaListItem__cartButtonSvg}/></button>
                    </div>
                  ) : (
                    <button type="button" aria-label="Button add to cart" className={s.pizzaListItem__btn} onClick={() => handleAddToCart(pizza)}>Add to cart <BsCartFill aria-label="Add to cart icon"/></button>
                  )}
                </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
      </section>
  );
}

export default Pizza;
