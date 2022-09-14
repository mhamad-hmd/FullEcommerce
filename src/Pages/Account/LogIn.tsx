
import React from 'react'
import './Form.scss'

const LogIn = () => {
  return (
    <div className='loginContainer flex justify-center items-center'>
        
        <div className="loginWrapper">
            <h1 className='text-2xl font-light tex'>SIGN IN</h1>
            <form action="" className='loginForm flex flex-wrap flex-col'>           
                <input type="text" placeholder='username'/>
                <input type="text" placeholder='password'/>
                <button className='createBtn my-5 '>LOG IN</button>
                <a href="" className='my-1 text-sm underline'>FORGOT PASSWORD?</a>
                <a href="" className='my-1 text-sm underline'>CREATE AN ACCOUNT</a>
            </form>
            
        </div>

    </div>
  )
}

export default LogIn