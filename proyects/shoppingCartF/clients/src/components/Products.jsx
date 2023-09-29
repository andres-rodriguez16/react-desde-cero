// import { useEffect, useState } from 'react';
import { useFilters } from '../hooks/UseFilters';
import { Usecart } from '../hooks/Usecart';
import { products } from '../mocks/products.json';
import { AddToCartIcon, RemoveFromCartIcon } from './Icon';
import './Products.css';

const Products = () => {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  const { addToCart, cart, removeFromCart } = Usecart();

  // const [productFech, setProductFech] = useState();

  // useEffect(() => {
  //   fetch('http://localhost:3001/products')
  //     .then(r => r.json())
  //     .then(data => setProductFech(data.products))
  //     .catch(error => console.log(error));
  // }, []);

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <main className='products'>
    
      <ul>
        {filteredProducts.map(product => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>
                  {product.title} - ${product.price}
                </strong>
              </div>
              <div>
                <button
                  className={
                    isProductInCart
                      ? 'button__revomeFromCart'
                      : 'button__addTocart'
                  }
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
