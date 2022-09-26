import React, { useEffect } from 'react'
import Categories from '../Components/Categories/Categories'
import Announcement from '../Components/Announcement/Announcement'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Slider from '../Components/Slider/Slider'
import { useLocation } from 'react-router-dom'
import { useStore } from '../store'
import PopularProducts from '../Components/Popularproducts/PopularProducts'

const Home = () => {


  
  return (
    <div className=''>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <PopularProducts/>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home