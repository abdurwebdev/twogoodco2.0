import React from 'react'

const WholesaleBuysoap = () => {
  return (
    <section className='w-full px-3 flex flex-col items-center justify-center gap-y-5'>
      <div className='border-t  w-full border-black flex items-center justify-between'>
        <h5 className='mt-3'>MAKE AN ORDER,</h5>
        <h5 className='mt-3'>MAKE A DIFFERENCE</h5>
      </div>
      <h1 className='text-[5vw] font-bold'>BUY SOAP, GIVE HOPE.</h1>
      <div className='text-center'>
        <h2>PURCHASING SMALL VOLUMES?</h2>
        <p>IF YOU'RE ENQUIRING TO ORDER SOAP IN VOLUMES OF LESS THAN 5 LITRES, PLEASE PURCHASE DIRECTLY FROM OUR SHOPFRONT.

          BROWSE SOAPS FAQs</p>
      </div>
      <button className='bg-black font-bold rounded-full text-white px-5 py-3'>BROWSE SOAPS FAQs</button>
      <button className='bg-black font-bold rounded-full text-white px-3 py-3'>REQUEST A WHOLESALE SOAPS BROCHURE</button>
      <button className='bg-black font-bold rounded-full text-white px-10 py-3'>LOGIN TO TWO GOOD'S WHOLESALE SOAP PORTAL</button>
    </section>
  )
}

export default WholesaleBuysoap