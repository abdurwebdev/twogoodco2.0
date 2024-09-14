import React, { useRef } from 'react'
const About = () => {

  return (
    <section className='w-full relative h-auto px-5 gap-x-5 md md:flex-row flex flex-col'>
      <div className='flex order-2 items-center md:items-start gap-x-3 justify-between'>
        <div>
          <img className='w-[150vw] object-cover md:h-[40vw] h-[55vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/943f8f43b76b4e030f41deddca1edd44170fee39-5504x8256.jpg/Christina-Maria-Jes-Lindsay-9143.jpg?fp-x=0.5&fp-y=0.5&w=640&h=947&fit=crop&crop=focalpoint&auto=format" alt="" />
        </div>
        <div>
          <img className='w-[150vw] md:h-[40vw] object-cover h-[55vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/84da7b8b510e006ce0ca22769d93bb6c044945f6-5504x8256.jpg/Patricia-Work-Work-Good-Stories-Two-Good-Co.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format" alt="" />
        </div>
      </div>
      <div className='flex flex-col mt-5 items-start gap-y-5 md:gap-y-10 '>
        <h1 className='font-bold tracking-tighter text-3xl'>OUR IMPACT</h1>
        <p>The thing is, we don't save anyone.</p>
        <p>What we do is provide a safe space for women to change the course of their own lives.</p>
        <p >After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for independence. We believe that through experiences that promote love and respect, we can spark and nurture a sense of self-worth for those on the path of healing.</p>
        <button className='tracking-wider border-b border-black'>HERE'S HOW WE DO IT</button>
      </div>
    </section>
  )
}

export default About