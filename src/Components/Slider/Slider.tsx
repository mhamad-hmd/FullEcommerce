
import React, { useState } from 'react'
import './slider.scss'
import suit from '../../Assets/suit.png'
import { sliderItems } from '../../data'
import { keys } from '@mui/system'


const Slider = () => {

    const slideContainer = document.getElementById('slideContainer');

    const [slideIndex, setSlideIndex] = useState(0)
    

    const handleClick = (direction: string) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0? slideIndex - 1 : 2 )

        } else{
            setSlideIndex(slideIndex < 2? slideIndex + 1 : 0)

        }
     };

     const transform = {
        transform: `translateX(${slideIndex * -100}vw)`,
        
    }

    return (
        <div id='sliderContainer' className='h-screen w-full flex  md:flex xs:hidden '>

            <div id='Arrow' className='left flex justify-center items-center ' onClick={() => handleClick('left')} >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </div>

            <div id='slideContainer' className='slideContainer flex ' style={transform}  >
                {sliderItems.map((item) => (
                    <div className={`slideWrapper flex items-center h-screen w-screen ${item.bg}` } key={item.id} >

                    <div className='imgContainer '>
                        <img className='slideImg' src={item.img} alt="" />
                    </div>

                    <div className='infoWrapper'>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <button>SHOW NOW</button>
                    </div>

                </div>
                ))}
                

            </div>



            <div id='Arrow' className='right flex justify-center items-center ' onClick={() => handleClick('right')}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>

            </div>


        </div>
    )
}

export default Slider