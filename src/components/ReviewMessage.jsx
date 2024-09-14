import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
const ReviewMessage = () => {


  return (
    <div className='w-full relative h-36 mt-20  flex flex-col gap-y-5 items-center justify-center'>
      <button className='px-10 py-3 bg-black text-white font-bold rounded-full text-sm'>SEND YOUR OWN MESSAGE</button>
      <h6 className='text-center w-72 mb-10'>Sometimes it’s the smallest actions that can make the biggest impact.</h6>
    </div>
  )
}

export default ReviewMessage