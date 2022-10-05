import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore, useUserStore } from '../../store'
import './NavBar.scss'


const Navbar = () => {

  const user = useUserStore((state: any) => state.currentUser)
  const signedIn = Object.keys(user).length === 0;
  const [searchBarSwitch, setSearchBarSwitch] = useState(1)
  const setSearchInputs = useStore((state: any) => state.setSearchInputs)
  const cart = useStore((state: any) => state.cart)
  const searchInputs = useStore((state: any) => state.searchInputs)

  const handleAccount = () => {
    document.getElementById('accountOptions')?.classList.add('active')
  }

  useEffect(() => {
    if (searchBarSwitch % 2 === 0) {
      document.getElementById('xsSearchBarContainer')?.classList.add('activateSearchBar')
      document.getElementById('blackPage')?.classList.add('ActivateBlackPage')
      document.body.style.position = 'fixed';
    }
    else {
      document.getElementById('xsSearchBarContainer')?.classList.remove('activateSearchBar')
      document.getElementById('blackPage')?.classList.remove('ActivateBlackPage')
      document.body.style.position = 'static';
    }

  }, [searchBarSwitch])



  return (
    <div className='navContainer relative'>
      <div id='xsSearchBarContainer' className='xsSearchBarContainer / bg-slate-100 px-2 xs:grid md:hidden'>

        <form className='flex gap-2' action={`/find/${searchInputs}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <input type="text" className='xsSearchBar  outline-0' placeholder='Search' onChange={(e) => setSearchInputs(e.target.value)} />
        </form>


      </div>

      <div id='blackPage' onClick={() => setSearchBarSwitch(searchBarSwitch + 1)} className='blackPage'></div>


      <div className='navWrapper / flex justify-around items-center flex-wrap / md:px-8 xs:px-4 h-full  text-black relative'>

        <div className='navItemsStart flex gap-3  '>

          <div className="lgScreenSearch / md:flex xs:hidden gap-2">


            <form action={`/find/${searchInputs}`}>

              <div className=' inputWrapper  items-start md:p-1 xs:px-1  flex   '>

                <input type="text" className='searchBar outline-0' placeholder='Search' onChange={(e) => setSearchInputs(e.target.value)} />

                <button >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 xs:w-5 xs:h-5  m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>

              </div>

            </form>

          </div>

          <div className="xsScreenSearch / xs:flex align-center / m-auto / relative md:hidden">


            <button onClick={() => setSearchBarSwitch(searchBarSwitch + 1)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>




          </div>


        </div>


        <Link className='px-2 m-auto  ' to={`/`}>
          <div className='navItemsCenter navTitle / text-center md:text-5xl font-bold xs:text-4xl / m-auto '>ESHOP</div>
        </Link>

        <div className='navEnd  navItemsRight / flex  md:justify-end  xs:justify-center items-center gap-2 / '>
          <div className='relative  justify-center items-center'>
            <div className=' grid accountIcon '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={handleAccount} className=" md:w-9 md:h-9 xs:w-9 xs:h-9  m-auto">
                <path strokeLinecap="round" className='' strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>

              <div id='' className='accountOptions / grid  justify-center m-auto gap-x-2  /py-1   '>
                {signedIn ?
                  <><Link className='accOption bg-gray-900/60 ' to={`/register`}>
                    <h1 className='font-normal tracking-wide text-white text-md p-1 '>Register</h1>
                  </Link><Link className='accOption bg-gray-900/60' to={`/login`}>
                      <h1 className='font-normal tracking-wide text-white text-md p-1'>Signin</h1>
                    </Link></>
                  :
                  <>
                    <Link className='accOption bg-gray-900/60' to={`/login`}>
                      <h1 className='font-normal tracking-wide text-white text-md p-1' onClick={() => { useUserStore.setState({ currentUser: {}, likedProducts: [] }) }}>SignOut</h1>
                    </Link><Link className='accOption bg-gray-900/60' to={`/login`}>
                      <div className='font-normal tracking-wide text-center text-white text-md p-1' onClick={() => { useUserStore.setState({ currentUser: {}, likedProducts: [] }) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-auto w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                      </div>
                    </Link>
                  </>

                }
              </div>
            </div>
          </div>
          <div className="font-sans block lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
            <Link to={`/cart`}>

              <button role="button" className="relative flex">
                <svg className="flex-1 w-8 h-8  fill-current " viewBox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute  right-0 top-0 rounded-full bg-red-600  h-4 w-4  top right p-0 m-0 text-white font-mono xs:text-xs md:text-sm  leading-tight text-center">
                  {cart.cartProducts.length}
                </span>
              </button>
            </Link>
          </div >

        </div>

      </div>
    </div >
  )
}

export default Navbar

