import { products } from '../../services/Products';
import PizzaList from '../../components/PizzaList/PizzaList'
import s from './PizzaPage.module.scss'

function PizzaPage({ handleAddToCart, handleRemoveFromCart, getCartItemQuantity }) {
  
  return (
    <section className={s.section__pizzaPage}>
      
      <PizzaList products={products} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} />
      
    </section>
  );
}

export default PizzaPage;
