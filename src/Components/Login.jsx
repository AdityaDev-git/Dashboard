import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import '../Assets/style.css'


const Login = () => {
    const { loginWithRedirect} = useAuth0();

  return (
    <div className='flex bg-gray-50 w-screen h-screen'>

        {/* left  */}
        <div className='flex flex-col bg-blue-500 flex-1 justify-between p-8 slant'>
            <p className='text-white font-semibold'>LOGO</p>
            <div className='flex justify-center'>
            <h1 className='text-white font-bold text-5xl'>Board.</h1>
            </div>
            <div className='flex justify-center space-x-4'>
                <FaGithub className='text-3xl text-white'/>
                <AiFillTwitterCircle className='text-3xl text-white'/>
                <FaLinkedin className='text-3xl text-white'/>
                <IoLogoDiscord className='text-3xl text-white'/>
            </div>
        </div>

        {/* right  */}
        <div className='flex-1 flex flex-col items-center justify-center'>
            <div className='space-y-3'>
            <h3 className='text-2xl font-semibold'>Sign in</h3>
            <p className='font-medium'>Sign in to your account</p>
            <div className='flex space-x-4'>
            <button className='bg-white p-1 rounded-lg text-sm shadow flex items-center h-8'
            onClick={(e)=> loginWithRedirect()}>
                <FcGoogle className='text-xl'/>
                Sign in with Google
            </button>
            <button className='bg-white p-1 rounded-lg text-sm shadow flex items-center h-8'>
                <IoLogoApple className='text-xl text-gray-400'/>
                <p>Sign in with Apple</p>
            </button>
            </div>
            <div className='bg-white flex flex-col space-y-3 px-6 py-10 rounded-lg shadow'>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" className='bg-gray-200 text-black p-1 rounded-lg'/>
                <label htmlFor="pwd">Password</label>
                <input type="password" className='bg-gray-200 text-black p-1 rounded-lg'/>
                <p className='text-sm text-blue-500 font-medium'>Forgot Password?</p>
                <button className='bg-blue-500 text-white p-2 rounded-lg'>Sign in</button>
            </div>
            </div>
            <p>Dont't have an account? <span className='text-blue-500 font-medium'>Register here</span></p>
        </div>
    </div>
  )
}

export default Login