import React from 'react'
import ContactMain from '../components/ContactMain'
import ContactDetails from '../components/ContactDetails'
import Email from '../components/Email'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Two Good Co</title>
      </Helmet>
      <div id='main'>
        <ContactMain />
        <ContactDetails />
        <Email />
        <Footer />
      </div>
    </>
  )
}

export default Contact