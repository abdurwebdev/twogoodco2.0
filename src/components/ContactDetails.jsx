import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
const ContactDetails = () => {
  return (
    <section className='w-full lg:flex-row lg:items-start lg:justify-between lg:gap-5 px-5 mt-5 flex flex-col gap-y-5'>
      <div className='flex flex-col lg:w-64 gap-y-5'>
        <h3 className='text-xs'>Work With Us
        </h3>
        <p>We’re on a mission to employ, empower and change the course of the lives of 80 vulnerable women each year, year on year.</p>
        <p>We’re aiming to get there in 2023...if you think you can help us reach our goal, we warmly invite you to Join Our Table.</p>
        <button className='bg-black border flex items-center justify-between w-fit border-black py-3 text-white px-5 rounded-full '>VIEW OPEN SEATS</button>
      </div>
      <div className='flex flex-col gap-y-3'>
        <h3 className='text-xs'>GET IN TOUCH</h3>
        <button className='bg-white border flex items-center justify-between w-fit gap-x-5 border-black py-3 text-black px-5 rounded-full '>GENERAL ENQUIRIES <BsArrowRightShort /></button>
        <button className='bg-white border flex items-center justify-between w-fit gap-x-5 border-black py-3 text-black px-5 rounded-full '>MEDIA & MARKETING
          <BsArrowRightShort />
        </button>
        <button className='bg-white border flex items-center justify-between w-fit gap-x-5 border-black py-3 text-black px-5 rounded-full '>PROGRAM & COMMUNITY PARTNERS
          <BsArrowRightShort />
        </button>
        <button className='bg-white border flex items-center justify-between w-fit gap-x-5 border-black py-3 text-black px-5 rounded-full '>SYDNEY CATERING
          <BsArrowRightShort />
        </button>
        <button className='bg-white border flex items-center justify-between w-fit gap-x-5 border-black py-3 text-black px-5 rounded-full '>WEBSITE & WHOLESALE ORDERS
          <BsArrowRightShort />
        </button>
        <button className='bg-white gap-x-5 border flex items-center justify-between w-fit border-black py-3 text-black px-5 rounded-full '>COOPERATE AND TEAM BUILDING INQUIRIES
          <BsArrowRightShort />
        </button>
      </div>
      <div className='lg:w-96'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/509ca87625a9ce320e68eb0b0a62c644b4f0f634-1136x1388.png/image.png?w=640&h=782&auto=format" alt="" />
      </div>
    </section>
  )
}

export default ContactDetails