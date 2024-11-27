import { useState, useMemo } from 'react';
import PropTypes from 'prop-types'; // For prop validation
import { CartContext } from '../CartContext/CartContext'; // Import CartContext from CartContext.jsx

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // Initial empty cart

  function addToCart(product, quantity = 1) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  }

  function clearCart() {
    setCart([]);
  }

  // Calculate total amount
  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
