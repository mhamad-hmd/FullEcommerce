
import React from 'react'
import './ProductList.scss'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/NavBar/NavBar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'


const ProductList = () => {
  return (
    <div className='productListContainer'>

      <Navbar />
      <Announcement />

      <h1 className='text-4xl font-bold m-5 '>Suits</h1>

      <div className="filterContainr flex justify-between">

        <div className='filter m-5'>
          <span className='text-2xl font-semibold mr-5'>Filter Products:</span>

          <select className='text-lg bg-transparent' name="" id="">
            <option value="" selected disabled hidden>Color</option>
            <option value="">Navy</option>
            <option value="">Gray</option>
            <option value="">Black</option>
          </select>

          <select className='text-lg' name="" id="">
            <option value="" selected disabled hidden>Size</option>
            <option value="">SM</option>
            <option value="">MD</option>
            <option value="">LG</option>
          </select>

        </div>

        <div className='filter m-5'>
          <span className='text-2xl  font-semibold'>Sort Products:</span>

          <select className='text-lg ' name="" id="">
            <option value="" selected>Newest</option>
            <option value="">Price (asc)</option>
            <option value="">Price (desc)</option>
          </select>

        </div>

      </div>

      <PopularProducts />
      <NewsLetter />
      <Footer />

    </div>


  )
}

export default ProductList