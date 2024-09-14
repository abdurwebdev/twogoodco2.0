import React from 'react'

const WholesaleFlex = () => {
  return (
    <section className='w-full flex flex-col mt-5 lg:flex-row lg:gap-x-5 items-start justify-start min-h-screen px-3'>
      <div className='flex gap-2 order-2 items-start justify-between'>
        <img className='w-[45vw] lg:w-[30vw] object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/604e2d0eb091d7e1abd20e8530c081ac82aef905-5504x8256.jpg/WWW_1316.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format" alt="" />
        <img className='w-[45vw] lg:w-[30vw] object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/dbcda18ea72fa176c2b9f8797c7ebee933c0f4ab-1080x1920.png/XXX%20BUILDINGS%20ACROSS%20AUSTRALIA.png?rect=0,161,1080,1598&w=640&h=947&fit=min&auto=format" alt="" />
      </div>
      <div className='flex flex-col lg:order-1 lg:w-96 gap-y-5'>
        <h1 className='font-bold lg:text-[2vw] mt-5 text-[5vw] tracking-tighter leading-[4vw] lg:leading-[2vw]'>WE’RE NOT JUST IN THE BUSINESS OF SELLING SOAP; WE'RE IN THE BUSINESS OF GIVING HOPE.</h1>
        <p>As an accredited social enterprise, 50% of all profits are reinvested into supporting, empowering and employing women with lived experience of domestic violence and homelessness.</p>
        <p>Through our Work Work program, we employ and empower vulnerable women to believe in themselves again, bridging a 'love and skills' gap in the workplace as they re-establish their self worth and independence. We currently employ around 58 women a year...but our goal is to employ 80 women a year, every year. And we need your help. The more soap we sell, the more women we can employ, and the more impact we can make in your local community.</p>
        <p>...which means you can Change The Course of vulnerable women's lives, just through buying washroom consumables you're already purchasing.</p>
      </div>
    </section>
  )
}

export default WholesaleFlex