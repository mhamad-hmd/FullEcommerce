import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Home from './Pages/Home'
import ProductList from './Pages/ProductsListPage/ProductList'
import ProductPage from './Pages/SingleProductPage/ProductPage'
import Register from './Pages/Account/Register'
import LogIn from './Pages/Account/LogIn'
import Cart from './Pages/Cart/Cart'

function App() {

  return (
    <div className='App '>
    <Cart/>
    </div>
  )
}

export default App
