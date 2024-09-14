import React from 'react'
import Shopcard from './Shopcard'
import { Helmet } from 'react-helmet-async'
const ShopCardOne = () => {

  return (
    <>
      <Helmet>
        <title>Change the course cook book | Two Good Co</title>
      </Helmet>
      <div id='main'>
        <Shopcard />
      </div>
    </>
  )
}

export default ShopCardOne