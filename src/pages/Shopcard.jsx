import React from 'react'
import Email from '../components/Email'
import Footer from '../components/Footer'
const Shopcard = () => {

  return (
    <>
      <div className='px-3'>
        <section className='grid grid-cols-1 lg:grid lg:grid-cols-4 mt-40 lg:space-x-5 text-[#E6622B] w-full '>
          <div className=' lg:w-44'>
            <h1 className='text-[#E6622B] font-bold tracking-tighter text-[6vw] lg:text-[4vw] lg:leading-[4vw] leading-[6vw]'>CHANGE THE COURSE COOKBOOK</h1>
            <div className='rounded-full w-64 flex text-white items-center justify-between  px-3 h-10 mt-20 bg-[#E6622B]'>
              <div className='flex gap-x-5 items-center justify-between'>
                <button>-</button>
                <h4>1</h4>
                <button>+</button>
              </div>
              <div>
                <h4>$45</h4>
              </div>
              <div>
                <h4>ADD TO CART</h4>
              </div>
            </div>
          </div>
          <div >
            <img src="https://cdn.sanity.io/images/w8f1ak3c/production/ff380ebfee344ff98d24d4156ded6b9dc22a2a2a-5000x5000.png/Change-The-Course-Cookbook-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
          </div>
          <div className='flex w-24 gap-y-5 flex-col lg:h-96 items-start justify-between'>
            <div>
              <h3 className='text-xs'>Info</h3>
            </div>
            <div>
              <h3 className='text-xs'>NITTY GRITTIES</h3>
            </div>
          </div>
          <div className='flex flex-col gap-y-3'>
            <p>
              In our third cookbook, we pay homage to our origins; our core belief that having less time or money should never mean less love and nourishment. That good food prepared with care is a universal act of love - and self love - with the power to change the course of someone's life.</p>
            <p>The recipes within CHANGE THE COURSE are shorter, the ingredients are simpler, and the techniques more adaptable...all designed to help you achieve the same goodness with less.</p>
            <div className='lg:mt-5'>
              <p>Hardcover, 214 pages, 100+ Recipes.</p>
              <button>VIEW ALL</button>
            </div>
          </div>
        </section>
        <div className='flex mt-5 border-t border-[#E6622B] items-center text-[#E6622B] justify-between'>
          <h3 className='text-xs'>$45</h3>
          <h3 className='text-xs'>50% of profits reinvested into the Two Good Foundation</h3>
        </div>
        <div className='mt-20 w-96'>
          <h1 className='text-[8vw] lg:text-[3vw] lg:leading-[3vw] tracking-tighter leading-[8vw] font-bold'>ALL THE GOODIES IN YOUR CHANGE THE COURSE COOK KIT.</h1>
        </div>
        <div className='lg:grid mt-9 lg:space-x-20 lg:grid-cols-3'>
          <div className='lg:border-l'>
            <div className='flex items-start flex-col gap-y-5'>
              <button>CHANGE THE COURSE COOKBOOK</button>
              <button>CHANGE THE COURSE APRON</button>
            </div>
          </div>
          <div className='lg:flex lg:flex-col mt-5'>
            <div className='lg:flex lg:gap-x-5 lg:items-start lg:justify-between'>
              <h3 className='text-xs lg:mt-1'>INFO</h3>
              <p>In our third cookbook, we pay homage to our origins; our core belief that having less time or money should never mean less love and nourishment. That good food prepared with care is a universal act of love - and self love - with the power to change the course of someone's life. With shorter recipes, simpler ingredients and adaptable techniques, this cookbook has been carefully crafted to help you achieve goodness with less.</p>
            </div>
            <div className='lg:flex lg:mt-5 mt-5 lg:gap-x-5 lg:items-start lg:justify-between'>
              <h3 className='text-xs lg:mt-1'>NITTY</h3>
              <p>In our third cookbook, we pay homage to our origins; our core belief that having less time or money should never mean less love and nourishment. That good food prepared with care is a universal act of love - and self love - with the power to change the course of someone's life. With shorter recipes, simpler ingredients and adaptable techniques, this cookbook has been carefully crafted to help you achieve goodness with less.</p>
            </div>
          </div>
          <div>
            <img src="https://cdn.sanity.io/images/w8f1ak3c/production/ff380ebfee344ff98d24d4156ded6b9dc22a2a2a-5000x5000.png/Change-The-Course-Cookbook-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
          </div>
        </div>
        <div className='lg:flex lg:flex-row flex flex-col items-center justify-center lg:mt-5 lg:items-start lg:justify-start lg:gap-x-28'>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/86e1799b04328810182706add2941f4432fb04bf-3000x2000.png/2.png?rect=1,0,2998,2000&w=640&h=427&auto=format" className='w-96 object-cover' alt="" />
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d63c4f41d27ba7bde34313633dc27f495712f3f7-3000x2000.png/1.png?rect=1,0,2998,2000&w=640&h=427&auto=format" className='w-96 object-cover' alt="" />
        </div>
        <div className='lg:flex lg:mt-5 lg:items-end lg:justify-end '>
          <div>
            <img src="https://cdn.sanity.io/images/w8f1ak3c/production/3b2358f94b1b64cc35da97a2170455616f3e90b9-2268x1500.jpg/0_DPS_FeastTeamLunch8453.jpg?rect=1,0,2267,1500&w=1280&h=847&auto=format" className='w-[800px] h-[500px] object-cover' alt="" />
          </div>
        </div>
        <div className='lg:flex flex-col gap-y-5 flex items-center mt-10 justify-center lg:mt-5 lg:flex-row lg:items-start lg:justify-start lg:gap-x-10'>
          <div>
            <img src="https://cdn.sanity.io/images/w8f1ak3c/production/6fd0e86da21c43bddf65403503ad03e9d113cf66-1500x1500.jpg/Change%20the%20Course%20Apron%20Two%20Good%20Co.jpg?rect=188,0,1125,1500&w=640&h=853&fit=min&auto=format" className='w-[400px] object-cover' alt="" />
          </div>
          <div>
            <img src="https://cdn.sanity.io/images/w8f1ak3c/production/60f921ea2bfe490841d048d149207013fa2f14cf-1000x1500.jpg/Change%20the%20Course%20Apron%20Two%20Good%20Co.jpg?rect=0,84,1000,1333&w=640&h=853&fit=min&auto=format" className='w-[400px] object-cover' alt="" />
          </div>
        </div>
        <div className='lg:flex mt-5 lg:mt-5 lg:items-end lg:justify-end'>
          <div>
            <img src="https://cdn.sanity.io/images/w8f1ak3c/production/acf86aeb8582b3722f9dd7e3bf4e30bc90028ad6-3000x1461.png/Change-The-Course-Cookbook-TGC.png?rect=0,1,3000,1460&w=1280&h=623&auto=format" className='object-cover w-[900px]' alt="" />
          </div>

        </div>
        <div className='lg:flex lg:flex-row flex flex-col items-center justify-center lg:mt-5 lg:items-start lg:justify-start lg:gap-x-28'>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/f5d642a7a841a87f8315e60805e30b2adf61783e-3000x2000.png/3.png?rect=1,0,2998,2000&w=640&h=427&auto=format" className='w-96 object-cover' alt="" />
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/4e69ed7258b0987e8a12cac1f23c223a95f260f7-3000x2000.png/4.png?rect=1,0,2998,2000&w=640&h=427&auto=format" className='w-96 object-cover' alt="" />
        </div>
        <div className='lg:flex lg:mt-10 lg:items-end lg:justify-end lg:mr-10 mt-10'>
          <div className='lg:flex lg:flex-col lg:gap-y-5'>
            <h1 className='lg:text-[3vw] text-[5vw] leading-[5vw] lg:w-[500px] lg:tracking-tighter lg:leading-[3vw]'>With every purchase, you have the potential to change the course of a woman’s life.</h1>
            <div className='lg:py-3 lg:border-t lg:border-slate-400 lg:flex-col lg:w-[500px] lg:gap-y-5 '>
              <p>DOING GOOD.</p>
              <p className='mt-10'>Every dollar you spend is a vote for a world you want to live in. With every single purchase made across Two Good Co, 50% of profits is reinvested into the Two Good Foundation, to support our donations and employment programs for women at risk of homelessness.</p>
              <button className='text-xs border-b py-2 border-black mt-20'>ALL THE IMPACT WE'VE MADE SO FAR.</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start mt-10 justify-start'>
          <h1 className='lg:text-[4vw]'>YOU MIGHT ALSO LIKE</h1>
          <div className='w-full lg:flex lg:items-center lg:justify-between'>
            <div className='lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-3'>
              <img src="https://cdn.sanity.io/images/w8f1ak3c/production/4206e9c3f7ab098369c39a2194b82eeca6bb0664-6166x4111.png/DSC0005_Dexter%20Kim.png?rect=2,0,6162,4111&w=640&h=427&auto=format" className='lg:h-[410px] object-cover' alt="" />
              <h5 className='text-base text-center'>THE COOKBOOK DUPO KIT</h5>
              <h6 className='text-xs text-center'>$25</h6>
            </div>
            <div className='lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-3'>
              <img src="https://cdn.sanity.io/images/w8f1ak3c/production/02240d01db2e8bdc5c630e9832ff7e0c7614f733-1876x1876.png/Cookbook-Two-Recipes-For-Resilience-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
              <h5 className='text-base text-center'>THE COOKBOOK DUPO KIT</h5>
              <h6 className='text-xs text-center'>$25</h6>
            </div>
            <div className='lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-3'>
              <img src="https://cdn.sanity.io/images/w8f1ak3c/production/7a2007de38624a0b2935416bf51a4584889aa232-5000x5000.png/Website%20Products%20(12).png?w=640&h=640&auto=format" alt="" />
              <h5 className='text-base text-center'>THE COOKBOOK DUPO KIT</h5>
              <h6 className='text-xs text-center'>$25</h6>
            </div>
          </div>
        </div>
        <Email />
        <Footer />
      </div>
    </>
  )
}

export default Shopcard