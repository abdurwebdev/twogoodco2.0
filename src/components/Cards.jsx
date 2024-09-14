import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";


const Cards = () => {

  const [hovered, setHovered] = useState(false);
  const [hoveredtwo, setHoveredtwo] = useState(false);
  const [hoveredthree, setHoveredthree] = useState(false);
  const mainRef = useRef();
  const mainRefTwo = useRef();
  const mainRefthree = useRef();


  useEffect(() => {
    const handleMouseEnter = () => {
      setHovered(true);
    };
    const handleMouseLeave = () => {
      setHovered(false);
    };
    const handleMouseEnterTwo = () => {
      setHoveredtwo(true);
    };
    const handleMouseLeaveTwo = () => {
      setHoveredtwo(false);
    };
    const handleMouseEnterThree = () => {
      setHoveredthree(true);
    };
    const handleMouseLeaveThree = () => {
      setHoveredthree(false);
    };
    const main = mainRef.current;
    const maintwo = mainRefTwo.current;
    const mainthree = mainRefthree.current;
    main.addEventListener("mouseenter", handleMouseEnter);
    main.addEventListener("mouseleave", handleMouseLeave);
    maintwo.addEventListener("mouseenter", handleMouseEnterTwo);
    maintwo.addEventListener("mouseleave", handleMouseLeaveTwo);
    mainthree.addEventListener("mouseenter", handleMouseEnterThree);
    mainthree.addEventListener("mouseleave", handleMouseLeaveThree);
    return () => {
      main.removeEventListener("mouseenter", handleMouseEnter);
      main.removeEventListener("mouseleave", handleMouseLeave);
      maintwo.removeEventListener("mouseenter", handleMouseEnterTwo);
      maintwo.removeEventListener("mouseleave", handleMouseLeaveTwo);
      mainthree.removeEventListener("mouseenter", handleMouseEnterThree);
      mainthree.removeEventListener("mouseleave", handleMouseLeaveThree);
    };
  }, []);

  return (
    <section className='cards px-5 mt-10'>
      <div className='w-full h-6 border-b border-black flex items-center justify-between'>
        <div>
          <h6 className='font-light'>BUY GOOD</h6>
        </div>
        <div>
          <h6 className='font-light'>DO GOOD</h6>
        </div>
      </div>
      <div className='w-full cards items-center justify-center lg:mt-5 h-auto flex flex-col lg:flex lg:flex-row mt-2 gap-y-5 gap-x-5'>
        <div className='w-[90vw] elem lg:w-[450px]  h-[550px] relative bg-red-500'>
          <div className={`w-80 md:w-72 overflow-hidden  absolute top-[50%] rounded-3xl left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EDF3FF] transition-all duration-300 ease-in-out flex  flex-wrap h-12 ${hovered ? 'h-56 ' : 'h-12  '} py-3 items-center  px-3 justify-between`} ref={mainRef}>
            <div className='w-3 h-3 rounded-full bg-black'></div>
            <div>
              <h6>SHOP</h6>
            </div>
            <div>
              <h2 className='font-bold'>PANTRY</h2>
            </div>
            <div>
              <AiOutlineArrowRight />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/ff380ebfee344ff98d24d4156ded6b9dc22a2a2a-5000x5000.png/Change-The-Course-Cookbook-Two-Good-Co.png?w=320&h=320&auto=format" alt="" />
                <h1 className='text-xs text-center'>CHANGE THE COURSE COOK BOOK</h1>
              </div>
              <div className='flex relative flex-col '>
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=470,108,3458,2760&fp-x=0.4888698630136987&fp-y=0.49614340367765025&w=320&h=255&fit=crop&crop=focalpoint&auto=format" alt="" />
                <h1 className='text-xs absolute -bottom-8 text-center'>CHANGE THE COURSE COOK KIT</h1>
              </div>
            </div>
          </div>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/9032e317a6741221ae543fdae5d05160819f9a44-1500x2250.jpg/DSC0079_Dexter%20Kim.jpg?rect=0,0,1500,2008&fp-x=0.47794117647058826&fp-y=0.4461323529411765&w=1280&h=2133&fit=crop&crop=focalpoint&auto=format" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='w-[90vw] elem lg:w-[450px]  h-[550px] relative bg-red-500'>
          <div className={`w-80 md:w-72 overflow-hidden absolute top-[50%] rounded-3xl left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EDF3FF] transition-all duration-300 ease-in-out flex flex-wrap h-12 ${hoveredtwo ? 'h-56 ' : 'h-12 '} py-3 items-center px-3 justify-between`} ref={mainRefTwo}>
            <div className='w-3 h-3 rounded-full bg-black'></div>
            <div>
              <h6>SHOP</h6>
            </div>
            <div>
              <h2 className='font-bold'>PANTRY</h2>
            </div>
            <div>
              <AiOutlineArrowRight />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=320&h=320&auto=format" alt="" />
                <h1 className='text-xs text-center'>CHANGE THE COURSE COOK BOOK</h1>
              </div>
              <div className='flex  flex-col '>
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=320&h=320&auto=format" alt="" />
                <h1 className='text-xs  text-center'>CHANGE THE COURSE COOK KIT</h1>
              </div>
            </div>
          </div>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/138e191deead80c5c8e9a982c20987f8f83c1f27-5504x8256.jpg/JTG_2919%20copy.jpg?rect=276,0,4952,8256&w=640&h=1067&fit=min&auto=format" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='w-[90vw] elem lg:w-[450px] h-[550px] relative bg-red-500'>
          <div className={`w-80 md:w-72 overflow-hidden  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-[#EDF3FF] transition-all duration-300 ease-in-out flex flex-wrap h-12 ${hoveredthree ? 'h-56  ' : 'h-12 '} py-3 items-center px-3 justify-between`} ref={mainRefthree}>
            <div className='w-3 h-3 rounded-full bg-black'></div>
            <div>
              <h6>SHOP</h6>
            </div>
            <div>
              <h2 className='font-bold'>PANTRY</h2>
            </div>
            <div>
              <AiOutlineArrowRight />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/63474079ab0c7723b75bd63b24d8bbc652349640-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%20Two%20Good%20Co.png?w=320&h=320&auto=format" alt="" />
                <h1 className='text-xs text-center'>CHANGE THE COURSE COOK BOOK</h1>
              </div>
              <div className='flex  flex-col '>
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/63474079ab0c7723b75bd63b24d8bbc652349640-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%20Two%20Good%20Co.png?w=320&h=320&auto=format" alt="" />
                <h1 className='text-xs  text-center'>CHANGE THE COURSE COOK KIT</h1>
              </div>
            </div>
          </div>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format" className='w-full h-full object-cover' alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cards;
