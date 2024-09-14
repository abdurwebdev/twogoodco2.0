import React from 'react'
import StoriesMain from '../components/StoriesMain'
import StoriesPictures from '../components/StoriesPictures'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
const Stories = () => {
  return (
    <>
      <Helmet>
        <title>Stories | Two Good Co</title>
      </Helmet>
      <div id='main'>
        <StoriesMain />
        <StoriesPictures />
        <Footer />
      </div>
    </>
  )
}

export default Stories