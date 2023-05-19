
// eslint-disable-next-line react/prop-types
export const CartItem = ({ thumbnail, title, price, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt='phone iphone' />
      <div>
        <strong> {title} </strong> -<span> {price} </span>
      </div>
      <footer>
        <small>Qty: {quantity} </small>
        <button onClick={() => addToCart()}>+</button>
      </footer>
    </li>
  );
};