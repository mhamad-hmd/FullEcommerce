
import React from 'react'
import './ProductPage.scss'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/NavBar/NavBar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'

const ProductPage = () => {
    return (
        <div className='ProductPageContainer'>

            <Navbar />
            <Announcement />

            <div className="productWrapper / md:p-10 xs:p-2 / flex md:flex-row xs:flex-col /">

                <div className="imgContainer flex-1">
                    <img className='productImg ' src="https://www.freeiconspng.com/uploads/men-suit-png-19.png" alt="" />
                </div>

                <div className="ProductinfoContainer / flex-1 / md:px-10 xs:p-2">
                    <h1 className='font-extralight text-4xl'>PINSTRIPE SUIT</h1>
                    <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde omnis ex laborum necessitatibus
                        totam? Beatae nulla voluptatem hic. Reprehenderit sed nam repellat cupiditate laborum est
                        distinctio magnam quo voluptatibus! A!
                    </p>
                    <span className='font-thin text-4xl'>40$</span>


                    <div className="filterContainer flex justify-between ">

                        <div className="filter flex justify-center items-center gap-2">
                            <span className="filterTitle font-extralight text-xl">Color</span>
                            <div className="filterColor bg-black" color='Black' ></div>
                            <div className="filterColor bg-gray-700" color='gray'></div>
                            <div className="filterColor bg-blue-900" color='Navy'></div>


                        </div>

                        <div className="filter / flex">
                            <span className="filterTitle font-extralight text-xl">Size</span>
                            <select name="" id="" className="filterSize ml-2 p-1 outline-none">
                                <option value="">SM</option>
                                <option value="">MD</option>
                                <option value="">LG</option>
                            </select>
                        </div>

                    </div>
                    <div className="addContainer flex justify-between items-center">

                        <div className="amountContainer flex items-center gap-2 font-bold  ">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>

                            <span className='amount text-lg flex justify-center items-center mx-1 '>1</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>


                        </div>
                        <button className='addToCartBtn'>ADD TO CART</button>

                    </div>
                </div>
            </div>

            <NewsLetter />
            <Footer />

        </div>
    )
}

export default ProductPage