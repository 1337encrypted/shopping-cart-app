import './App.css';
import Home from './components/Home';
import About from './components/About';
import ProductList from './components/productList';
import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';

function App() {
  return (  
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <ProductList />} />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
