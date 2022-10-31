import React, { useEffect } from 'react'
import Categories from '../Components/Categories/Categories'
import Announcement from '../Components/Announcement/Announcement'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Slider from '../Components/Slider/Slider'
import PopularProducts from '../Components/PopularProducts/PopularProducts'
import { userRequest } from '../requestMethods'
import { useStore, useUserStore } from '../store'
import axios from 'axios'
import UserAlert from '../Components/UserAlert/UserAlert'


const Home = () => {
  const cart = useStore((state: any) => state.cart)


  
  return (
    <div className=''>
      <Slider />
      <Categories />
      <PopularProducts/>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home