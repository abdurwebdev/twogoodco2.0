import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';

const MainItems = () => {
  const [isdroppedDown, setisDroppedDown] = useState(false)
  const toggleDrpdown = () => {
    setisDroppedDown(!isdroppedDown);
  }

  return (
    <div className='flex flex-col h-screen lg:items-center lg:justify-center  lg:flex-row  px-3  w-full '>
      <div className='flex main-two z-0 flex-col'>
        <h1 className='font-bold  text-[14vw] tracking-tighter leading-[13vw]'>GOOD</h1>
        <div id='main-two' className='flex relative gap-x-1 items-center justify-start'>
          <h1 className='font-bold text-[14vw] tracking-tighter leading-[13vw]'>THINGS</h1>
          <FiChevronDown onClick={toggleDrpdown} className='font-extrabold text-[14vw] tracking-tighter leading-[13vw]' />
        </div>
        {isdroppedDown && (
          <div className='flex  flex-col mt-10'>
            <h2 className='font-bold text-[14vw] tracking-tighter leading-[13vw]'>Bath</h2>
            <h2 className='font-bold text-[14vw] tracking-tighter leading-[13vw]'>Pantry</h2>
            <h2 className='font-bold text-[14vw] tracking-tighter leading-[13vw]'>Donation</h2>
            <h2 className='font-bold text-[14vw] tracking-tighter leading-[13vw]'>Home</h2>
          </div>
        )}
      </div>

      <div className='mt-20 main-three'>
        <p>We create high quality, sustainable, luxurious products - toiletries, apparel, blankets, candles. Basically, things that feel like home. The best part? With every single purchase, you have the potential to change the course of someone’s life.</p>
      </div>
    </div>
  )
}

export default MainItems