
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useStore } from '../../store'
import ProductsItem from './ProductsItem'

type props = {
  filters: object,
  sort: string,
  reset: Boolean
}

const CurrentProducts = ({ filters, sort, reset }: props) => {


  const products = useStore((state: any) => state.products)
  const setProducts = useStore((state: any) => state.setProducts)
  const category = useStore((state: any) => state.category)
  const searchTag = useStore((state: any) => state.searchTag)
  const location = useLocation()
  const checkQuery = useStore((state: any) => state.checkQuery)
  const setCheckQuery = useStore((state: any) => state.setCheckQuery)
  const resetQueries = useStore((state: any) => state.resetQueries)

  const [filteredProducts, setFilteredProducts] = useState(Array)





  useEffect(() => {
    if (reset) {
      resetQueries()
    }

      const getProducts = async () => {
        try {
          
          const res = await axios.get((searchTag ? `https://full-ecommerce-api.herokuapp.com/api/products?tag=${searchTag}`
            : category ? `https://full-ecommerce-api.herokuapp.com/api/products?category=${category}`
              : ''
          ))

          setProducts(res.data)



        } catch (err) { console.log(err) }

      }


      getProducts()
      setCheckQuery()
    }, [location.pathname, searchTag, category]);







  useEffect(() => {
    if (checkQuery) {
      Array.isArray(products) && setFilteredProducts(
        products.filter((item: any) =>
          // filtering array key and values to match the one of the products 
          Object.entries(filters || {}).every(([key, value]) =>
            item[key].includes(value)

          )
        )

      )
    }


  }, [category, searchTag, filters, location, products])


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
    <div className='grid p-5 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 justify-between items-center m-auto md:gap-y-3 xs:gap-3 flex-wrap'>
      {filteredProducts.map((item: any) => (
        <ProductsItem item={item} index={10} key={item._id} />
      ))
      }
    </div>
  )
}

export default CurrentProducts