import { useEffect, useState, useRef } from "react";
import './announcement.scss'

function Announcement() {

  const announcementsArray = ["SUPER DEAL! FREE SHIPPING ON ORDERS OVER 50$", "END OF SUMMER! 60% OFF EVERYRTHING", "GET 20% OFF OF EVERYTHING "]
  const annWrapper = document.getElementById('annWrapper')

  const [counter, setCounter] = useState(1)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const annWrapperRef = ref.current


    const intervalId = setInterval(() => {
      annWrapperRef!.style.transform = 'translatex(-33.3%)'

    }, 2000)


    annWrapperRef?.addEventListener('transitionend', () => {

      annWrapperRef!.appendChild(annWrapperRef.firstElementChild!)

      annWrapperRef!.style.transition = 'none'
      annWrapperRef!.style.transform = 'translate(0)'

      setTimeout(() => {
        annWrapperRef!.style.transition = 'all 2s ease'

      },)
    })

    return () => clearInterval(intervalId);


  }, [])







  return (
    <div className="Container / bg-indigo-600 ">
      <div className="anntContainer / "  >
        <div id="annWrapper" ref={ref} className="annWrapper" >
          {announcementsArray.map((ann: string, i: number) => (
            <div className="annItem text-white " key={i}>
              {ann}
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Announcement