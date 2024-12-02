import { useCart } from '../Components/CartContext/CartContext';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import styles from './Cart.module.css';
import clear from '../assets/Buttons/clearcart.png';
import checkout from '../assets/Buttons/checkout.png';
import remove from '../assets/Buttons/remove.png';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart, totalAmount } = useCart();

  function handleRemove(productId, productName) {
    if (
      window.confirm(
        `Are you sure you want to remove ${productName} from the cart?`
      )
    ) {
      removeFromCart(productId);
    }
  }

  function handleClearCart() {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      clearCart();
    }
  }

  function handleCheckout() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  }

  return (
    <div className={styles.pageContainer}>
      {' '}
      {/* Apply pageContainer here */}
      <Navigation />
      <div className={styles.cart}>
        <h1>Your Cart</h1>
        <div className={styles.cartItems}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className={styles.cartItem}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.cartImage}
                />
                <div className={styles.cartDetails}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p>€{product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <img
                    className={styles.remove}
                    src={remove}
                    onClick={() => handleRemove(product.id, product.name)}
                    alt='Remove'
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <>
            <div className={styles.totalAmount}>
              <h2>Total: €{totalAmount.toFixed(2)}</h2>
            </div>
            <div className={styles.cartActions}>
              <img
                className={styles.clearCart}
                src={clear}
                onClick={handleClearCart}
                alt='Clear cart'
              />
              <img
                className={styles.checkout}
                src={checkout}
                onClick={handleCheckout}
                alt='Checkout'
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
