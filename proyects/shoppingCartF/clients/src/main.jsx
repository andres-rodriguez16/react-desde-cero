import ReactDOM from 'react-dom/client';
import App from './App';
import { FiltersProvider } from './context/Filtercontext';
import './index.css';
import { CartContextProvider } from './context/CartContext';
import ReactGa from 'react-ga'

ReactGa.initialize("G-FVHVD8S8JW")
ReactGa.pageview(window.location.pathname + window.location.search)

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </FiltersProvider>

);
