
import React from 'react'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'



const Categories = () => {
  return (
    <div id='categoriesContainer' className='flex justify-between p-5 md:flex-row xs:flex-col'>
        {categories.map((item) => (
            <CategoryItem item = {item} key = {item.id} />
        ))}
    </div>
  )
}

export default Categories