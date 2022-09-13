
import React from 'react'
import './newsLetter.scss'

const NewsLetter = () => {
    return (
        <div className='NewsLetterContainer flex justify-center items-center flex-col'>
            <h1 className='text-7xl m-4 font-medium'>NewsLetter</h1>
            <p className='text-2xl  font-normal mb-5'>Get timely updates from your favorite products</p>

            <div className='inputContainer border  flex items-center justify-between'>
                <input className='flex-1 pl-5 outline-none' type="email" placeholder='your email' />
                <button className='h-full px-2 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1} stroke="currentColor" className="w-7 h-7 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default NewsLetter