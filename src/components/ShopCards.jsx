import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
const ShopCards = () => {


  return (
    <section className='w-full relative h-auto px-3 flex flex-col'>
      <div className='grid main-four grid-cols-2 lg:grid-cols-2 space-x-44 gap-5'>
        <div className='flex items-center justify-center'>
          <Link to='/shopcardone'>
            <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format" alt="" />
            <div className='text-center flex-col'>
              <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
              <h2>$380</h2>
            </div>
          </Link>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/ff380ebfee344ff98d24d4156ded6b9dc22a2a2a-5000x5000.png/Change-The-Course-Cookbook-Two-Good-Co.png?w=1024&h=1024&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid main-five grid-cols-2 lg:grid gap-5 lg:grid-cols-3'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=470,108,3458,2760&fp-x=0.4888698630136987&fp-y=0.49614340367765025&w=640&h=511&fit=crop&crop=focalpoint&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/4206e9c3f7ab098369c39a2194b82eeca6bb0664-6166x4111.png/DSC0005_Dexter%20Kim.png?rect=2,0,6162,4111&w=640&h=427&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/5ff174456e7f3a000b5bcdd6768155d29570c39b-5000x5000.png/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='w-full h-40'></div>
      <div className='grid grid-cols-2 main-six  lg:grid-cols-3  gap-5'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/9cf547e7c31316d337093cd1d8dced49d192bdf6-3000x3000.png/Mulberry-Silk-Eye-Mask-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'></div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/7d180ca25ade6277a215b634318056d551de9da8-5000x5000.png/Website%20Products%20(5).png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-seven lg:grid gap-5 lg:grid-cols-3'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/a2e538db8e36e350dceecf8b153f67a51eebd05c-1408x1408.png/Nourish%20&%20Soothe%20Body%20Lotion%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/5ab8af5cab3341a0f327e6959ed036ecbe3dffea-5000x5000.png/Good-Hair-Day-Pack-Expanded-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-eight lg:grid-cols-3  gap-5'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/95feb13b026e5c214debe4aff9f9e417dc648e73-2900x2900.png/Mulberry-Silk-Pillowcase-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'></div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/5708a06a5c62e6ecd938d42647888efd72bc5907-1408x1407.png/Donate-100-meals-to-womens-shelter-two-good-co.png?rect=1,0,1407,1407&w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-nine lg:grid gap-5 lg:grid-cols-3'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/8c93ffd94c3649ac5ae431d9928d606f1b7e80bb-1408x1408.png/Repair%20&%20Shine%20Conditioner%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/8c93ffd94c3649ac5ae431d9928d606f1b7e80bb-1408x1408.png/Repair%20&%20Shine%20Conditioner%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/8c93ffd94c3649ac5ae431d9928d606f1b7e80bb-1408x1408.png/Repair%20&%20Shine%20Conditioner%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-ten lg:grid-cols-3  gap-5'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/eefb2ef705089a970b4d2cee9def01ad8890c7da-4516x4516.png/Change%20the%20Course%20Apron%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'></div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/63474079ab0c7723b75bd63b24d8bbc652349640-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-eleven lg:grid gap-5 lg:grid-cols-3'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/e988fca3e4145b2bf46b9c922a9ef9dccfb8af16-1408x1407.png/Two%20Hugs%20Room%20Spray%20Two%20Good%20Co.png?rect=1,0,1407,1407&w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/1df8554d2e45b3e1ced4cd4e2c6ae9881e195cbd-5000x5000.png/In-The-Roundhouse-Two-Good-Co-Plate-Set.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-twelve lg:grid-cols-3  gap-5'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/cb56cd5aa6722fc293f654013276b73581c4e25e-1408x1407.png/Two%20Kisses%20Candle%20Two%20Good%20Co.png?rect=1,0,1407,1407&w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'></div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-thirteen lg:grid gap-5 lg:grid-cols-3'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/eaafdc2d7f8aa1132efd5214cf4ddafa00a6b02b-5000x5000.png/In-The-Roundhouse-Two-Good-Co-Plate.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/02240d01db2e8bdc5c630e9832ff7e0c7614f733-1876x1876.png/Cookbook-Two-Recipes-For-Resilience-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/9abbc4a8506716e15d8b5c9fd2845222060e8c77-2523x2354.png/Eggplant-Kasundi-Two-Good-Co.png?rect=0,1,2523,2353&w=640&h=597&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-fourteen lg:grid gap-5 lg:grid-cols-3'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/8c6345e689f2b4db8ef6103a2741513a306bec35-2545x2431.png/Spicy-Tomato-Jam-Two-Good-Co.png?rect=0,1,2545,2430&w=640&h=611&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/13249c575ec7e3ca88f5301b8337bc74cadbcef7-2505x2505.png/Harissa-Two-Good-Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/806a2f5e4cbbee3b6a94e5560e7f69e5f5e7983d-1408x1408.png/Cleanse%20&%20Hydrate%20Shampoo%205L%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-fifteen lg:grid gap-5 lg:grid-cols-3'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/3dab242fa3387f3fc93a1663d944ff8fab1d00a7-2900x2900.png/Donate-20-meals-womens-shelter-two-good-co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/824570b2e84d0680e91d6f8dddd97a06a7f349d2-2748x2748.png/Donate-10-meals-to-womens-shelter-two-good-co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/191fb1c3aff66e559d8bf9933f54bcd85d33ede5-1455x1455.png/Donate-a-meal-to-womens-shelter-two-good-co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-sixteen lg:grid gap-5 lg:grid-cols-3'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/ee5740c1b1c4bd350cb3ae562cc3addb7bc28111-1408x1408.png/Cleanse%20&%20Nourish%20Body%20Wash%205L%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/7bafaed4be2a91f26b1f5ff41cd7b9effb609e69-1408x1408.png/Repair%20&%20Shine%20Conditioner%205L%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/4510fc62eb28e605f8f47e823466e26d34e37371-1408x1408.png/Nourish%20&%20Soothe%20Body%20Lotion%205L%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 main-seventeen lg:grid gap-5 lg:grid-cols-3'>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/a49dd4c1ac1cf2d941ddbb0129b8d7f04b6983aa-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%205L%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/8c537553ae280c8e01db02c245d4b49d97dbc853-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%205L%20Two%20Good%20Co.png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-96 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/55cf0869df62b00e47049a7d6011d07deebde040-5000x5000.png/Website%20Products%20(14).png?w=640&h=640&auto=format" alt="" />
          <div className='text-center flex-col'>
            <h2>JAC + JACK BUY 1 GIVE 1 BLANKET-GREY/RUST</h2>
            <h2>$380</h2>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ShopCards