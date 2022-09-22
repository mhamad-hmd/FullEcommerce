import React from 'react'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import { useStore } from '../../store'

const SearchedProducts = () => {


  const searchInputs = useStore ((state:any) => state.searchInputs)

  return (
    <div>
      <PopularProducts tag={searchInputs} />
    </div>
  )
}

export default SearchedProducts