import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './Login'
import Signup from './Signup'
import {Navbar} from './Components/navbar'
import {Shop} from './Pages/shop/shop'
import {Cart} from './Pages/cart/cart'
import { ShopContextProvider } from './context/shop-context'
import {CheckOut} from './Pages/checkout/checkout'


 function App() {
  return (
    <div className='App' >
  <ShopContextProvider>
  <Router>
  <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/shop' element={
      <div>
        <Navbar />
        <Shop />
      </div> } />
    <Route path='/cart' element={
      <div>
        <Navbar />
        <Cart />
      </div> } />
      <Route path='/checkout' element={
      <div>
        <Navbar />
        <CheckOut />
      </div> } />
  </Routes>
  </Router>
  </ShopContextProvider>
  </div>
  
  )
}

export default App

