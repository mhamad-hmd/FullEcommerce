
import React from 'react'
import './categoryItem.scss'

type item = {
  title: string,
  id: number,
  img: string,
}

const CategoryItem = ({ item }: { item: item }) => {
  return (
    <div className='categoryItemContainer relative flex-1 m-1' >

      <img className=' categoryImg / w-full md:h-full  object-cover ' src={item.img} alt="" />

      <div className='categoryInfo / flex flex-col justify-center items-center / top-0 left-0 w-full h-full /   absolute bg-zinc-700/20 '>
        <h1 className='text-white mb-5 font-bold text-2xl'>{item.title}</h1>
        <button className='bg-white text-gray-700 font-medium p-2'>SHOP NOW</button>
      </div>

    </div>
  )
}

export default CategoryItem