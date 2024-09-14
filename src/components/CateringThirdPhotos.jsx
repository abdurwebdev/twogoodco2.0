import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
const CateringThirdPhotos = () => {
  return (
    <section className='w-full mt-10 px-5 md:items-start md:justify-between min-h-screen md:flex-row flex flex-col gap-y-5'>
      <div className='flex gap-x-4 md:order-2 items-center'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/13520c37aeec9f56e798f81e472162630d587dd4-2200x3300.jpg/Purpose_Conference_2023_Elin_Bandmann-258.jpg?rect=0,23,2200,3255&w=640&h=947&fit=min&auto=format" className='w-[45vw] md:w-[30vw] h-[50vw] object-cover' alt="" />
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/24a8de23896a1e10bc9e59dca4a073d0119137f8-4128x6192.jpg/230920-TwoGoodCo-Fundraiser-CarriageWorks-PatStevenson-108.jpg?rect=0,42,4128,6108&w=640&h=947&fit=min&auto=format" className='w-[45vw] h-[50vw] md:w-[30vw] object-cover' alt="" />
      </div>
      <div className='flex flex-col md:order-1  gap-y-5 md:w-[330px]'>
        <h1 className='font-bold tracking-tighter text-[4vw] leading-[4vw] '>FROM DROP-BOX TO WAITERED SERVICE, OUR EVENT CATERING DOES IT ALL.</h1>
        <p>"How many conferences have you been to where you're deliberating over the menu? Do you get the delicious baguette that comes with the best brownie you've ever had, or do you opt for the wrap and the goodness-filled bliss ball?</p>
        <p>IIt was such a joy woking with Two Good again for Purpose Conference 2023. We were so impressed by the team's ability to feed 1,000 people in a totally professional manner, with such delicious and lovingly cooked meals. They do so with the calm and commitment that you can only dream of, all the while they're helping empower and employ women at risk of homelessness.</p>
        <p>The feedback by our delegates about the food Two Good served across the entire two days of our event has been overwhelmingly positive - we can’t wait to work together again."</p>
        <h6>- Purpose Conference</h6>
        <button className='border-b items-center gap-x-2 justify-start border-black flex'>CHECK OUT OUR EVENT CATERING MENU<BsArrowUpRight /></button>
        <button> <button className='border-b items-center gap-x-2 justify-start border-black flex'>ENQUIRE ABOUT EVENT CATERING TODAY<BsArrowUpRight /></button></button>
      </div>
    </section>
  )
}

export default CateringThirdPhotos