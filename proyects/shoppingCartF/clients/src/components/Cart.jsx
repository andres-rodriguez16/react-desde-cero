import { useId } from 'react';
import { ClearCartIcon, CartIcon } from './Icon';
import './Cart.css';
import { Usecart } from '../hooks/Usecart';
import { CartItem } from './CartItem';

const Cart = () => {
  const cartCheckboxID = useId();
  const { clearCart, cart, addToCart, removeOneProduct } = Usecart();

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxID}>
        <span className='quantity'> {cart.length !== 0 && cart.length}</span>
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
              removeOneProduct={() => removeOneProduct(item)}
            />
          ))}
        </ul>
        {cart.length > 0 ? (
          <button onClick={() => clearCart()}>
            <ClearCartIcon></ClearCartIcon>
          </button>
        ) : (
          <div>carrito vacio</div>
        )}
      </aside>
    </>
  );
};

export default Cart;
