import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
const CateringSecondMeal = () => {
  return (
    <section className='w-full mt-10 px-5 md:items-start md:justify-between min-h-screen md:flex-row flex flex-col gap-y-5'>
      <div className='flex gap-x-4 md:order-2 items-center'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/59dbaeff4d6bdbed78cf367752d66266292fa0d5-1029x1142.png/Green-Tomato-Bush-Basil-Chutney-Two-Good-Co.png?rect=129,0,772,1142&w=640&h=947&fit=min&auto=format" className='w-[45vw] md:w-[30vw] h-[50vw] object-cover' alt="" />
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/dc1dc25a957254410ec5e7fb5c154d10f584cd99-5504x8256.jpg/WWW_0061.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format" className='w-[45vw] h-[50vw] md:w-[30vw] object-cover' alt="" />
      </div>
      <div className='flex flex-col md:order-1  gap-y-5 md:w-[330px]'>
        <h1 className='font-bold tracking-tighter text-[4vw] leading-[4vw] '>MADE WITH LOVE BY THE WOMEN OF OUR WORK WORK PROGRAM.</h1>
        <p>Our Work Work employment pathways program is where we create the greatest impact. By hiring the vulnerable women from the shelters we serve in our very own kitchens, we can empower them to re-establish their self-belief and independence after domestic violence and homelessness, while bridging the ‘love and skills’ gap in their journey to re-entering the workforce after living in crisis.</p>
        <p>Every catering order has been made with love and care, generating life-changing employment hours for women rebuiding their lives and finding their way home again.</p>
        <p>If you can, learn their stories; let yourself fall into their words. We swear, it makes the food taste so much better.</p>
        <button className='border-b items-center gap-x-2 justify-start border-black flex'>READ THEIR STORIES<BsArrowUpRight /></button>
      </div>
    </section>
  )
}

export default CateringSecondMeal