import { useEffect, useState } from "react";
import './announcement.scss'

function Announcement() {

  const announcementsArray = ["SUPER DEAL! FREE SHIPPING ON ORDERS OVER 50$", "END OF SUMMER! 60% OFF EVERYRTHING", "GET 20% OFF OF EVERYTHING "]


const [counter, setCounter] = useState(-1)
  const announcementSlider = () => {

    

    if (counter > 0) {
      setCounter(-1)
    }
    else{
      setCounter(counter + 1)
    }

  }

  const transform = {
    transform: `translateX(${counter * -100}vw)`,

  }

  useEffect(() => {
    const intervalId = setInterval(announcementSlider, 3000)
    return () => clearInterval(intervalId);
  },[counter])


  return (
    <div className="announcementContainer w-screen / flex justify-center bg-indigo-600 relative" >
      <div className="announcementWrapper flex relative    " style={transform}>
        {announcementsArray.map((ann: string, i: number) => (
          <div className=" text-center w-screen text-white ">
            <h1>{ann}</h1>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Announcement