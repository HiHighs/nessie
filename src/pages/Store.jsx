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
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) =>
          product.type.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <div>
      <Navigation />
      <CartIcon />
      <h1 className={styles.fadeIn}>Store</h1>

      {!isUnderstood && (
        <div className={styles.important}>
          <p className={styles.message}>
            <b>IMPORTANT:</b> After you place your order, you’ll receive an
            email with payment instructions. <br />
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

      {/* Category Filters */}
      <div className={styles.categoryFilters}>
        {['All', 'Print', 'Sticker', 'Other'].map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${
              selectedCategory === category ? styles.activeFilter : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category !== 'All' && category !== 'Other'
              ? `${category}s`
              : category}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
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
