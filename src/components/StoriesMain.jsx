import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


const StoriesMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('GOOD TIMES');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  const options = [
    'SHOW ALL',
    'GOOD RECIPES',
    'CHANGE THE COURSE',
    'GOOD NEWS',
    'GOOD TIMES',
    'GOOD STORIES',
  ];

  return (
    <section className='w-full px-3 mt-36 lg:flex-row lg:gap-x-24 flex flex-col gap-y-5'>
      <div>
        <h1 className='text-[15vw] tracking-tighter font-bold text-black'>STORIES</h1>
      </div>
      <div className='lg:mt-[3vw]'>
        <p>The narrative of Two Good Co is far reaching. Here, you will find many different voices; we can’t tell our story without telling theirs. Every perspective adds another dimension to who we are and what we mean to the world.</p>
        <div className="relative w-64">
          {/* Dropdown Header */}
          <button
            onClick={toggleDropdown}
            className="flex justify-between items-center w-full py-2 text-left text-gray-600 border-b border-gray-400 focus:outline-none"
          >
            <span className="uppercase text-xs font-semibold">FILTER</span>
            <span className="ml-2">{selectedOption}</span>
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 shadow-lg z-10">
              <ul className="py-1">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer ${option === selectedOption ? 'text-gray-500' : ''
                      }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default StoriesMain