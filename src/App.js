import './App.css';
import Home from './components/Home';
import ProductList from './components/productList';
import {React, useState} from 'react'

function App() {
  return (  
    <div>
    <Home />
    <ProductList />  
    </div>
  );
}
export default App;
