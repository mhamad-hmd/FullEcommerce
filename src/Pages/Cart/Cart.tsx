
import React from 'react'
import './cart.scss'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/NavBar/NavBar'
import suit from './../../Assets/suit.png'
import { useStore } from '../../store'

const Cart = () => {





  return (
    <div className='cartContainer'>
      <Navbar />
      <Announcement />
      <div className="cartWrapper / md:p-5 xs:p-2 ">
        <h1 className='font-light text-center text-4xl'>YOUR SUIT</h1>
        <div className="top / flex items-center justify-between">
          <button className="topBtn p-2 font-semibold border-2 border-black ">CONTINUE SHOPPING</button>

          <div className="topText / md:block  xs:hidden p-5">
            <span className='underline mx-5 '>Shopping Bag(2)</span>
            <span className='underline mx-5'>Your Wishlist(0)</span>
          </div>

          <button className="topBtn p-2 font-semibold border-2 border-black  bg-black text-white">CHECKOUT NOW</button>

        </div>

        <div className="bottom / flex md:flex-row xs:flex-col justify-between">
          <div className="info ">

            <div className="product / flex md:flex-row xs:flex-col  justify-between">
              <div className="productDetails flex">
                <img className='productImg' src="https://www.freeiconspng.com/uploads/black-man-in-suit-png-2.png" alt="" />
                <div className="details flex flex-col p-5 justify-around">
                  <span className="productName"><b>Product:</b> Black Suit</span>
                  <span className="productId"><b>ID:</b> 1234567</span>
                  <span className="productColor rounded-full w-5 h-5 bg-black"></span>
                  <span className="productSize"><b>Size:</b> MD</span>
                </div>
              </div>
              <div className="priceDetail flex justify-center items-center flex-col">
                
                <div className="productAmountContainer flex items-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>

                  <span className='amount / text-xl  / flex justify-center items-center / md:m-1 xs:my-1 xs:mx-3  '>1</span>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="productPrice text-2xl font-light md:mb-0 xs:mb-5">$400</span>
              </div>
            </div>

    <hr className='bg-white  ' />

            <div className="product / flex md:flex-row xs:flex-col  justify-between">
              <div className="productDetails flex">
                <img className='productImg' src="https://www.freeiconspng.com/uploads/men-suit-png-19.png" alt="" />
                <div className="details flex flex-col p-5 justify-around">
                  <span className="productName"><b>Product:</b> gray Suit</span>
                  <span className="productId"><b>ID:</b> 1234567</span>
                  <span className="productColor rounded-full w-5 h-5 bg-gray-700"></span>
                  <span className="productSize"><b>Size:</b> MD</span>
                </div>
              </div>
              <div className="priceDetail flex justify-center items-center flex-col">
                
                <div className="productAmountContainer  flex items-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>

                  <span className='amount text-xl flex justify-center items-center mx-1 text-xl m-1 '>1</span>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="productPrice / text-2xl font-light md:mb-0 xs:mb-5 ">$400</span>
              </div>
            </div>


          </div>
          <div className="summary  ">
            <h1>ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">  400$</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Estimated shipping</span>
              <span className="summaryItemPrice"> 30$</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping discount</span>
              <span className="summaryItemPrice"> -6$</span>
            </div>
            <div className="summaryItem font-medium text-2xl">
              <span className="summaryItemText ">Total</span>
              <span className="summaryItemPrice"> 400$</span>
            </div>
            <button className="summaryBtn w-full p-2 bg-black text-white font-semibold">CHECKOUT NOW</button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Cart