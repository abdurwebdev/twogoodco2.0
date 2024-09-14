import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
const CateringFifthPhoto = () => {
  return (
    <section className='w-full mt-10 px-5 md:items-start md:justify-between min-h-screen md:flex-row flex flex-col gap-y-5'>
      <div className='flex gap-x-4 md:order-2 items-center'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d86f5936b4d60ffceadaf40a10c05a276f08f298-3000x5000.png/8.png?rect=0,281,3000,4439&w=640&h=947&fit=min&auto=format" className='w-[45vw] md:w-[30vw] h-[50vw] object-cover' alt="" />
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/2ba2633169a580db1bdcff8ad5ae5700d7fb9798-3000x5000.png/7.png?rect=0,281,3000,4439&w=640&h=947&fit=min&auto=format" className='w-[45vw] h-[50vw] md:w-[30vw] object-cover' alt="" />
      </div>
      <div className='flex flex-col md:order-1  gap-y-5 md:w-[330px]'>
        <h1 className='font-bold tracking-tighter text-[4vw] leading-[4vw] '>MASTER THE ART OF FOOD THAT NOURISHES THE BODY + THE SOUL.</h1>
        <p>Our masterclasses and Good Food demonstrations bring our recipes to life, right before your eyes.</p>
        <p>Participatns will learn how to prepare and present beautiful dishes that invigorate all the senses at once, while getting the inside scoop on industry secerets around prepatation techniques, wasteless cooking methods and understanding how to harness each ingredient's full potential. At the end, you'll get to indulge in the finl product, sharing a meal that we've all created together.</p>
        <p>The best part? You get to raise life-changing funds for women living in crisis, and help us create meaningful opportunities for them to rebuild their self worth and independence.</p>
        <button className='border-b items-center gap-x-2 justify-start text-xs border-black flex'>ENQUIRING ABOUT HOSTING A MASTER CLASS<BsArrowUpRight /></button>
      </div>
    </section>
  )
}

export default CateringFifthPhoto