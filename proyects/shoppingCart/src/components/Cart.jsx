import { useId } from 'react';
import { ClearCartIcon, CartIcon } from './Icon';
import './Cart.css';
import { Usecart } from '../hooks/Usecart';
import { CartItem } from './CartItem';

const Cart = () => {
  const cartCheckboxID = useId();
  const { clearCart, cart, addToCart } = Usecart();
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxID}>
        <CartIcon></CartIcon>
      </label>
      <input id={cartCheckboxID} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {cart.map(item => (
            <CartItem
              key={item.id}
              {...item}
              addToCart={() => addToCart(item)}
            />
          ))}
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon></ClearCartIcon>
        </button>
      </aside>
    </>
  );
};

export default Cart;
