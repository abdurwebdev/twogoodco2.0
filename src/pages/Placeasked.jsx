import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Email from '../components/Email';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async'
const AccordionItem = ({ number, title, content, isOpen, toggle }) => {
  return (

    <div className="border-b   border-t w-full border-black">
      <button
        className="flex justify-between items-center w-full py-6 px-4"
        onClick={toggle}
      >
        <div className="flex items-center justify-start space-x-20 w-full">
          <h1 className="text-[2vw] font-bold">{number}</h1>
          <h1 className="ml-4 text-[2vw] font-bold">{title}</h1>
        </div>
        <FiChevronDown
          className={`h-8 w-8 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen p-4' : 'max-h-0'
          }`}
      >
        <div className=" flex flex-col">
          <div className='flex flex-row items-center justify-between'>
            <div className='order-2 lg:w-96'>
              <h2>
                When we wheeled over our BBQ to the roadside for an ad-hoc Kings Cross cook-out for the area’s less fortunate, we never could have imagined it would become all that Two Good Co is today. We didn’t mean to grow like we have; we didn’t mean to have this much impact. We just wanted to feed some hungry people. But grow we have; from our kitchens and cafe, to all the Good Loos with our body & hand products across the land. Here's a couple of Good Places you can find us.</h2>
            </div>
            <div className='hidden lg:block order-1'>

            </div>

          </div>
          <div className='mt-16 flex flex-col'>
            <div>
              <img src="https://cdn.sanity.io/images/w8f1ak3c/production/13b0e83a9ceed7de405a0e3450ab70e7d651bcf0-8035x5357.jpg/WorkWork-Program-Photocredit-Jes-Linsday.jpg?rect=0,445,8035,4469&w=1600&h=890&fit=min&auto=format" alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoodPlacesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    { number: '01', title: 'GOOD PLACES', content: 'Description for Good Places.' },

  ];

  return (
    <>
      <Helmet>
        <title>Good Places | Two Good Co</title>
      </Helmet>
      <div className="container mt-36 w-full mx-auto ">
        <div className="w-full lg:w-3/4 mx-auto">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              number={item.number}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              toggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
        <Email />
        <Footer />
      </div>
    </>
  );
};

export default GoodPlacesAccordion;
