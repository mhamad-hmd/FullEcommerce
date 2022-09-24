
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useStore } from '../../store'
import ProductsItem from './ProductsItem'

type props = {
  filters: object,
  sort: string,
}

const PopularProducts = ({ filters, sort }: props) => {

  
  const products:any = useStore((state: any) => state.products)
  const setProducts = useStore((state: any) => state.setProducts)
  const [filteredProducts, setFilteredProducts] = useState(Array)
  const category = useStore((state: any) => state.category)
  const searchTag = useStore((state: any) => state.searchTag)


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(searchTag ? `http://localhost:3000/api/products?tag=${searchTag}`
          : category ? `http://localhost:3000/api/products?category=${category}`
            : `http://localhost:3000/api/products`);
        setProducts(res.data)

      } catch (err) { console.log(err) }
    }
    getProducts()
    console.log("category: " + category + " searchTag: " + searchTag, products)
  }, [searchTag, category,]);

  // console.log(location.pathname.split('/')[1])

  useEffect(() => {
    category || searchTag && Array.isArray(products) && setFilteredProducts(
       products.filter((item: any) =>
        // filtering array key and values to match the one of the products 
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)

        ))
        
    )

  }, [products, category, searchTag, filters])


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
      {searchTag || category
        ? filteredProducts.map((item: any) => (
          <ProductsItem item={item} key={item._id} />
        ))
        :  Array.isArray(products)  && products
          .slice(0, 8)
          .map((item: any) => (
            <ProductsItem item={item} key={item._id} />
          )) 
      }
    </div>
  )
}

export default PopularProducts