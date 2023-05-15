import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import { products as initialProducts } from './mocks/products.json';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { Foteer } from './components/Foteer';
import { FiltersContext } from './context/Filtercontext';

const useFilters = () => {
  const [fiters, setFilters] = useState({
    category: 'all',
    minPrince: 40,
  });

  const filtersProduct = (products: any) => {
    return products.filter((product: any) => {
      return (
        product.price >= fiters.minPrince &&
        (fiters.category === 'all' || product.category === fiters.category)
      );
    });
  };
  return { filtersProduct, fiters, setFilters };
};

function App() {
 
  const [ products ] = useState(initialProducts);
  const { filtersProduct, setFilters, fiters } = useFilters();
  return (
    <div className='container'>
      <Header>
        <Filters chagesFilters={setFilters}></Filters>
      </Header>
      <h1>shopping cart</h1>
      <Products products={filtersProduct(products)} />
      <Foteer filters={fiters} />
    </div>
  );
}

export default App;
