import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
const CateringFourthPhotos = () => {
  return (
    <section className='w-full mt-10 px-5 md:items-start md:justify-between min-h-screen md:flex-row flex flex-col gap-y-5'>
      <div className='flex gap-x-4 md:order-2 items-center'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d86f5936b4d60ffceadaf40a10c05a276f08f298-3000x5000.png/8.png?rect=0,281,3000,4439&w=640&h=947&fit=min&auto=format" className='w-[45vw] md:w-[30vw] h-[50vw] object-cover' alt="" />
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/2ba2633169a580db1bdcff8ad5ae5700d7fb9798-3000x5000.png/7.png?rect=0,281,3000,4439&w=640&h=947&fit=min&auto=format" className='w-[45vw] h-[50vw] md:w-[30vw] object-cover' alt="" />
      </div>
      <div className='flex flex-col md:order-1  gap-y-5 md:w-[330px]'>
        <h1 className='font-bold tracking-tighter text-[4vw] leading-[4vw] '>STAFF LUNCHES + OFFICE CATERING THAT SERVE UP SOME TEAM MORALE.</h1>
        <p>“We have been relying on Two Good to provide lunches for our staff of 50 here at Vivcourt (we are a finance firm in Paddington). We aim to source all of our catering from social enterprises, and Two Good is one that is fulfilling beyond our stomachs.</p>
        <p>The food provided by Two Good is always utterly fresh, with plenty of green, leafy healthy options, and catering to our different dietary requirements. All food items have been top quality.`</p>
        <p>When it comes to the delivery of the food, it is always right on time (very helpful for our busy office), and the staff are kind and communicative around our orders. It's also always a pleasant few minutes in the day visiting with G or Two Good's other team members who deliver the food to our door. Another plus is the light cardboard, recyclable packaging of the food, with minimal plastic and tinfoil; this is much appreciated.</p>
        <p>Overall, the front end of Two Good that we enjoy is delicious, professional, clean and kind. Our experience is nurtured by the back end, that we see less of, knowing the enormous and extraordinary changes in the lives of the women working at Two Good, who are working so hard.</p>
        <p>We are big fans!"</p>
        <h1>- Elizabeth McDougal, Office Manager, Vivcourt</h1>
        <button className='border-b items-center gap-x-2 justify-start border-black flex'>ORDER LUNCH FOR YOUR TEAM<BsArrowUpRight /></button>
      </div>
    </section>
  )
}

export default CateringFourthPhotos