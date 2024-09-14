import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    <>
      <footer className='w-full relative mt-20 h-auto px-3 flex flex-col md:flex-row md:items-start xl:items-start md:justify-between '>
        <div className='md:order-2 logo'>
          <img src="https://images.squarespace-cdn.com/content/v1/628ad15685f31779b7215675/a5185eb4-66b9-4857-93ad-7e7018bc9d91/TwoGood_Logo_Horizontal_RGB_Mono.png" className='w-[40vw]' alt="" />
        </div>
        <div className='flex left-foot items-start justify-between'>
          <div className='flex left-foot-main flex-col'>
            <h2 className='py-2 text-slate-400'>CONNECT WITH US</h2>
            <a className='capitalize' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/TwoGoodCo'>facebook</a>
            <a className='capitalize' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/twogoodco/'>instagram</a>
            <a href="https://twitter.com/twogoodco" className='capitalize' target='_blank' rel='noopener noreferrer'>Twitter</a>
            <a className='capitalize' href='https://www.youtube.com/channel/UCCfo4CF8hmDUQdcO5_MWONw' target='_blank' rel='noopener noreferrer'>youtube</a>
            <a className='capitalize' target='_blank' rel='noopener noreferrer' href='https://au.linkedin.com/company/twogoodco'>linkedin</a>
          </div>
        </div>
        <div className='flex right-foot md:order-3 flex-col'>
          <h2 className='py-2 text-slate-400'>THE NITTY GRITIES</h2>
          <Link to='/good'>
            <h2>Good Things FAQs</h2>
          </Link>
          <Link to='/foodasked'>
            <h2>Good Food FAQs</h2>
          </Link>
          <Link to='/placeasked'>
            <h2>Good Places</h2>
          </Link>
          <Link to='/pathwayasked'>
            <h2>Pathways</h2>
          </Link>
          <Link to='/careersasked'>
            <h2>Careers</h2>
          </Link>
          <Link to='/wholesale'>
            <h2>Wholesale</h2>
          </Link>
        </div>
      </footer>
      <div className='flex center-foot flex-col lg:flex-col lg:items-center lg:justify-center mt-10 space-y-10'>
        <div className='flex center-foot-main flex-col space-y-9 lg:flex-col lg:items-center lg:justify-center lg:w-[70%] lg:text-center px-5'>
          <h2>Acknowledgement of Country</h2>
          <p>We are proud and privileged to have our home on this land, and to be able to continue the long tradition of community coming together around food, begun thousands of years ago by First Nations peoples. As we stand together on this unceded land, we acknowledge our First Nations people, are the original custodians of this land, and we recognise their deep connection to land, water, sky and community which continues today. We pay our deep respects to community elders, past, present and emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres Strait Islander peoples. Always was, always will be Aboriginal land.</p>
        </div>
        <div className='flex last-foot px-5 gap-x-4 items-center justify-between'>
          <h2 className='text-slate-400'>&copy;TWO GOOD CO, 2024</h2>
          <h2 className='text-slate-400'>TERMS OF USE</h2>
          <h2 className='text-slate-400'>PRIVACY POLICY</h2>
        </div>
      </div >
    </>
  )
}

export default Footer