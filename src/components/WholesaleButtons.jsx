import React from 'react'

const WholesaleButtons = () => {
  return (
    <section className='w-full min-h-screen px-3 flex flex-col items-center justify-center'>
      <div className='border-b border-black w-full mt-5'></div>
      <div className='flex mt-5 items-center justify-between w-full'>
        <h6>BUY SOAP,</h6>
        <h6>GIVE HOPE.</h6>
      </div>
      <div className='mt-20 flex flex-col'>
        <h1 className='text-[6vw] mt-5 text-center font-extrabold tracking-tighter leading-[5vw]'>BROWSE TWO GOOD'S WHOLESALE SOAPS TODAY.</h1>
        <h1 className='text-[3vw] mt-5 text-center font-extrabold tracking-tighter leading-[5vw]'>PURCHASING SMALL VOLUMES?</h1>
        <p className='text-center'>If you're enquiring to order soap in volumes of less than 5 litres, please purchase directly from our shopfront.</p>
      </div>
      <div className='flex mt-10 flex-col items-center gap-y-5 justify-center'>
        <button className='bg-black font-bold rounded-full text-white px-5 py-3'><h1>BROWSE SOAPS FAQs</h1></button>
        <button className='bg-black font-bold rounded-full text-white px-3 py-3'><h1>REQUEST A WHOLESALE SOAPS BROCHURE</h1></button>
        <button className='bg-black font-bold rounded-full text-white px-10 py-3'><h1>LOGIN TO TWO GOOD'S WHOLESALE SOAP PORTAL</h1></button>
      </div>
      <div className='w-full mt-28 border-b border-black'></div>
    </section>
  )
}

export default WholesaleButtons