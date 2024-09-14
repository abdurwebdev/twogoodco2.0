import React from 'react'
import { Helmet } from 'react-helmet-async'
import Email from '../components/Email'
import Footer from '../components/Footer'
const Careersasked = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Two Good Co</title>
      </Helmet>
      <section className='w-full px-3 mt-64 lg:gap-y-10 lg:flex lg:items-start lg:flex-col lg:justify-start'>
        <h1 className='lg:text-[10vw] lg:font-bold lg:tracking-tighter uppercase'>Work with us</h1>
        <div className='lg:flex lg:w-[450px] lg:flex-col lg:gap-y-5'>
          <p>Two Good Co believes in people until they believe in themselves again.</p>
          <p>
            Through the creation of beautiful, high quality food and products, we support, empower and employ women with lived experience of domestic violence and homelessness.
          </p>
          <p>We’re on a mission to employ, train and empower 60 vulnerable women each year, year on year. To get there, we’re going to need your help.</p>
        </div>
        <div className='w-full mt-24 py-3 border-b border-black'>
          <div className='w-full  items-center justify-between flex'>
            {["POSITION", "LOCATION", "ROLE"].map((item, index) => (<h3 className={`text-xs ${index === 2 ? 'mr-96' : 'mr-0'}`} key={index}>{item}</h3>))}
          </div>
        </div>
        <Email />
        <Footer />
      </section>
    </>
  )
}

export default Careersasked