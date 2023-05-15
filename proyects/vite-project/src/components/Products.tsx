import { AddToCartIcon } from './Icon';
import './Products.css';

interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
interface ArrayProduct {
  products: Products[];
}

const Products = ({ products }: ArrayProduct) => {
  return (
    <main className='products'>
      <ul>
        {products.map(product => (
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
