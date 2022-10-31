
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.scss'
import { register } from '../../apiCalls'
import { useUserStore } from '../../store'
import axios from 'axios'


const Register = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [notMatching, setNotMatching] = useState(false)
  const loginStatus = useUserStore((state: any) => state.logging.register)
  const [image, setImage] = useState<any>();
  const [preview, setPreview] = useState<any>();


  const match = () => {
    if (password !== password2) {
      setNotMatching(true)
    }
    else if (password === password2) {
      setNotMatching(false)
    }
  }



  useEffect(() => {
    if (image) {

      setPreview(URL.createObjectURL(image))
    }
  }, [image])


  const handleRegister = async (e: any) => {
    e.preventDefault()
    try {
      let imageUrl = "";
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "profileImages");
        const dataRes = await axios.post(
          "https://api.cloudinary.com/v1_1/de8wnrdnn/image/upload",
          formData
        );
        imageUrl = dataRes.data.url;
      }
      console.log("register Running")
      register({ name, lastName, email, password, username, imageUrl })
    }catch(err){
      console.log(err)
    }

  }



  return (
    <div className='registerContainer flex justify-center items-center'>

      <div className="registerWrapper">
        <h1 className='text-2xl font-light tex'>CREATE AN ACCOUNT</h1>
        <form action="/" onSubmit={handleRegister} className='registerForm flex flex-wrap'>
          <div className='flex flex-col justify-center items-center relative w-full my-5 '>
            <img id="blah" src={preview} className='registerImg ' alt="" />
            <input id="imgInp" className={` w-full imgInp  `} type="file" accept='image/*' name="" onChange={(e) => setImage(e.target.files![0])} />
          </div>
          <input type="text" className='m-auto ' placeholder='name' onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder='last name' onChange={(e) => setLastName(e.target.value)} required />
          <input type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} required />
          <input type="email" placeholder='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder='confirm password' onBlur={match} onChange={(e) => setPassword2(e.target.value)} required />
          <div className='flex flex-col w-full'>
            {notMatching &&
              <span className='text-sm font-normal text-red-700 my-2'>password didn't match</span>
            }
            <span className='text-sm my-2' >
              By creating an account, you agree to the <b>PRIVACY POLICY</b>
            </span>

            <Link to={`/login`} className=' tracking-wider underline  text-md mt-2 mb-4 w-fit'>SignIn</Link>
            {!loginStatus && <span className='text-red-700 font-medium text-md mb-2'>Something went wrong...</span>}
            <button type='submit' className='createBtn w-full' >CREATE</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Register