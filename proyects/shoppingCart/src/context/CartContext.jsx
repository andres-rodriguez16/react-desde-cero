import { createContext, useState } from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    // verificamos si el producto ya existe dentro del carrito
    const productIncartIndex = cart.findIndex(item => item.id === product.id);
    if (productIncartIndex >= 0) {
      console.log('entro');
      // const newCart = [...cart];
      // newCart[productIncartIndex].quantity += 1;
      // setCart(newCart);
      // un forma seria con el structuredClone.
      const newCart = structuredClone(cart);
      newCart[productIncartIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart(prevState => [
        ...prevState,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = product => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
