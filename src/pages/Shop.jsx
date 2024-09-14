import React from 'react'
import MainItems from '../components/MainItems'
import ShopCards from '../components/ShopCards'
import Email from '../components/Email'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop | Two Good Co</title>
      </Helmet>
      <div id='main'>
        <MainItems />
        <ShopCards />
        <Email />
        <Footer />
      </div>
    </>
  )
}

export default Shop