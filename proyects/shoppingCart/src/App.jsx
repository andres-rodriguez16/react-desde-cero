import './App.css';
import Products from './components/Products';
import { Header } from './components/Header';
import { Foteer } from './components/Foteer';

function App() {
  return (
    <div className='container'>
      <Header />
      <h1>shopping cart</h1>
      <Products />
      <Foteer />
    </div>
  );
}

export default App;
