import React from 'react'
import WholesaleMain from '../components/WholesaleMain'
import Lotion from '../components/Lotion'
import WholesaleButtons from '../components/WholesaleButtons'
import WholesaleCards from '../components/WholesaleCards'
import WholesaleVideo from '../components/WholesaleVideo'
import WholesaleFlex from '../components/WholesaleFlex'
import WholesaleSwiper from '../components/WholesaleSwiper'
import WholesaleAccordion from '../components/WholesaleAccordion'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import WholesaleHero from '../components/WholesaleHero'
import WholesaleDogoodCommunity from '../components/WholesaleDogoodCommunity'
import WholesaleBuysoap from '../components/WholesaleBuysoap'
import Email from '../components/Email'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
const Wholesale = () => {
  return (
    <>
      <Helmet>
        <title>Wholesale | Two Good Co</title>
      </Helmet>
      <div id="main" className='overflow-hidden text-black'>
        <WholesaleMain />
        <Lotion />
        <WholesaleButtons />
        <WholesaleCards />
        <WholesaleVideo />
        <WholesaleFlex />
        <WholesaleSwiper />
        <WholesaleAccordion />
        <WholesaleHero />
        <WholesaleDogoodCommunity />
        <WholesaleBuysoap />
        <Email />
        <Footer />
      </div>
    </>
  )
}

export default Wholesale