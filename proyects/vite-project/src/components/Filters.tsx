import { useState, useId } from 'react';
import './Filters.css';

export const Filters = ({ chagesFilters }: any) => {
  const [price, setPrice] = useState<number>(0);
  const idFilterMinPrice = useId();
  const idFilterCategory = useId();
  const onChangePrice = (e: any) => {
    setPrice(e.target.value);

    chagesFilters((prevState: any) => ({
      ...prevState,
      minPrince: e.target.value,
    }));
  };

  const handlesOnchangeCategory = (e: any) => {
    chagesFilters((prevState: any) => ({
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
        />
        <span>${price}</span>
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
