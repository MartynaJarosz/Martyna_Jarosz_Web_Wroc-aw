import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { MainPage } from './components/mainPage/MainPage';
import { Product } from './model/product.model';
import { Cart } from './components/cart/Cart';

const initialProductContext: Product[] = [];
export const ProductsContext = createContext(initialProductContext);

export default function App() {

  const [myProducts, setMyProducts] = useState<Product[]>([]);
  
  return (
    <ProductsContext.Provider value={myProducts}>
      <div className="App">
        {JSON.stringify(myProducts)}
        <Router>
          <Routes>
            <Route path="/" element={<MainPage setMyProducts={setMyProducts} />} />
            <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
      </div>
    </ProductsContext.Provider>
  );
}

