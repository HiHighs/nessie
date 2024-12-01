import { useCart } from '../Components/CartContext/CartContext';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import CartIcon from '../Components/CartIcon/CartIcon'; // Import CartIcon
import styles from './Store.module.css';
import Product from '../Components/Product/Product';

// Mock Product Data
const products = [
  {
    id: 1,
    name: 'Flowers White',
    price: 29.99,
    image: '/assets/Store/1_flowerswhite.png',
  },
  {
    id: 2,
    name: 'Flowers Black',
    price: 49.99,
    image: '/assets/Store/2_flowersblack.png',
  },
  {
    id: 3,
    name: 'Nessie',
    price: 19.99,
    image: '/assets/Store/3_nessie.png',
  },
];

function Store() {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div>
      <Navigation />
      <CartIcon />
      <h1 className={styles.fadeIn}>Store</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={(quantity) => addToCart(product, quantity)} // Add product and quantity
            onRemoveFromCart={() => removeFromCart(product.id)}
          />
        ))}
      </div>
      {/* <h1>COMING SOON</h1> */}
      <Footer />
    </div>
  );
}

export default Store;
