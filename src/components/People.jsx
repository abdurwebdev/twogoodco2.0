import React from 'react'
const People = () => {

  return (
    <section className='w-full relative mains mt-8 xl:h-80  md:gap-x-10 md:flex-row px-3 flex flex-col gap-y-5'>
      <div className='elem'>
        <h1 className='text-center uppercase md:text-start md:text-[9vw] md:tracking-tighter md:leading-[7vw] lg:text-[4vw] lg:leading-[4vw] lg:tracking-tighter text-[8vw] tracking-tighter leading-[9vw] font-bold '>We believe in people, until they believe in themselves again.</h1>
      </div>
      <div className='elem text-center md:text-start text-lg space-y-5 font-normal'>
        <p>Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage.</p>
        <p>With every purchase you make with us, you're helping to change the course of someone's life; you're walking alongside vulnerable women as they find their way home again.</p>
        <button className='text-base border-b border-black'>SHOP TO SUPPORT</button>
      </div>
    </section>
  )
}

export default People