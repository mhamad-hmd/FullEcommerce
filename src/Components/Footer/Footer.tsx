
import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footerContainer flex justify-between'>

      <div className='left footeritem flex flex-col p-5 '>

        <h1 className='text-6xl font-bold '>ESHOP</h1>
        <p className='my-5 font-medium text-lg'> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>

        <div className="socialContainer flex">

          <div className="socialIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='w-6 h-6 fill-current'>
              <radialGradient id="a" cx="13.286131%" cy="100.4724%" r="130.546822%">
                <stop offset=".09" stop-color="#fa8f21" />
                <stop offset=".78" stop-color="#d82d7e" />
              </radialGradient>
              <path d="m5.33397336 8c0-1.472704 1.19358374-2.66688 2.66634665-2.66688s2.66698669 1.194176 2.66698669 2.66688-1.19422378 2.66688-2.66698669 2.66688-2.66634665-1.194176-2.66634665-2.66688m-1.44172167 0c0 2.2688 1.83917757 4.107904 4.10806832 4.107904 2.26889079 0 4.10806829-1.839104 4.10806829-4.107904s-1.8391775-4.107904-4.10806829-4.107904c-2.26889075 0-4.10806832 1.839104-4.10806832 4.107904m7.41872871-4.270784c-.000212.5301933.4294399.96017178.9596544.96038385.5302145.00021206.9602102-.4294226.9604223-.9596159s-.4294397-.96017183-.9596542-.96038395h-.0003841c-.5299623.00024699-.9595793.42967504-.9600384.959616m-6.54278967 10.782592c-.7799992-.03552-1.20395216-.16544-1.48569143-.2752-.37351894-.145408-.6400256-.318592-.92022881-.5984s-.45365015-.546048-.59842394-.919552c-.10982839-.2816-.23975359-.705664-.275211-1.485632-.03878556-.843264-.04652987-1.096576-.04652987-3.23296s.00838434-2.388992.04652987-3.23296c.03552142-.779968.16640665-1.2032.275211-1.485632.14541382-.373504.31860475-.64.59842394-.920192s.54606984-.453632.92022881-.5984c.28161126-.109824.70569223-.239744 1.48569143-.2752.84329773-.038784 1.09661986-.046528 3.23212928-.046528 2.13550939 0 2.38908759.008384 3.23308929.046528.7799992.03552 1.2032482.1664 1.4856915.2752.3735189.144768.6400256.318592.9202288.5984s.4530101.546688.5984239.920192c.1098284.2816.2397536.705664.275211 1.485632.0387856.843968.0465299 1.096576.0465299 3.23296s-.0077443 2.388992-.0465299 3.23296c-.0355214.779968-.1660866 1.203904-.275211 1.485632-.1454138.373504-.3186047.64-.5984239.919552s-.5467099.452992-.9202288.5984c-.2816113.109824-.7056923.239744-1.4856915.2752-.8432977.038784-1.0966198.046528-3.23308929.046528-2.13646946 0-2.38908756-.007744-3.23212928-.046528m-.06624265-14.46336c-.85168207.038784-1.43365735.173824-1.94190168.371584-.52635705.204224-.97194288.478208-1.41720869.922752s-.71855674.890816-.92278891 1.417152c-.19776791.508544-.33281331 1.090176-.37159886 1.941824-.03942558.852992-.04844994 1.125696-.04844994 3.29824s.00902436 2.445248.04844994 3.29824c.03878555.851712.17383095 1.43328.37159886 1.941824.20423217.526016.47758711.9728.92278891 1.417152.44520181.444352.89085164.717952 1.41720869.922752.50920437.19776 1.09021961.3328 1.94190168.371584.85347414.038784 1.12574103.048448 3.29837193.048448 2.17263089 0 2.44534579-.009024 3.29837189-.048448.8517461-.038784 1.4333374-.173824 1.9419017-.371584.5260371-.2048.9719429-.478208 1.4172087-.922752s.7179807-.891136.9227889-1.417152c.1977679-.508544.3334534-1.090176.3715989-1.941824.0387855-.853632.0478099-1.125696.0478099-3.29824s-.0090244-2.445248-.0478099-3.29824c-.0387856-.851712-.173831-1.4336-.3715989-1.941824-.2048082-.526016-.4782271-.971904-.9227889-1.417152s-.8911716-.718528-1.4165687-.922752c-.5092043-.19776-1.0908596-.33344-1.9419016-.371584-.8530261-.038784-1.1257411-.048448-3.29837196-.048448-2.17263091 0-2.44553782.009024-3.29901196.048448" fill="url(#a)" />
            </svg>
          </div>


          <div className="socialIcon">
            <svg
              className="w-6 h-6 text-blue-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </div>

          <div className="socialIcon">
            <svg
              className="w-6 h-6 text-blue-300 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </div>

        </div>

      </div>

      <div className='center footeritem'>

        <h3 className='text-2xl font-bold mb-8'>Usefull Links</h3>

        <ul className='centerUl flex flex-wrap m-0 p-0 '>

          <li>Home</li>
          <li>Cart</li>
          <li>Man Shirts</li>
          <li>Man Suits</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>WishList</li>
          <li>Terms</li>

        </ul>

      </div>


      <div className="right footeritem">

        <h3 className='text-2xl font-bold mb-8 '>Contact</h3>
      
        <div className='flex gap-1 my-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>Location
        </div>

        <div className='flex gap-1 my-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>

          Phone number</div>

        <img className='w-4/12 my-4 ' src="https://www.transparentpng.com/thumb/payment-method/aN9nfk-payment-method-background.png" alt="" />

      </div>

    </div>
  )
}

export default Footer