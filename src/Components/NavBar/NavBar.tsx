import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../store'
import './NavBar.scss'


const Navbar = () => {
  const cart = useStore((state: any) => state.cart)
  console.log(cart)


  return (
    <div className='navContainer flex-wrap md:px-8 xs:px-4 mt-4 text-black'>

      <div className='navItemsStart flex gap-3    '>

        <span className='md:block xs:hidden'>ENG</span>

        <div className=' inputWrapper  items-start p-1  flex   '>

          <input type="text" className='searchBar outline-0' placeholder='Search' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>


        </div>
      </div>
      <Link to={`/`}>
        <div className='navItemsCenter navTitle / text-center md:text-5xl font-bold xs:text-2xl / m-auto '>ESHOP</div>
      </Link>

      <div className='navEnd  navItemsRight / flex  md:justify-end  xs:justify-center items-center gap-2 / '>

        <h1>REGISTER</h1>

        <h1>SIGNIN</h1>

        <div className="font-sans block md:mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
          <Link to={`/cart`}>

            <a href="#" role="button" className="relative flex">
              <svg className="flex-1 w-8 h-8  fill-current " viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4  top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cart.cartQuantity > 0 ? cart.cartQuantity : 0}
              </span>
            </a>
          </Link>
        </div >

      </div>

    </div>
  )
}

export default Navbar

