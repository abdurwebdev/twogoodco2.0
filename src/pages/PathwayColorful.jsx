import React from 'react'

const PathwayColorful = () => {
  return (
    <section className='w-full py-3 px-3 mt-10 h-screen bg-[#F9DEC5]'>
      <div className='flex  border-t py-3 border-black items-center justify-between'>
        <h3 className='uppercase'>two good co pathways</h3>
        <h3 className='uppercase'>change your course</h3>
      </div>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='flex flex-col gap-y-5'>
          <h1 className='font-bold text-[6vw] tracking-tighter leading-[5vw] uppercase text-center'>ARE YOU A SERVICE INTERESTED IN
            BEING A PART OF TWO GOOD CO’s
            pathways, register your interest</h1>
          <div className='flex items-center justify-center'>
            <button className='px-5  w-56 py-3 rounded-full bg-black text-white'><h1>ENQUIRE</h1></button>
          </div>
          <h3 className='text-center text-base'>ENQUIRE
            Or interested in our partnerships,

            please Contact Us</h3>
        </div>
      </div>
    </section>
  )
}

export default PathwayColorful