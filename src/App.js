import './App.css';
import Home from './components/Home';
import ProductList from './components/productList';
import {React, useState} from 'react'
import Cart from './components/Cart';

function App() {
  return (  
    <div>
      <ProductList /> 
    </div>
  );
}
export default App;
