
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.scss'
import { register } from '../../apiCalls'
import { useUserStore } from '../../store'


const Register = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [notMatching,setNotMatching] = useState(false)
  const loginStatus = useUserStore((state: any) => state.logging.register)
  const [status, setState] = useState(false)
  const user = useUserStore((state: any) => state.currentUser)

  const match = () => {
    if (password !== password2){
      setNotMatching(true)
    }
    else if(password === password2){
      setNotMatching(false)
    }
  }

  const handleRegister = (e:any) => {
    e.preventDefault();
    register({name, lastName, email, password, username })
    
  }


  return (
    <div className='registerContainer flex justify-center items-center'>

      <div className="registerWrapper">
        <h1 className='text-2xl font-light tex'>CREATE AN ACCOUNT</h1>
        <form action="https://eshop-webproject.herokuapp.com/login" className='registerForm flex flex-wrap'>
          <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='last name' onChange={(e) => setLastName(e.target.value)} />
          <input type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
          <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder='confirm password' onBlur={match} onChange={(e) => setPassword2(e.target.value)} />
          <div className='flex flex-col w-full'>
            {notMatching &&
              <span className='text-sm font-normal text-red-900 my-2'>password didn't match</span>
            }
            <span className='text-sm my-2' >
              By creating an account, you agree to the <b>PRIVACY POLICY</b>
            </span>

            <Link to={`/login`} className=' tracking-wider underline  text-md mt-2 mb-4 w-fit'>SignIn</Link>
            {!loginStatus && <span className='text-red-700 font-medium text-md mb-2'>Something went wrong...</span>}
            <button  className='createBtn w-full' onClick={handleRegister}>CREATE</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Register