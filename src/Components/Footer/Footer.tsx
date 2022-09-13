
import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footerContainer flex justify-between'>
        
        <div className='left footeritem '>left</div>

        <div className='center footeritem'>
            <h1>ESHOP</h1>
        </div>

        <div className="right footeritem">right</div>

    </div>
  )
}

export default Footer