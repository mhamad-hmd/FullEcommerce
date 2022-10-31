import React from 'react'
import ProductsItem from '../../Components/Currentproducts/ProductsItem'
import './favProducts.scss'
import { useStore, useUserStore } from '../../store'

const FavProducts = () => {
  const userLikedProducts = useStore((state: any) => state.userLikedProducts)

  return (
    <div className='favContainer max-w-7xl m-auto my-10 relative'>
      <h1 className='text-5xl text-center font-light my-5 '>Favorite Products</h1>
      <div className='favWrapper   p-5 / grid justify-center items-center   flex-wrap /  md:gap-y-3 xs:gap-3'>
        {userLikedProducts.length? userLikedProducts.map((item: any) => (
          <ProductsItem index={0} item={item} key={item._id} />
        ))
        :
        <h1 className='text-center text-2xl absolute w-full m-auto'>You Have Not Liked Any Product Yet!!</h1> 
          

        }
      </div>
    </div>
  )
}

export default FavProducts