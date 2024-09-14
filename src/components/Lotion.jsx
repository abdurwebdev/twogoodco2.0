import React from 'react'

const Lotion = () => {
  return (
    <section className='w-full min-h-screen px-3 flex lg:items-start flex-col lg:flex-row lg:gap-x-5'>
      <div className='flex mt-20 lg:order-2'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/20e77c4a35bd935dcd8061acbd5c7b0aa86f7e0b-1080x1920.png/Untitled%20design%20(4).png?fp-x=0.5&fp-y=0.5073624454148473&w=640&h=947&fit=crop&crop=focalpoint&auto=format" className='w-[45vw] h-[50vw] object-cover' alt="" />
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/0f35966b30bd16ffdd2a80b404277e5d8c3dcf87-2713x3983.png/Ev-MDS_6479%20copy.png?fp-x=0.5&fp-y=0.37971119133574&w=640&h=947&fit=crop&crop=focalpoint&auto=format" alt="" className='w-[45vw] h-[50vw] object-cover' />
      </div>
      <div className='flex lg:order-1 lg:items-start  flex-col lg:w-60 mt-10 items-start gap-y-5'>
        <h1 className='text-[5vw] lg:text-[2vw] lg:leading-[2vw] font-extrabold leading-[5vw] lg:mt-10 tracking-tighter'>GOOD FOR BUSINESS,<br />
          GOOD FOR THE COMMUNITY.</h1>
        <p>We're a registered social enterprise with NFP status, who run and innovate like a business: product first. We've partnered with industry leaders to explore the best practice for commercial Tier 1 operators, and then added meaningful, local social impact, using our unique Two Good Co lens.</p>
        <p>Our wholesale products span from high-quality washroom consumables, to anti-bacterial hand wash and sanitiser for high-traffic areas, to premium Hardware + Dispensing solutions. We treat every order with equal respect, with a dedicated team focussed on quality assurance, in-house account management, stock management and on-time delivery.</p>
        <p>With wholesale pricing and national fulfilment across Commercial Property, Hotel, Hospitality, Residential, Tech, Media and Professional Services clients, we've worked hard to scale our operations to sustainably deliver large-scale solutions that create real social impact in local communities...and we can't wait to see all the GOOD we can create together.</p>
        <button className='border-b border-black'>BROWSE SOAP'S FAQs</button>
      </div>
    </section>
  )
}

export default Lotion