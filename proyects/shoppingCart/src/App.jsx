import { useState, useContext } from 'react';
import './App.css';
import Products from './components/Products';
import { products as initialProducts } from './mocks/products.json';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { Foteer } from './components/Foteer';
import { FiltersContext } from './context/Filtercontext';



function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}

function App() {
   
  const [ products ] = useState(initialProducts);
  const { filterProducts, setFilters, filters } = useFilters();
  return (
    <div className='container'>
      <Header>
        <Filters chagesFilters={setFilters}></Filters>
      </Header>
      <h1>shopping cart</h1>
      <Products products={filterProducts(products)} />
      <Foteer filters={filters} />
    </div>
  );
}

export default App;
