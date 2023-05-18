import { useFilters } from '../hooks/UseFilters';
import { products } from '../mocks/products.json'
import { AddToCartIcon } from './Icon';
import './Products.css';


const Products = () => {
 const {filterProducts} = useFilters()
 const filteredProducts = filterProducts(products)
  return (
    <main className='products'>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div> 
              <strong>{product.title} - ${product.price}
              </strong>
             
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
