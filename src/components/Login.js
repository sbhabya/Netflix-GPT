import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  };

  return (
    <div>
      <Header/>
      <form className='w-3/12 absolute p-8 bg-zinc-600 my-36 mx-auto right-0 left-0 text-white bg-opacity-65'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>)}
        <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/>
        <input type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
        <button className='p-2 my-2 bg-red-700 w-full'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Netflix? Sign Up Now': 'Already registered? Sign In Now'}
        </p>
      </form>
    </div>
  )
}

export default Login