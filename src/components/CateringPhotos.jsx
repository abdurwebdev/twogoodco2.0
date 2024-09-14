import React from 'react'

const CateringPhotos = () => {
  return (
    <section className='w-full px-5 flex flex-col items-start mt-10'>
      <div className='flex flex-col lg:flex-row lg:items-start lg:justify-start lg:space-x-20 space-y-3'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/eafc93495dc8c67f15a2bed5de6decdd1b0e13c1-3881x2572.png/3%20copy.png?rect=0,27,3881,2545&fp-x=0.5&fp-y=0.5051731986922153&w=1280&h=962&fit=crop&crop=focalpoint&auto=format" className='lg:w-96 mt-2 lg:h-64 lg:object-cover' alt="" />
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/dc313a32993dbffda121e923efab4f8245e75e1f-3881x2576.png/5%20copy.png?rect=0,20,3881,2556&fp-x=0.5&fp-y=0.5038740469844418&w=1280&h=962&fit=crop&crop=focalpoint&auto=format" className='lg:w-96 lg:h-64 lg:object-cover' alt="" />
      </div>
      <div className='mt-5 ml-96'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/9378d4f2f62ce71e8f3040c7e1dd25635fbf9b13-3300x2200.jpg/Purpose_Conference_2023_Elin_Bandmann-254.jpg?rect=0,1,3300,2199&w=1280&h=853&auto=format" className='w-[800px] h-[500px] object-cover' alt="" />
      </div>
    </section>
  )
}

export default CateringPhotos