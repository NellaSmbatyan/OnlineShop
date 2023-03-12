import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes } from 'react-router';
// import ProductsInfo from './Components/ProductsInfo'
import Products from './Components/Products'

import './App.css';
import Header from './Components/Header';



export default function App () {

  return (
    <div>
  <Header/>
  <Routes>
    <Route path='/' element={<Products/>}/>
    {/* <Route path='/product' element={<ProductsInfo/>}/>
       */}
      
  </Routes>
    </div>
  )
}


