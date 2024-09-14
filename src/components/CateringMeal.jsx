import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
const CateringMeal = () => {
  return (
    <section className='w-full px-5 md:items-start md:justify-between min-h-screen md:flex-row flex flex-col gap-y-5'>
      <div className='flex gap-x-4 md:order-2 items-center'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/4062b6ce557b26847ef98a211da07996970aadbc-2547x3881.png/1.png?rect=29,0,2518,3881&fp-x=0.5055970149253731&fp-y=0.5&w=640&h=947&fit=crop&crop=focalpoint&auto=format" className='w-[45vw] md:w-[30vw] h-[50vw] object-cover' alt="" />
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/a62ad1ed55ff4298e9b1e4e15952a777d4fa8376-4000x6000.jpg/TwoGood_JenShaw_Photo:KatieKarrs.jpg?rect=0,41,4000,5919&w=640&h=947&fit=min&auto=format" className='w-[45vw] h-[50vw] md:w-[30vw] object-cover' alt="" />
      </div>
      <div className='flex flex-col md:order-1  gap-y-5 md:w-[330px]'>
        <h1 className='font-bold tracking-tighter text-[4vw] leading-[4vw] '>EVERY TWO GOOD MEAL IS INSPIRED BY TWO CORE BELIEFS:</h1>
        <ol>
          <li>1.Food is more than food.</li>
          <li>2.All are equal around our table</li>
        </ol>
        <p>We reach for sustainable ingredients, local suppliers, home-grown produce and holistic preparation methods. Between organic ingredients, wasteless cooking techniques and the art of presentation, we explore the space between simplicity and luxury. We sit together to share lunch every single day, knowing the power that food has to bring people together; as a grounding ritual, an act of generosity and a practise of gratitude.</p>
        <p>Two Good Food honours the magic when good food not only fills the belly, but also fills the heart; whether it’s served to a CEO at a multi-million-dollar event, or to a woman taking refuge in a shelter, who had no idea where her next meal was coming from.</p>
        <button className='border-b items-center gap-x-2 justify-start border-black flex'>EXPLORE GOOD FOOD CATERING TODAY<BsArrowUpRight /></button>
      </div>
    </section>
  )
}

export default CateringMeal