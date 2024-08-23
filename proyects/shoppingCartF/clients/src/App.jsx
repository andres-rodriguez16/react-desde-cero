import './App.css';
import Products from './components/Products';
import { Header } from './components/Header';
import { Foteer } from './components/Foteer';
import { IS_DEVELOPMENT } from './config';
import Cart from './components/Cart';
import Formularios from './components/formularios';

function App() {

  return (
    <div className='container'>
      {/* <Formularios></Formularios> */}
      <Cart/>
      <Header />
      <h1>shopping cart</h1>
      <Products />
     {IS_DEVELOPMENT && <Foteer /> }
    </div>
  );
}

export default App;
