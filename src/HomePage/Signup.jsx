import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
    

function Signup() {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()  
  
    const handlesubmit = async (e) => {
      e.preventDefault()
      try {
        await signUp(email, password);

        navigate('/')

      } catch (error) {
        console.log(error)
      }
  }
  
  return (
    <>
    <div className='w-full h-screen'>
    <img className='hidden sm:block absolute w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/e7ebea24-6fb6-46b0-8f9d-bd2fa49741a2/ET-en-20230130-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
    <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-50">
      <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
        <div className="max-w-[320px] mx-auto py-16">
          <h1 className='text-3xl font-bold'>Sign Up</h1>

          <form onSubmit={handlesubmit} className='w-full flex flex-col py-4'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
            <input
               onChange={(e) => setPassword(e.target.value)}
              className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />

            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign up</button>
            <div className='flex justify-between items-center'>
            <p><input type="checkbox"/>Remember Me</p>
            <p>Need help?</p>
            </div>
            <p className="py-4">
              <span className='text-gray-600'>
              Allrady have an Account
              </span>{' '}
              <Link to='/Login'>Sign in.</Link> 
            </p>
              <p classname='py-4 text-blue'> <span className='text-gray-600'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span></p>
            
            
          </form>

        </div>
    </div>
    </div>
  </div>
</>

  )
}

export default Signup