
import React, { useEffect, useState } from 'react'
import './ProductList.scss'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/NavBar/NavBar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import PopularProducts from '../../Components/Currentproducts/CurrentProducts'
import { useLocation } from 'react-router-dom'
import { useStore } from '../../store'
import axios from 'axios'
import ProductsItem from '../../Components/Currentproducts/ProductsItem'



const ProductList = () => {

  const location = useLocation()


  const [currentLocation, serCurrentLocation] = useState(location);

  const category = useStore((state: any) => state.category)
  const setCategory = useStore((state: any) => state.setCategory)
  const searchTag = useStore((state: any) => state.searchTag)
  const setSearchTag = useStore((state: any) => state.setSearchTag)

  const [currentProducts, setCurrentProducts] = useState([])
  const searchInputs = useStore((state: any) => state.searchInputs)
  const [filteredProducts, setFilteredProducts] = useState(Array)



  useEffect(() => {

      const getProducts = async () => {
        try {
          
          const res = await axios.get((searchTag ? `https://full-ecommerce-api.herokuapp.com/api/products/?tag=${searchTag}`
            : category ? `https://full-ecommerce-api.herokuapp.com/api/products/?category=${category}`
              : `https://full-ecommerce-api.herokuapp.com/api/products/`
          ))

          setCurrentProducts(res.data)


        } catch (err) { console.log(err) }

      }


      getProducts()
    }, [category, searchTag]);




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

useEffect(() => {
    Array.isArray(currentProducts) && setFilteredProducts(
      currentProducts.filter((item: any) =>
        // filtering array key and values to match the one of the products 
        Object.entries(filters || {}).every(([key, value]) =>
          item[key].includes(value)

        )
      )

    )


}, [category, searchTag, filters, location, currentProducts])

useEffect(() => {
  if (sort === "newest") {
    setFilteredProducts((prev) =>
      [...prev].sort((a: any, b: any) => a.createdAt - b.createdAt)
    );
  } else if (sort === "asc") {
    setFilteredProducts((prev) =>
      [...prev].sort((a: any, b: any) => a.price - b.price)
    )
  } else if (sort === "desc") {
    setFilteredProducts((prev) =>
      [...prev].sort((a: any, b: any) => b.price - a.price)
    )
  }
}, [sort])


return (
  <div className='productListContainer'>


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

    <div className='grid p-5 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 justify-between items-center m-auto md:gap-y-3 xs:gap-3 flex-wrap'>
      {filteredProducts.map((item: any, index:number) => (
        <ProductsItem item={item} index={index} key={item._id} />
      ))
      }
    </div>
    <NewsLetter />
    <Footer />

  </div>


)
}

export default ProductList;