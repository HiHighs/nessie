import { useState, useEffect } from 'react';
import { useCart } from '../CartContext/CartContext';
import styles from './CartIcon.module.css';
import icon from '../../assets/Cart/icon.png';
import { NavLink } from 'react-router-dom';

function CartIcon() {
  const { cart } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotalQuantity = cart.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  return (
    <NavLink to='/cart'>
      <div className={styles.cartIcon}>
        <img src={icon} alt='Cart' />
        {totalQuantity > 0 && (
          <span
            key={totalQuantity} // This will reset the badge every time the quantity changes
            className={styles.badge}
          >
            {totalQuantity}
          </span>
        )}
      </div>
    </NavLink>
  );
}

export default CartIcon;
