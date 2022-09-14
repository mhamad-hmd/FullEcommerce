
import React from 'react'
import './Form.scss'

const Register = () => {
  return (
    <div className='registerContainer flex justify-center items-center'>
        
        <div className="registerWrapper">
            <h1 className='text-2xl font-light tex'>CREATE AN ACCOUNT</h1>
            <form action="" className='registerForm flex flex-wrap'>
                <input type="text" placeholder='name' />
                <input type="text" placeholder='last name'/>
                <input type="text" placeholder='username'/>
                <input type="text" placeholder='email'/>
                <input type="text" placeholder='password'/>
                <input type="text" placeholder='confirm password'/>
                <span className='text-sm my-5'>
                By creating an account, you agree to the <b>PRIVACY POLICY</b>
                </span>
            <button className='createBtn '>CREATE</button>
            </form>
            
        </div>

    </div>
  )
}

export default Register