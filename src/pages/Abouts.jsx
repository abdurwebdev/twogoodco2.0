import React from 'react'
import AboutsSlogan from '../components/AboutsSlogan'
import Footer from '../components/Footer'
import AboutCreative from '../components/AboutCreative'
import AboutSecond from '../components/AboutSecond'
import AboutVideo from '../components/AboutVideo'
import AboutAccordion from '../components/AboutAccordion'
import Email from '../components/Email'
import { Helmet } from 'react-helmet-async';
const Abouts = () => {
  return (
    <>
      <Helmet>
        <title>About | Two Good Co</title>
      </Helmet>
      <div id='main'>
        <AboutsSlogan />
        <AboutCreative />
        <AboutSecond />
        <AboutVideo />
        <AboutAccordion />
        <Email />
        <Footer />
      </div>
    </>
  )
}

export default Abouts