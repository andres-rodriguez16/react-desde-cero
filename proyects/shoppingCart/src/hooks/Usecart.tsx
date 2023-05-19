import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Usecart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('UseCart must be used within a CartProvider');
  }
  return context;
};
