
import React, {useState} from 'react'
import { login } from '../../apiCalls'
import './Form.scss'

const LogIn = () => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")


const handleClick = (e:any) => {
  e.preventDefault();
  console.log(userName);
  login({userName, password})
  console.log(password);

};


  return (
    <div className='loginContainer flex justify-center items-center'>
        
        <div className="loginWrapper">
            <h1 className='text-2xl font-light tex'>SIGN IN</h1>
            <form action="" className='loginForm flex flex-wrap flex-col'>           
                <input type="text" placeholder='username' onChange={(e) => setUserName(e.target.value) }/>
                <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value) }/>
                <button className='createBtn my-5 ' onClick={handleClick} >LOG IN</button>
                <a href="" className='my-1 text-sm underline'>FORGOT PASSWORD?</a>
                <a href="" className='my-1 text-sm underline'>CREATE AN ACCOUNT</a>
            </form>
            
        </div>

    </div>
  )
}

export default LogIn