import React from 'react'
import Announcement from '../Components/Announcement/Announcement'
import NavBar from '../Components/NavBar/NavBar'
import Slider from '../Components/Slider/Slider'

const Home = () => {
  return (
    <div className=''>
      <Announcement />
      <NavBar />
      <Slider/>
    </div>
  )
}

export default Home