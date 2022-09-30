
import { error } from 'console'
import { object } from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../apiCalls'
import { useUserStore } from '../../store'
import './Form.scss'

const LogIn = () => {

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const loginStatus = useUserStore((state: any) => state.logging.loginSuccess)

  const handleClick = (e: any) => {
    e.preventDefault();
    login({ username, password })

  };




  return (
    <div className='loginContainer flex justify-center items-center'>

      <div className="loginWrapper">
        <h1 className='text-2xl font-light tex'>SIGN IN</h1>
        <form action="" className='loginForm flex flex-wrap flex-col'>
          <input type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
          <input type='password' placeholder='password'  onChange={(e) => setPassword(e.target.value)} />
          <a href="" className='my-1 text-sm underline'>FORGOT PASSWORD?</a>
          <button className='createBtn my-3 ' onClick={handleClick} >LOG IN</button>
          {!loginStatus && <span className='text-red-700 font-medium text-md'>Something went wrong...</span>}
          <Link to={"/register"} className='my-1 text-sm underline'>CREATE AN ACCOUNT</Link>
          <Link to={`/`} className=' underline  text-sm my-1'>GUEST?</Link>

        </form>

      </div>

    </div>
  )
}

export default LogIn