import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import '../style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';


export default () => {
  const data = [{
    head: "Thank you so much for the beautiful catering; it means a lot working with a company such as Two Good Co."
  },
  {
    head: "Thank you so much for the beautiful catering; it means a lot working with a company such as Two Good Co."
  },
  {
    head: "Thank you so much for the beautiful catering; it means a lot working with a company such as Two Good Co."
  }, {
    head: "Thank you so much for the beautiful catering; it means a lot working with a company such as Two Good Co."
  }, {
    head: "Thank you so much for the beautiful catering; it means a lot working with a company such as Two Good Co."
  }

  ];
  const mainRef = useRef();

  return (
    <>
      <div className='swiper relative w-full h-52 md:h-60 lg:h-72 xl:h-80 2xl:h-96 flex items-center justify-center text-center'>
        <Swiper className='mainss h-full mt-32'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect='coverflow'
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <h1 ref={mainRef} className='text-[5vw] font-bold uppercase tracking-tighter leading-[5vw]'>{item.head}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
