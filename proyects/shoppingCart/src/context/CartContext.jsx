import { createContext, useReducer } from 'react';
import { cartReducer, cartInitialState } from '../reducers/carts'
export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  
  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeFromCart = product => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    })
  };
  return (
    <CartContext.Provider
      value={{ cart :state, addToCart, removeFromCart , clearCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
