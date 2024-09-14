import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
const AboutAccordion = () => {
  return (
    <div className='flex items-center justify-center'>
      <Accordion defaultActiveKey="0" className='p-5 ml-0'>
        <Accordion.Item eventKey="0" >
          <Accordion.Header>
            <div className='flex items-center gap-x-10 xl:gap-x-32 justify-between'>
              <h1 className='text-[7vw] font-bold'>01</h1>
              <h1 className='text-[5vw] font-bold'>SOCIALLY SUSTAINABLE.</h1>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className='flex gap-y-3 flex-col lg:flex-row lg:gap-x-5'>
              <div className='flex flex-col lg:w-96 gap-y-3'>
                <p>Two Good is a business for good and a verified social enterprise by the Social Traders Certification, which qualifies us as a social enterprise supplier for procurement mandates.</p>
                <p>But our impact doesn’t end when someone’s experience with Two Good ends; we’re looking to change the course of someone’s life in the long term. We partner with value-based organisations to employ the people who graduate from our Work Work program, with 85% of the people who graduate securing long-term employment.</p>
                <p>By purchasing from Two Good Co, you can feel confident you are creating sustainable opportunities for someone to change their life and break free from the cycle of homelessness and disadvantage</p>
              </div>
              <div>
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/04329aed418bf2f2396ddd330d0ad9f2305eb939-1000x667.jpg/Work-Work-Group-Shot-XDN_1663.jpg?w=640&h=427&auto=format" alt="" />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><div className='flex items-center xl:gap-x-32 gap-x-10 justify-between'>
            <h1 className='text-[7vw] font-bold'>02</h1>
            <h1 className='text-[5vw] font-bold'>ENVIROMENTALLY SUSTAINABLE.</h1>
          </div></Accordion.Header>
          <Accordion.Body>
            <div className='flex gap-y-3 flex-col lg:flex-row lg:gap-x-5'>
              <div className='flex flex-col lg:w-96 gap-y-3'>
                <p>Two Good is a business for good and a verified social enterprise by the Social Traders Certification, which qualifies us as a social enterprise supplier for procurement mandates.</p>
                <p>But our impact doesn’t end when someone’s experience with Two Good ends; we’re looking to change the course of someone’s life in the long term. We partner with value-based organisations to employ the people who graduate from our Work Work program, with 85% of the people who graduate securing long-term employment.</p>
                <p>By purchasing from Two Good Co, you can feel confident you are creating sustainable opportunities for someone to change their life and break free from the cycle of homelessness and disadvantage</p>
              </div>
              <div>
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/04329aed418bf2f2396ddd330d0ad9f2305eb939-1000x667.jpg/Work-Work-Group-Shot-XDN_1663.jpg?w=640&h=427&auto=format" alt="" />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header><div className='flex items-center xl:gap-x-32 gap-x-10 justify-between'>
            <h1 className='text-[7vw] font-bold'>03</h1>
            <h1 className='text-[5vw] font-bold'>ENGAGED + INSPIRE TEENANTS</h1>
          </div></Accordion.Header>
          <Accordion.Body>
            <div className='flex gap-y-3 flex-col lg:flex-row lg:gap-x-5'>
              <div className='flex flex-col lg:w-96 gap-y-3'>
                <p>Two Good is a business for good and a verified social enterprise by the Social Traders Certification, which qualifies us as a social enterprise supplier for procurement mandates.</p>
                <p>But our impact doesn’t end when someone’s experience with Two Good ends; we’re looking to change the course of someone’s life in the long term. We partner with value-based organisations to employ the people who graduate from our Work Work program, with 85% of the people who graduate securing long-term employment.</p>
                <p>By purchasing from Two Good Co, you can feel confident you are creating sustainable opportunities for someone to change their life and break free from the cycle of homelessness and disadvantage</p>
              </div>
              <div>
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/04329aed418bf2f2396ddd330d0ad9f2305eb939-1000x667.jpg/Work-Work-Group-Shot-XDN_1663.jpg?w=640&h=427&auto=format" alt="" />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default AboutAccordion;