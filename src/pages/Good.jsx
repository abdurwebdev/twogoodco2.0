import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import Email from '../components/Email'
const Good = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track which accordion is open

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  }

  const accordionData = [
    {
      title: 'Delivery & Shipping Charges',
      content: 'Due to a high volume of orders, delivery may be delayed. For delivery by Christmas for WA, please order by 6 Dec and for the rest of the states, NSW, ACT, QLD, VIC, NT + SA by 12 Dec. We thank you for your understanding.',
    },
    {
      title: 'Tracking your parcel',
      content: 'You will receive a tracking number by email when your order has been dispatched.',
    },
    {
      title: 'Where will my order be shipped from?',
      content: 'All orders are shipped from our warehouse in Eveleigh, New South Wales, Australia.',
    },
    {
      title: 'Do you offer international shipping?',
      content: 'At this stage, we ship all over Australia but international shipping is unavailable.',
    },
    {
      title: 'Where can I purchase some of these Good Things?',
      content: 'You can purchase any of our products online in our shop, or visit our Two Good Co Cafe at Yirranma Place in, Darlinghurst! Check out our opening hours in Good Places x',
    },
    {
      title: "What should I do if my order is damaged in transit?",
      content: "If an item has been damaged in transit, Two Good will provide you with a replacement. Please contact us at orders@twogood.com.au with your order details and an accompanying photo of the damaged item."
    },
    {
      title: "Can I cancel or amend my order?",
      content: "Please contact us at orders@twogood.com.au if you wish to cancel or amend your order. Although we cannot guarantee this, we will happily do our best for any orders that have not already been processed."
    },
    {
      title: "Gifting & personal messages",
      content: "We are pleased to prepare all online orders for gifting, with the inclusion of an optional gift message to accompany.If your online order is intended for gifting, please provide the Recipient’s Details (full name, address, phone number) and include your personal message."
    },
    {
      title: "Can I purchase Two Good Co products for my place of business?",
      content: "Please head on to Contact Us page and click on Website & Wholesale Ordersfrom to get in touch with us."
    },
    {
      title: "Taxes",
      content: "All prices on the Two Good Co website are inclusive of GST. The GST amount will be displayed on the invoice accompanying your shipment email."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Good Things FAQs | Two Good Co</title>
      </Helmet>
      <section className='w-full px-3 mt-40'>
        <h1 className='text-[9vw] tracking-tighter font-bold leading-[8vw]'>GOOD THINGS</h1>
        <h1 className='text-[9vw] tracking-tighter font-bold leading-[8vw]'>FREQUENTLY ASKED</h1>
        <h1 className='text-[9vw] leading-[8vw] tracking-tighter font-bold'>QUESTIONS</h1>
        <div className='flex mt-10 lg:flex-row flex-col lg:items-start lg:justify-between gap-y-3'>
          <div className='lg:w-[40%]'>
            <h1 className='uppercase text-[5vw] lg:text-[2vw] tracking-tighter lg:leading-[2vw] leading-[4vw]'>
              If you can’t find the information you’re looking for, please get in touch.
            </h1>
            <button className='mt-3 border-b text-sm'>GET IN TOUCH</button>
          </div>
          <div className='w-[50%] min-h-[450px]'>
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="flex justify-between w-full py-4 px-2 text-left font-medium text-gray-900"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className='text-lg'>{item.title}</h2>
                  <span>{activeIndex === index ? '−' : '+'}</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-screen ' : 'max-h-0'}`}
                >
                  <h2 className="text-black text-lg">{item.content}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Email />
      <Footer />
    </>
  );
}

export default Good;
