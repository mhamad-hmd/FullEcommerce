import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Home from './Pages/Home'
import ProductList from './Pages/ProductsListPage/ProductList'
import ProductPage from './Pages/SingleProductPage/ProductPage'
import Register from './Pages/Account/Register'
import LogIn from './Pages/Account/LogIn'
import Cart from './Pages/Cart/Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  const user = true

  return (
    
   <Router>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/products/:category" element = {<ProductList/>} />
      <Route path = "/product/:id" element = {<ProductPage/>} />
      <Route path = "/cart" element = {<Cart/>} />
      <Route path = "/login" element = {user? <Navigate to="/"/> : <LogIn/>} />
      <Route path = "/register" element = {user? <Navigate to="/"/> : <Register/>} />

    </Routes>
   </Router>
  )
}

export default App
