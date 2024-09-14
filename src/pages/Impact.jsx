import React from 'react'
import ImpactSwiper from '../components/ImpactSwiper'
import ImpactVideo from '../components/ImpactVideo'
import ImpactAccordion from '../components/ImpactAccordion'
import Email from '../components/Email'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
const Impact = () => {
  return (
    <>
      <Helmet>
        <title>Impact |Two Good Co</title>
      </Helmet>
      <div id='main'>
        <ImpactSwiper />
        <ImpactVideo />
        <ImpactAccordion />
        <Email />
        <Footer />
      </div>
    </>
  )
}

export default Impact