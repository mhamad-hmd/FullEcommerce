
import React, { useEffect, useState } from 'react'
import './ProductList.scss'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/NavBar/NavBar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import { useLocation } from 'react-router-dom'
import { useStore } from '../../store'



const ProductList = () => {

  const location = useLocation()


  const [currentLocation, serCurrentLocation] = useState(location);

  const category = useStore((state: any) => state.category)
  const searchTag = useStore((state: any) => state.searchTag)

  const setSearchTag = useStore((state: any) => state.setSearchTag)
  const setCategory = useStore((state: any) => state.setCategory)



  useEffect(() => {
    if (location.pathname.split('/')[1] === "find") {

      setSearchTag(location.pathname.split('/')[2])
      console.log('find')
    }

    else if (location.pathname.split('/')[1] === "products") {
console.log('products')
      setCategory(location.pathname.split('/')[2])
    }
   
    

  }, [location])
console.log(searchTag + "list")



// CRETING A FILTERs STATE
const [filters, setFilters] = useState(Object)
const [sort, setSort] = useState('')

const handleFitlers = (e: any) => {
  // FETCHING USER INPUT VALUE
  const value = e.target.value;

  setFilters({
    //SETTING THE FILTERs OLD VALUE WITH NEW ONE IN AN OBJECT
    ...filters,
    // FETCHING THE TARGETS NAME AND ASSIGNING INPUTS VALUE TO IT
    [e.target.name]: value
  })
}


return (
  <div className='productListContainer'>

    <Navbar />
    <Announcement />

    <h1 className='text-4xl font-bold m-5 '>{location.pathname.split("/")[2]}</h1>

    <div className="filtersContainr flex justify-between">

      <div className='filtersProdcts filtersItems / m-5  md:block / xs:flex xs:flex-col'>
        <span className='text-xl font-semibold md:mr-5 xs:mr-0  '>Filters Products:</span>

        <select className='text-lg bg-transparent' name="color" onChange={e => handleFitlers(e)} id="">
          <option value="Color" disabled >Color</option>
          <option >Navy</option>
          <option >Gray</option>
          <option >Black</option>
        </select>

        <select className='text-lg' onChange={handleFitlers} name="size" id="">
          <option disabled >Size</option>
          <option>SM</option>
          <option>MD</option>
          <option>LG</option>
        </select>

      </div>

      <div className='filtersSort filtersItems /  m-5   '>
        <span className='text-xl  font-semibold '>Sort Products:</span>

        <select className='text-lg ' name="sort" id="" onChange={e => setSort(e.target.value)} >
          <option value="newest" >Newest</option>
          <option value="asc">Price (asc)</option>
          <option value="desc">Price (desc)</option>
        </select>

      </div>

    </div>

    <PopularProducts filters={filters} sort={sort} />
    <NewsLetter />
    <Footer />

  </div>


)
}

export default ProductList;