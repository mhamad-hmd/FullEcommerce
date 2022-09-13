import React from 'react'
import Categories from '../Categories/Categories'
import Announcement from '../Components/Announcement/Announcement'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import PopularProducts from '../Components/PopularProducts/PopularProducts'
import Slider from '../Components/Slider/Slider'

const Home = () => {
  return (
    <div className=''>
      <Announcement />
      <NavBar />
      <Slider/>
      <Categories/>
      <PopularProducts/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home