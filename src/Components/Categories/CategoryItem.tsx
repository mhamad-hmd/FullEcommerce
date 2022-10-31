
import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../store'
import './categoryItem.scss'

type item = {
  cat: string,
  title: string,
  id: number,
  img: string,
}

const CategoryItem = ({ item }: { item: item }) => {
  const setCategory = useStore((state: any) => state.setCategory)
  const setSearchTag = useStore((state: any) => state.setSearchTag)

  return (
    <div className='categoryItemContainer relative flex-1 m-1' >
      <Link to={`/products/${item.cat}`} onClick={() => {
        setCategory(item.cat)
        setSearchTag("")
        }}>

        <img className=' categoryImg / w-full md:h-full  object-cover ' src={item.img} alt="" />

        <div className='categoryInfo / flex flex-col justify-center items-center / top-0 left-0 w-full h-full /   absolute bg-zinc-700/20 '>
          <h1 className='text-white mb-5 font-bold text-2xl'>{item.title}</h1>
          <button className='bg-white text-gray-700 font-medium p-2'>SHOP NOW</button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem