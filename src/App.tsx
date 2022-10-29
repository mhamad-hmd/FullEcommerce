import { useEffect, useState } from 'react'
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
  useLocation,
} from "react-router-dom";
import Success from './Pages/Success'
import { useStore, useUserStore } from './store'
import Announcement from './Components/Announcement/Announcement'
import Navbar from './Components/NavBar/NavBar'
import axios from 'axios'
import { userRequest } from './requestMethods'
import ProfilePage from './Pages/Account/ProfilePage'


function App() {

  
  const cart = useStore((state: any) => state.cart)
  const user = useUserStore((state: any) => state.currentUser)
  const isEmpty = Object.keys(user).length !== 0;
  const currentUser = useUserStore((state: any) => state.currentUser)
  const setCart = useStore((state: any) => state.setCart)


    useEffect(() => {
      const getCart = async () => {
  
        try {
          const res = await userRequest.get(`/cart/find/${currentUser._id}`)
          setCart(res.data.products,res.data._id )
  
        } catch (err) { console.log(err) }
      }
  
     isEmpty && getCart()
    },[isEmpty])




 

  return (
    <div className="App">
      <Router>
    
        <Announcement />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/find/:tag" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={isEmpty ? <Navigate to="/" /> : <LogIn />} />
          <Route path="/register" element={isEmpty ? <Navigate to="/" /> : <Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/profile" element={<ProfilePage/>} />


        </Routes>
      </Router>
    </div>
  )
}

export default App
