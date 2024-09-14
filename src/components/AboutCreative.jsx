import React from 'react'

const AboutCreative = () => {
  return (
    <section className='w-full px-5 flex gap-y-5 lg:flex-row lg:items-start lg:gap-x-5 lg:justify-between flex-col'>
      <div className='lg:w-60'>
        <button className='px-5 py-3 text-white text-xs bg-black rounded-full'>JUMP TO SECTION</button>
      </div>
      <div className='lg:w-80'>
        <p>Two Good Co is a business for good. Through the creation of beautiful, high quality food and products, we support, empower and employ women with lived experience of homelessness, domestic violence and complex trauma. By supporting Two Good Co, you are creating opportunities for someone to change their life and rebuild their self-worth and independence, in order to break free from the cycle of homelessness and disadvantage.</p>
      </div>
      <div className='absloute top-60'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/c8fa865c47d95c569b1c13c3b6dc2f24e32447e4-5504x8256.jpg/LMO_7569.jpg?rect=0,0,4733,7673&fp-x=0.4280303030303031&fp-y=0.3057499999999996&w=640&h=1038&fit=crop&crop=focalpoint&auto=format" alt="" />
      </div>
    </section>
  )
}

export default AboutCreative