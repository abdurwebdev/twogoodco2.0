import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const PathwayCountUp = () => {
  return (
    <section className='w-full px-3 h-96'><Swiper
      className='w-full h-96'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='flex lg:flex-row px-5 space-y-20 items-start flex-col justify-between'>
          <h1 className='text-3xl xl:w-[500px] lg:w-[600px] lg:mt-28 xl:mt-28 order-2 mt-10 lg:text-5xl font-bold'>BUILDING WITH TWO GOOD SOAP</h1>
          <CountUp start={0} end={182} duration={5} className='font-bold  flex justify-end items-end text-3xl lg:text-9xl xl:text-[10vw] order-1' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex lg:flex-row px-5 space-y-20 items-start flex-col justify-between'>
          <h1 className='text-3xl xl:w-[500px] lg:w-[600px] lg:mt-28 xl:mt-28 order-2 mt-10 lg:text-5xl font-bold'>LITRES OF SOAP DELEIVERED TO DATE</h1>
          <CountUp start={0} end={133359} duration={10} className='font-bold  flex justify-end items-end text-3xl lg:text-9xl xl:text-[10vw] order-1' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex lg:flex-row px-5 space-y-20 items-start flex-col justify-between'>
          <h1 className='text-3xl xl:w-[500px] lg:w-[600px] lg:mt-28 xl:mt-28 order-2 mt-10 lg:text-5xl font-bold'>EMPLOYEMENT HOURS PAYED THROUGH WORK WORK</h1>
          <CountUp start={0} end={73313} duration={5} className='font-bold  flex justify-end items-end text-3xl lg:text-9xl xl:text-[10vw] order-1' />
        </div>
      </SwiperSlide>
      <SwiperSlide><div className='flex lg:flex-row px-5 space-y-20 items-start flex-col justify-between'>
        <h1 className='text-3xl xl:w-[500px] lg:w-[600px] lg:mt-28 xl:mt-28 order-2 mt-10 lg:text-5xl font-bold'>PAID IN WORK WORK WAGES</h1>
        <CountUp start={0} end={1791649} duration={5} className='font-bold  flex justify-end items-end text-3xl lg:text-9xl xl:text-9xl order-1' />
      </div></SwiperSlide>
    </Swiper></section>
  )
}

export default PathwayCountUp;