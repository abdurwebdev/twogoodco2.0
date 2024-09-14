import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const Donate = () => {


  return (
    <>
      <Helmet>
        <title>Donate | Two Good Co</title>
      </Helmet>
      <main className='w-full px-3 transition-all duration-1000 ease-in-out min-h-screen   bg-black relative lg:h-[150vh]  flex flex-col  lg:flex-row  text-white space-y-5'>
        <div className='absolute flex items-center justify-center  top-5 z-50 text-black left-10 w-28 h-28 bg-white rounded-full'>
          <Link to='/'>Home</Link>
        </div>
        <div className='flex flex-col lg:absolute lg:right-0 gap-y-5 lg:order-2 lg:w-96'>

          <div>
            <h1 className='font-bold text-[5vw] lg:leading-[2vw] lg:mt-32 lg:text-[2vw] mr-3 mt-20 tracking-tighter leading-[4vw]'>Two Good Foundation. You are helping to change the course of a woman's life for good.</h1>
          </div>
          <div className='flex gap-x-0 items-center justify-center'>
            <button className='rounded-tl-full rounded-bl-full border-2 border-white border-t border-b border-r px-3 py-3 bg-white text-black '><h1 className='font-light'>One-Time</h1></button>
            <button className='  border-2 border-white border-t border-b border-r px-3 py-3 '><h1>Weekly</h1></button>
            <button className='rounded-r-full  border-2 border-white border-t border-l-0 border-b border-r px-3 py-3 '><h1>Monthly</h1></button>
          </div>
          <div className='flex gap-x-3 gap-y-3 flex-wrap'>
            <button className='px-10 py-3 rounded-full bg-white text-black border border-slate-400'>$3</button>
            <button className='px-10 py-3 rounded-full border border-slate-400'>$3</button>
            <button className='px-10 py-3 rounded-full border border-slate-400'>$6</button>
            <button className='px-10 py-3 rounded-full border border-slate-400'>$16</button>
            <button className='px-10 py-3 rounded-full border border-slate-400'>$32</button>
            <button className='px-10 py-3 rounded-full border border-slate-400'>$63</button>
            <button className='px-10 py-3 rounded-full border border-slate-400'>$127</button>
          </div>
          <div>
            <input type="text" placeholder='$' className='w-full rounded-full border-2 placeholder:text-white placeholder:text-xl text-white  px-3 py-3 border-white bg-transparent' />
          </div>
          <div>
            <p>DONATION TO TWO GOOD CO ARE TAX DEDUCTIBLE</p>
          </div>
        </div>
        <div className='grid grid-cols-3 text-white  lg:absolute lg:order-1 bottom-0 mb-5 lg:mt-96 '>
          <div className='flex text-white flex-col gap-y-1'>
            <h2 className='mb-2 text-xs text-slate-400'>CONNECT WITH US</h2>
            <h2 className='text-white'>Facebook</h2>
            <h2 className='text-white'>Instagram</h2>
            <h2 className='text-white'>Twitter</h2>
            <h2 className='text-white'>Linkedin</h2>
            <h2 className='text-white'>Youtube</h2>
          </div>
          <div className='flex flex-col  gap-y-1 space-x-3'>
            <h2 className='mb-2 text-xs text-slate-400'>CNITTY GRITTIES</h2>
            <h2 className='text-white'>Good Things FAQs</h2>
            <h2 className='text-white'>Good Food FAQs</h2>
            <h2 className='text-white'>Good Places</h2>
          </div>
          <div className='flex flex-col ml-3 gap-y-1'>
            <h2 className='mb-2 text-xs text-slate-400'>GETTING STARTED</h2>
            <h2 className='text-white'>Pathways</h2>
            <h2 className='text-white'>Carreers</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default Donate