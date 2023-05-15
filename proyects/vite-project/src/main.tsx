import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { FiltersProvider } from './context/Filtercontext';

ReactDOM.render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
