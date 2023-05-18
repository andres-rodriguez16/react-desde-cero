import { useFilters } from '../hooks/UseFilters';
import './Footer.css';

export const Foteer = () => {
  const { filters } = useFilters();
  return <div className='footer'>{JSON.stringify(filters, null, 2)}</div>;
};
