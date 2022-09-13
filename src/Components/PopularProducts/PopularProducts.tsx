
import React from 'react'
import { Popularproducts } from '../../data'
import ProductsItem from './ProductsItem'


const PopularProducts = () => {
  return (
    <div className='flex p-5 flex-wrap justify-between'>
        {Popularproducts.map((item) => (
            <ProductsItem item={item}/>
        ))}
    </div>
  )
}

export default PopularProducts