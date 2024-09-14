import React from 'react'


const PathwayWomen = () => {
  return (
    <section className='w-full h-auto px-3 gap-x-5 md md:flex-row flex flex-col'>
      <div className='flex order-2 items-center md:items-start gap-x-3 justify-between'>
        <div>
          <img className='w-[150vw] object-cover md:h-[40vw] h-[55vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/05af77f62e7bdd91198a8a842bb3e0a50f166080-1350x1920.png/Rectangle%20214.png?rect=26,0,1298,1920&w=640&h=947&fit=min&auto=format" alt="" />
        </div>
        <div>
          <img className='w-[150vw] md:h-[40vw] object-cover h-[55vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/58af9753384d501cb822b8c1a56f3a13583134f0-1353x1920.png/Rectangle%20215.png?rect=28,0,1298,1920&w=640&h=947&fit=min&auto=format" alt="" />
        </div>
      </div>
      <div className='flex flex-col md:w-[1600px] mt-5 items-start gap-y-5 md:gap-y-10 '>
        <h1 className='font-bold tracking-tighter text-3xl'>HEAR FROM WOMEN WHO HAVE CHANGED THEIR COURSE</h1>
        <p>"I've been in your situation. Trust me, I've been there...but nothing is impossible. I'm here, and I want to inspire you all. Just look at my situation - from homeless, to having a place and a better job, earning money, can support a family. You will get there too. I never thought that I would be in this situation; I can now say that I'm super independent. From meeting these people giving you support and encouragement, believing in you, trust me...it will change your life. You start believing in yourself."</p>
        <button className='tracking-wider  text-left border-b border-black'>VIEW PATHWAY 1: HEALING FROM FINANCIAL ABUSE</button>
      </div>
    </section>
  )
}

export default PathwayWomen;