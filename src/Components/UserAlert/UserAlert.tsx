import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../store'
import './UserAlert.scss'

const UserAlert = () => {
    const alertSwitch = useStore((state) => state.alertSwitch)
    const setAlertSwitch = useStore((state) => state.setAlertSwitch)
   




    return (
        <div className={`UserAlertContainer ${alertSwitch? 'block' : 'hidden'}`} >
            <div className='relative w-full h-full / flex justify-center items-center'>
                <div className="alertCard flex flex-col absolute justify-evenly text-center ">
                    <p>You Have To Be Signed In To use This Feature</p>
                    <div className='flex gap-5 '>
                        <Link className='cardbtn' to={"/login"} onClick={() => {setAlertSwitch(false)}}>
                        <button className=''>SignIn</button>
                        </Link>
                        <Link className='cardbtn' to={'/register'} onClick={() => {setAlertSwitch(false)}}>
                        <button >Register</button>
                        </Link>
                    </div>
                    <svg onClick={() => {setAlertSwitch(false)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cardCancel w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
                <div className="cardBlocker"></div>
            </div>
        </div>
    )
}

export default UserAlert