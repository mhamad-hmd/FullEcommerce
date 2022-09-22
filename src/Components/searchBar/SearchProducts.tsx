
import React from 'react'
import { SearchProducts } from '../../data'
import SearchedProduct from './searchedProduct'



const SearchProducts = () => {
  return (
    <div id='SearchProductsContainer' className='flex justify-between p-5 md:flex-row xs:flex-col'>
        {SearchProducts.map((item) => (
            <SearchProducts
             item = {item} key = {item.id} />
        ))}
    </div>
  )
}

export default SearchProducts