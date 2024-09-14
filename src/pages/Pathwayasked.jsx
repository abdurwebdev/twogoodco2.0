import React from 'react'
import PathwayVideo from '../components/PathwayVideo'
import PathwayFlex from './PathwayFlex'
import PathwayCards from './PathwayCards'
import PathwayQuote from './PathwayQuote'
import PathwayCountUp from './PathwayCountUp'
import PathwayWomen from './PathwayWomen'
import PathwayColorful from './PathwayColorful'
import Email from '../components/Email'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
const Pathwayasked = () => {
  return (
    <>
      <Helmet>
        <title>Pathway | Two Good Co</title>
      </Helmet>
      <section className='w-full '>
        <h1 className='text-[10vw] px-3 lg:leading-[50px] leading-10 mt-48 tracking-tighter font-bold'>WELCOME TO</h1>
        <h1 className='text-[10vw] px-3 tracking-tighter font-bold'>PATHWAYS</h1>
        <PathwayVideo />
        <PathwayFlex />
        <PathwayCards />
        <PathwayQuote />
        <PathwayCountUp />
        <PathwayWomen />
        <PathwayColorful />
        <Email />
        <Footer />
      </section>
    </>
  )
}

export default Pathwayasked