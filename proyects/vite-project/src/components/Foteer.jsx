import './Footer.css';

export const Foteer = ({ filters }) => {
  return <div className='footer'>{JSON.stringify(filters, null, 2)}</div>;
};
