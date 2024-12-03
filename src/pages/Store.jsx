import { useCart } from '../Components/CartContext/CartContext';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import CartIcon from '../Components/CartIcon/CartIcon';
import styles from './Store.module.css';
import Product from '../Components/Product/Product';
import { useState } from 'react';
import { products } from '../services/store/products.js';

function Store() {
  const { addToCart, removeFromCart } = useCart();
  const [isUnderstood, setIsUnderstood] = useState(false);

  return (
    <div>
      <Navigation />
      <CartIcon />
      <h1 className={styles.fadeIn}>Store</h1>

      {!isUnderstood && (
        <div className={styles.important}>
          <p className={styles.message}>
            <b>IMPORTANT:</b> I’m working on implementing automatic payments and
            delivery options. <br />
            For now, after you place your order, you’ll receive an email with
            payment instructions. <br />
            Once I receive your payment, I’ll ship your order as soon as
            possible.
            <br />
            Thank you for your understanding!
            <br />– Nessie :)
          </p>
          <button
            className={styles.understood}
            onClick={() => setIsUnderstood(true)}
          >
            Understood
          </button>
        </div>
      )}

      <div className={styles.productList}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={(quantity) => addToCart(product, quantity)}
            onRemoveFromCart={() => removeFromCart(product.id)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Store;
