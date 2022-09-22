
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductsItem from './ProductsItem'

type props = {
  cat: string,
  filters: object,
  sort: string,
  tag:string
}

const PopularProducts = ({ cat, tag, filters, sort }: props) => {
  const [products, setProducts] = useState(Array);
  const [filteredProducts, setFilteredProducts] = useState(Array)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( tag? `http://localhost:3000/api/products?tag=${tag}`  : cat ? `http://localhost:3000/api/products?category=${cat}`:  `http://localhost:3000/api/products`);
        setProducts(res.data)
       
      } catch (err) { console.log(err) }
    }
    getProducts()
  }, [cat]);
  
  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item: any) => 
      // filtering array key and values to match the one of the products 
         Object.entries(filters).every(([key, value]) => 
        item[key].includes(value)
      
      ))
    )
 
  }, [products, cat, filters])


useEffect(() => {
  if(sort === "newest") {
    setFilteredProducts((prev) =>
     [...prev].sort((a:any, b:any) => a.createdAt - b.createdAt)
     );
  } else if (sort === "asc") {
    setFilteredProducts((prev) =>
    [...prev].sort((a:any, b:any) => a.price - b.price)
)} else if (sort === "desc") {
  setFilteredProducts((prev) =>
  [...prev].sort((a:any, b:any) => b.price - a.price)
)}
},[sort])


  // console.log(cat, filters, sort)
  return (
    <div className='grid p-5 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 justify-between items-center m-auto md:gap-y-3 xs:gap-3 flex-wrap'>
      { cat
      ?filteredProducts.map((item:any) => (
        <ProductsItem item={item} key={item._id} />
      ))
      :products
      .slice(0, 8)
      .map((item:any) => (
        <ProductsItem item={item} key={item._id} />
      ))
      }
    </div>
  )
}

export default PopularProducts