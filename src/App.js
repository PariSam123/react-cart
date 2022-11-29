import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom' //imrr

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css" 

import Menu from './components/Menu'
import Home from './components/Home'
import Pnf from './components/Pnf'
import Product from './components/Product'
import Cart from './components/Cart'


function App() {
  return (
    <Router>
      <Menu />
      <ToastContainer autoClose={4000} position={'top-center'} />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/product/:id`} element={<Product />} />
        <Route path={`/cart`} element={<Cart />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
    </Router>
  )
}

export default App
