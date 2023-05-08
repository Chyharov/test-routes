import CartList from '../../components/CartList/CartList'
import s from './CartPage.module.scss';


function CartPage({ cartItems, handleRemoveFromCart, handleAddToCart, getCartItemQuantity, totalPrice, handleClearCart, removeFromCartItem, handleToast }) {
  return (
    <section className={s.section_cartPage}>

      <CartList cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart} getCartItemQuantity={getCartItemQuantity} totalPrice={totalPrice} handleClearCart={handleClearCart} removeFromCartItem={removeFromCartItem} handleToast={handleToast} />
    
    </section>
  );
}

export default CartPage;