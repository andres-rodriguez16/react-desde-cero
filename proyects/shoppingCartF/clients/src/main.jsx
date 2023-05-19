import ReactDOM from 'react-dom/client';
import App from './App';
import { FiltersProvider } from './context/Filtercontext';
import './index.css';
import { CartContextProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </FiltersProvider>
);
