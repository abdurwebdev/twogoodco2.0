import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import Email from '../components/Email'
const Foodasked = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track which accordion is open

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  }

  const accordionData = [
    {
      title: 'Order Notice & Delivery',
      content: 'Two Good Catering is available Tuesday – Friday (with other days on request by emailing sydneycatering@twogood.com.au).Orders must be placed before 2:00pm, two business days before your delivery date. If you have a last-minute request please email us at sydneycatering@twogood.com.au and we will see if we can facilitate your order.Orders can be delivered between 9.00am and 5.30pm, Tuesday to Friday (and other days on request). We cannot guarantee delivery at the exact time – but we will deliver within an hour of your selected delivery time!',
    },
    {
      title: 'Delivery Costs & Minimum Spend',
      content: 'Our minimum spend is $250 inc GST.Standard delivery fee is $40 for all deliveries within a 10 kilometre radius of Redfern and starts from $50 minimum for outer lying suburbs',
    },
    {
      title: 'Additional Information',
      content: 'Changes to your order require 48 hours notice and can be emailed to sydneycatering@twogood.com.au.  Credit card surcharges apply (VISA 1.5%, Mastercard 1.5% & Amex 1.8%). Payment is required in full upon ordering. We accept credit card or direct debit which are charged up front.',
    },
    {
      title: 'Dietary & Allergens',
      content: 'Two Good can cater to unique dietary needs with advanced notice. Whilst we take the utmost care to accommodate all dietary requirements there can be traces of allergens found within our catering. In the event you or your client has a life-threatening anaphylaxis inducing allergy, we highly recommend the consumer(s) is made aware of this clause and has taken preventative measures. Any instances where you or your client suffers loss or illness resulting from nuts or traces of allergens found in our catering, Two Good Co will not be held liable. If the catering you require includes life threatening inducing allergy food items please email through to sydneycatering@twogood.com.au.',
    },
    {
      title: 'Order Cancellations',
      content: 'Cancellation charges will apply once your order has been confirmed and paid in full. If your order is cancelled within 48 hours of your delivery, your order will not be refunded. To cancel your order please email sydneycatering@twogood.com.au',
    },
    {
      title: "Delays on your Delivery",
      content: "In the event that we are delayed due to unforeseen circumstances we will notify you straight away."
    },

  ];

  return (
    <>
      <Helmet>
        <title>Good Things FAQs | Two Good Co</title>
      </Helmet>
      <section className='w-full px-3 mt-40'>
        <h1 className='text-[9vw] tracking-tighter font-bold leading-[8vw]'>GOOD FOOD</h1>
        <h1 className='text-[9vw] tracking-tighter font-bold leading-[8vw]'>FREQUENTLY ASKED</h1>
        <h1 className='text-[9vw] leading-[8vw] tracking-tighter font-bold'>QUESTIONS</h1>
        <div className='flex mt-10 lg:flex-row flex-col lg:items-start lg:justify-between gap-y-3'>
          <div className='lg:w-[40%]'>
            <h1 className='uppercase text-[5vw] lg:text-[2vw] tracking-tighter lg:leading-[2vw] leading-[4vw]'>
              If you can’t find the information you’re looking for, please see get in touch.
            </h1>
            <button className='mt-3 border-b text-sm'>GET IN TOUCH</button>
          </div>
          <div className='lg:w-[50%] min-h-[450px]'>
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

export default Foodasked;
