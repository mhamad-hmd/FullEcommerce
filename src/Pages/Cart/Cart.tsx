
import React, { useEffect, useState } from 'react'
import './cart.scss'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/NavBar/NavBar'
import suit from './../../Assets/suit.png'
import { useStore } from '../../store'
import { userRequest } from '../../requestMethods'
import { Link, useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import { object } from 'prop-types'
import ProductsItem from '../../Components/PopularProducts/ProductsItem'


const Cart = () => {

  type product = {
    img: string,
    title: String,
    desc: String,
    size: String,
    color: string,
    price: number,
    _id: string,
    quantity: number

  }

  const cart = useStore((state: any) => state.cart)
  const setCart = useStore((state: any) => state.setCart)
  const [totlaPrice, setTotalPrice] = useState(Number)
  const key = "pk_test_51LiXEUCi2H6UWiwRM9OnQLR5tU9BWmomZmVy9p1cJrCRT8WpZ9SqWC5m1yiQhcSMHVhHERODmKVukrDIVbIMSw6C006NTJ7OLb"

  const [stripeToken, setStripeToken] = useState(Object);
  const navigate = useNavigate()
  const addQuantity = useStore((state: any) => state.addQuantity)
  const subtractQuantity = useStore((state: any) => state.subtractQuantity)
  const setQuantity = useStore((state: any) => state.setQuantity)

  const quantity = useStore((state: any) => state.quantity)

  const setCartProductsQuantity = useStore((state: any) => state.setCartProductsQuantity)
  const setCartTotalPrice = useStore((state: any) => state.setCartTotalPrice)


  const onToken = (token: any) => {
    setStripeToken(token)
  }
  type productQuan = {
    quantity: Number,

  }


  console.log(quantity)

  const handleClick = async (type: string, productTitle: String, index: number, productQuantity: number) => {

    document.getElementById(`confirmBtn${index}`)!.style.display = "block"
    if (type === 'desc') {
      quantity > 1 && subtractQuantity(productQuantity);

    } else {
      addQuantity(productQuantity)

    }
    setCartProductsQuantity(productTitle)

  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 500 * 100,
          },

        );
        navigate("/success")
      } catch (err) { console.log(err) }
    }
    stripeToken && makeRequest()
  }, [stripeToken, cart.totalPrice, navigate])


  const confirmChange = (productPrice: number, productTitle: String, index: number) => {
    document.getElementById(`confirmBtn${index}`)!.style.display = "none"

    setCartTotalPrice()

    setQuantity(1)
  }

  return (
    <div className='cartContainer'>
      <Navbar />
      <Announcement />
      <div className="cartWrapper / md:p-5 xs:p-2 ">
        <h1 className='font-light text-center text-4xl'>YOUR CART </h1>
        <div className="top / flex items-center justify-between">

          <Link to={"/"}>
            <button className="topBtn p-2 font-semibold border-2 border-black ">CONTINUE SHOPPING</button>
          </Link>
          <div className="topText / md:block  xs:hidden p-5">
            <span className='underline mx-5 '>Shopping Bag({cart.cartQuantity})</span>
            <span className='underline mx-5'>Your Wishlist(0)</span>
          </div>

          <button className="topBtn p-2 font-semibold border-2 border-black  bg-black text-white">CHECKOUT NOW</button>

        </div>

        <div className="bottom / flex md:flex-row xs:flex-col justify-between">
          <div className="info ">
            {cart.products.map((product: product, index: number) => (

              <div key={index} className="product / flex md:flex-row xs:flex-col  justify-between">
                <div className="productDetails flex">
                  <img className='productImg' src={product.img} alt="" />
                  <div className="details flex flex-col p-5 justify-around">
                    <span className="productName"><b>Product:</b> {product.title}</span>
                    <span className="productId"><b>ID:</b> {product._id}</span>
                    <span style={{ background: product.color }} className="productColor rounded-full w-5 h-5"></span>
                    <span className="productSize"><b>Size:</b> {product.size}</span>
                  </div>
                </div>
                <div className="priceDetail flex justify-center items-center flex-col">

                  <div className="productAmountContainer flex text-center items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { handleClick("desc", product.title, index, product.quantity) }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>

                    <span className='amount / text-xl  / flex justify-center items-center / md:m-1 xs:my-1 xs:mx-3  '>{product.quantity}</span>

                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { handleClick("asc", product.title, index, product.quantity) }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>

                  <button id={`confirmBtn${index}`} className={`border bg-teal-700 font-light tracking-wide p-1 text-white hidden `} onClick={() => confirmChange(product.quantity * product.price, product.title, index)}>Confirm</button>
                  <span className="productPrice text-2xl font-light md:mb-0 xs:mb-5">${product.price * product.quantity}</span>
                </div>
              </div>))}

          </div>

          <div className="summary  ">
            <h1>ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">  {cart.totalPrice}$</span>
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
            <div>
              <StripeCheckout
                name="ESHOP"
                token={onToken}
                billingAddress
                shippingAddress
                description='Your total is 20$'
                amount={2000}
                stripeKey={key}
              />
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Cart