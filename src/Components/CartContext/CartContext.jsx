// CartContext.jsx
import { createContext, useContext } from 'react';

// Create CartContext
export const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext); // Returns the current value of the CartContext
};
