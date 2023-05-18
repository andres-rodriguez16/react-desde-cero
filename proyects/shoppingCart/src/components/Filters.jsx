import {  useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/UseFilters';

export const Filters = () => {
  const { filters,setFilters } = useFilters();
  const idFilterMinPrice = useId();
  const idFilterCategory = useId();

  const onChangePrice = e => {
   
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handlesOnchangeCategory = e => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className='filters'>
      <div>
        <label htmlFor={idFilterMinPrice}>Precios</label>
        <input
          type='range'
          id={idFilterMinPrice}
          min={0}
          max={1000}
          onChange={onChangePrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={idFilterCategory}>categorias</label>
        <select
          name=''
          id={idFilterCategory}
          onChange={handlesOnchangeCategory}
        >
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>celulares</option>
          <option value='fragrances'>Colonias</option>
        </select>
      </div>
    </section>
  );
};
