
import React from 'react'
import { Popularproducts } from '../../data'
import ProductsItem from './ProductsItem'


const PopularProducts = () => {
  return (
    <div className='grid p-5 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 justify-between items-center m-auto md:gap-y-3 xs:gap-3 flex-wrap'>
        {Popularproducts.map((item) => (
            <ProductsItem item={item}/>
        ))}
    </div>
  )
}

export default PopularProducts