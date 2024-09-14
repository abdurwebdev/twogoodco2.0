import React from 'react'
import { Helmet } from 'react-helmet-async'
const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>SignIn | Two Good Co</title>
      </Helmet>
      <section className='w-full px-3 flex-col mt-14 flex items-center justify-center'>
        <div className='flex flex-col space-y-3'>
          <h1 className='text-[8vw] font-bold tracking-tighter '>SIGN IN</h1>
        </div>
        <div className='mt-10 flex-col gap-y-3 flex w-[50%]'>
          <input type="text" placeholder='Email Address' className='rounded-full px-3 py-3 w-full text-white bg-black' />
          <input type="text" placeholder='Password' className='rounded-full px-3 py-3 w-full text-white bg-black' />
          <button className='w-full rounded-full text-white bg-black py-3'>SIGN IN</button>
        </div>
      </section>
    </>
  )
}

export default SignIn