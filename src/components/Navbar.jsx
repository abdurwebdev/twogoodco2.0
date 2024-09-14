import React, { useRef, useState } from 'react'
import { AiOutlineCarryOut, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
const Navbar = () => {
  const [color, setColor] = useState(false);
  const [icon, setIcon] = useState(true);
  const [cart, setCart] = useState(true);
  const mainRef = useRef();
  const cartRef = useRef();
  const handleMenuOpen = () => {
    mainRef.current.style.transform = "translateY(0)";
    setColor(true);
    setIcon(false);
  }
  const handleMenuClose = () => {
    mainRef.current.style.transform = "translateY(-100%)";
    setColor(false);
    setIcon(true);
  }
  const handleCartData = () => {
    cartRef.current.style.transform = "translateY(0)";
    setCart(true);
    setColor(true);
  }
  const handleCartClose = () => {
    cartRef.current.style.transform = "translateY(-100%)";
    setCart(false);
    setColor(false);
  }

  return (
    <>
      <div ref={cartRef} className='w-full z-50 translate-y-[-300%] h-screen bg-black flex flex-col items-center justify-center absolute gap-y-3 transition-all duration-1000 ease-in-out top-0 left-0'>
        <div className='mt-36'>
          <h3 className='text-[3vw] text-white'>Your Cart Is Empty</h3>
        </div>
        <div>
          <button className='font-bold uppercase py-3 px-5 rounded-full text-white border-2 border-white hover:transition-all hover:text-black hover:bg-white'>SEE ALL GOOD THINGS</button>
        </div>
        <Marquee direction='right' className='noscrollbar mt-36 border-t-2 border-white border-b-2 '>
          <h1 className='text-white text-[6vw] font-bold ml-8'>CART</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>CART</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>CART</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>CART</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>CART</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>CART</h1>
        </Marquee>
        <Marquee className='noscrollbar mt-0 border-t-2 border-white border-b-2 '>
          <h1 className='text-white text-[6vw] font-bold ml-8'>EMPTY</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>EMPTY</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>EMPTY</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>EMPTY</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>EMPTY</h1>
          <h1 className='text-white text-[6vw] font-bold ml-8'>EMPTY</h1>
        </Marquee>
      </div>
      <div ref={mainRef} className='w-full z-40 h-screen translate-y-[-100%] bg-black overflow-hidden transition-all duration-1000 ease-in-out top-0 absolute'>
        <div className='absolute right-5 flex flex-col text-right top-24 text-white'>
          <Link to='/shop' onClick={handleMenuClose}>
            <h1 className='text-[5vw] font-bold leading-[4vw]'>SHOP</h1>
          </Link>
          <Link to='/wholesale' onClick={handleMenuClose}>
            <h1 className='text-[5vw] font-bold leading-[4vw]'>WHOLESALE</h1>
          </Link>
          <Link to='/catering' onClick={handleMenuClose}>
            <h1 className='text-[5vw] font-bold leading-[4vw]'>CATERING</h1>
          </Link>
          <Link to="/impact" onClick={handleMenuClose}>
            <h1 className='text-[5vw] font-bold leading-[4vw]'>IMPACT</h1>
          </Link>
          <Link to="/stories" onClick={handleMenuClose}>
            <h1 className='text-[5vw] font-bold leading-[4vw]'>STORIES</h1>
          </Link>
          <Link to='/about' onClick={handleMenuClose}>
            <h1 className='text-[5vw] font-bold leading-[4vw]'>ABOUT</h1>
          </Link>
          <Link to='/contact' onClick={handleMenuClose}>
            <h1 className='text-[5vw] font-bold leading-[4vw]'>CONTACT</h1>
          </Link>
          <h1 className='text-[5vw] font-bold leading-[4vw]'>DONATE</h1>
          <Link to='/signin' onClick={handleMenuClose}>
            <h1 className='text-[5vw] font-bold leading-[4vw]'>SIGN IN</h1>
          </Link>
        </div>
        <div className='grid grid-cols-3   lg:absolute lg:order-1 absolute bottom-0  lg:mt-96 text-white left-14 '>
          <div className='flex flex-col gap-y-1'>
            <h1 className='mb-2 text-xs'>CONNECT WITH US</h1>
            <h1>Facebook</h1>
            <h1>Instagram</h1>
            <h1>Twitter</h1>
            <h1>Linkedin</h1>
            <h1>Youtube</h1>
          </div>
          <div className='flex flex-col  gap-y-1 space-x-3'>
            <h1 className='mb-2 text-xs'>CNITTY GRITTIES</h1>
            <h1>Good Things FAQs</h1>
            <h1>Good Food FAQs</h1>
            <h1>Good Places</h1>
          </div>
          <div className='flex flex-col ml-3 gap-y-1'>
            <h1 className='mb-2 text-xs'>GETTING STARTED</h1>
            <h1>Pathways</h1>
            <h1>Carreers</h1>
          </div>
        </div>
      </div>
      <nav className={`w-full fixed top-0  z-50 px-3 py-3 flex items-center ${color ? 'text-white' : 'text-black'} text-black justify-between`}>
        <div>
          <svg width="80" height="83" viewBox="0 0 106 83" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0_2228_162)"><path d="M5.50062 6.4473H0V0.557617H17.7807V6.4473H12.2464V25.4842H5.50062V6.4473Z" fill="currentColor"></path><path d="M43.2791 12.4126C43.8662 14.6434 44.027 15.8982 44.0756 16.0715C44.386 14.504 44.629 13.2831 44.8235 12.4126L47.7402 0.56543H54.5571L47.5682 25.492H41.3047L38.2609 14.8582C38.0889 14.2327 37.8122 13.1173 37.4307 11.512C37.1204 12.8008 36.8773 13.9161 36.6006 14.8582L33.6091 25.492H27.3307L20.3418 0.56543H27.1549L29.9931 12.488C30.3035 13.7428 30.5466 14.9976 30.741 16.2185C30.9803 14.9298 31.2944 13.675 31.6048 12.488L34.7309 0.56543H40.1642L43.2791 12.4126Z" fill="currentColor"></path><path d="M76.5219 22.3113C74.173 24.6188 71.066 25.9784 67.7892 26.1326C64.5124 26.2867 61.2932 25.2248 58.7412 23.1478C57.3228 22.0067 56.1618 20.5745 55.3351 18.9463C54.5085 17.3181 54.0353 15.5313 53.9468 13.7045C53.8584 11.8778 54.1568 10.053 54.8223 8.35149C55.4877 6.64996 56.5049 5.11064 57.8063 3.83585C60.3099 1.37646 63.6678 0 67.1641 0C70.6604 0 74.0184 1.37646 76.5219 3.83585C77.7366 5.04162 78.7013 6.47878 79.3597 8.06372C80.0181 9.64865 80.3572 11.3497 80.3572 13.0679C80.3572 14.7861 80.0181 16.4872 79.3597 18.0721C78.7013 19.6571 77.7366 21.0942 76.5219 22.3V22.3113ZM73.6164 13.0604C73.6164 9.01712 70.9166 5.73879 67.1473 5.73879C63.378 5.73879 60.6782 8.98321 60.6782 13.0604C60.6782 17.1376 63.2023 20.382 67.1473 20.382C70.9876 20.382 73.6164 17.1413 73.6164 13.0604Z" fill="currentColor"></path><path d="M12.8 39.1893H26.0486C26.086 39.7131 26.086 40.203 26.086 40.6966C26.086 49.3069 21.2436 54.1905 13.2151 54.1905C9.27008 54.1905 6.19257 53.0374 3.70215 50.4939C1.3102 47.9834 -0.0176051 44.6329 0.000176313 41.1525C0.000176313 33.586 5.60923 28.1108 13.2151 28.1108C18.024 28.1108 21.797 30.0665 24.3547 33.8649L18.5101 36.6872C17.1265 34.7692 15.3952 33.831 13.2151 33.831C9.27008 33.831 6.71235 36.6194 6.71235 41.4314C6.71235 46.2434 9.23643 49.0658 13.2151 49.0658C16.7114 49.0658 19.1645 47.1138 19.5122 44.4271H12.7814L12.8 39.1893Z" fill="currentColor"></path><path d="M49.8502 50.4146C47.3392 52.8731 43.9766 54.249 40.4756 54.2506C37.4173 54.2246 34.4566 53.1629 32.0695 51.2361C30.6511 50.0946 29.49 48.662 28.6633 47.0335C27.8366 45.405 27.3634 43.6179 27.275 41.7909C27.1865 39.9638 27.485 38.1388 28.1504 36.4369C28.8159 34.7351 29.8332 33.1954 31.1347 31.9203C33.6382 29.4609 36.9961 28.0845 40.4924 28.0845C43.9887 28.0845 47.3467 29.4609 49.8502 31.9203C51.0649 33.1261 52.0296 34.5632 52.688 36.1482C53.3465 37.7331 53.6855 39.4342 53.6855 41.1524C53.6855 42.8706 53.3465 44.5717 52.688 46.1566C52.0296 47.7415 51.0649 49.1787 49.8502 50.3845V50.4146ZM46.9447 41.1486C46.9447 37.1054 44.2486 33.827 40.4756 33.827C36.7026 33.827 34.0065 37.0677 34.0065 41.1486C34.0065 45.2296 36.5306 48.4702 40.4756 48.4702C44.316 48.4702 46.9447 45.2258 46.9447 41.1486Z" fill="currentColor"></path><path d="M77.5629 50.4146C75.0506 52.871 71.6888 54.2466 68.1883 54.2506C65.129 54.224 62.1672 53.1624 59.7784 51.2361C58.3608 50.094 57.2004 48.6611 56.3745 47.0324C55.5485 45.4038 55.0758 43.6168 54.9877 41.7899C54.8997 39.9631 55.1983 38.1383 55.8637 36.4366C56.5292 34.735 57.5462 33.1955 58.8473 31.9203C61.3509 29.4609 64.7088 28.0845 68.2051 28.0845C71.7014 28.0845 75.0594 29.4609 77.5629 31.9203C78.7776 33.1261 79.7423 34.5632 80.4007 36.1482C81.0591 37.7331 81.3982 39.4342 81.3982 41.1524C81.3982 42.8706 81.0591 44.5717 80.4007 46.1566C79.7423 47.7415 78.7776 49.1787 77.5629 50.3845V50.4146ZM74.6574 41.1486C74.6574 37.1054 71.9576 33.827 68.1883 33.827C64.419 33.827 61.7192 37.0677 61.7192 41.1486C61.7192 45.2296 64.2433 48.4702 68.1883 48.4702C72.0286 48.4702 74.6574 45.2258 74.6574 41.1486Z" fill="currentColor"></path><path d="M83.7168 28.6606H89.6699C94.2693 28.6606 97.9713 28.7322 101.225 31.0346C104.336 33.2277 105.996 36.6869 105.996 41.1447C105.996 45.6024 104.336 49.0202 101.225 51.2547C98.1134 53.4893 94.718 53.5872 90.601 53.5872H83.7168V28.6606ZM91.5358 48.0103C96.6924 48.0103 99.1492 46.0245 99.1492 41.1447C99.1492 36.1933 96.6214 34.2413 91.5358 34.2413H90.3953V48.0103H91.5358Z" fill="currentColor"></path><path d="M18.9586 65.171C17.16 63.1474 15.4287 62.1564 13.2486 62.1564C9.34095 62.1564 6.74583 65.171 6.74583 69.3725C6.74583 73.2085 9.3073 76.3097 13.2486 76.3097C15.4287 76.3097 17.16 75.3338 18.9586 73.2952V80.7524C16.9763 81.7756 14.784 82.3175 12.5568 82.3351C5.25756 82.3351 0 76.777 0 69.2481C0 61.7193 5.25756 56.1763 12.5568 56.1763C14.7828 56.1891 16.975 56.7259 18.9586 57.7438V65.171Z" fill="currentColor"></path><path d="M42.4125 78.5214C40.0636 80.8289 36.9566 82.1885 33.6798 82.3426C30.403 82.4968 27.1838 81.4349 24.6318 79.3579C23.2135 78.2168 22.0524 76.7846 21.2258 75.1564C20.3991 73.5282 19.9259 71.7413 19.8375 69.9146C19.749 68.0879 20.0475 66.2631 20.7129 64.5616C21.3783 62.86 22.3956 61.3207 23.697 60.0459C26.1996 57.5922 29.5536 56.2192 33.0454 56.2192C36.5372 56.2192 39.8912 57.5922 42.3938 60.0459C43.6085 61.2517 44.5732 62.6889 45.2316 64.2738C45.8901 65.8587 46.2291 67.5598 46.2291 69.278C46.2291 70.9962 45.8901 72.6973 45.2316 74.2822C44.5732 75.8671 43.6085 77.3043 42.3938 78.5101L42.4125 78.5214ZM39.4883 69.2704C39.4883 65.2272 36.7922 61.9489 33.0192 61.9489C29.2462 61.9489 26.5501 65.1933 26.5501 69.2704C26.5501 73.3476 29.0742 76.5921 33.0192 76.5921C36.8596 76.5921 39.4883 73.3514 39.4883 69.2704Z" fill="currentColor"></path><path d="M49.8936 75.4543C50.5724 75.4475 51.238 75.6443 51.8057 76.0194C52.3733 76.3946 52.8176 76.9313 53.082 77.5614C53.3464 78.1915 53.4191 78.8865 53.2908 79.5583C53.1624 80.2301 52.8389 80.8483 52.3612 81.3344C51.8835 81.8205 51.2733 82.1526 50.608 82.2886C49.9426 82.4246 49.2522 82.3582 48.6244 82.098C47.9965 81.8378 47.4596 81.3954 47.0817 80.8271C46.7038 80.2587 46.502 79.59 46.502 78.9059C46.498 77.9951 46.853 77.12 47.4889 76.4728C48.1249 75.8256 48.9898 75.4593 49.8936 75.4543Z" fill="currentColor"></path></g><defs><clipPath id="clip0_2228_162"><rect width="106" height="82.3538" fill="white"></rect></clipPath></defs></svg>
        </div>
        <div className={`links lg:inline-flex ${color ? 'text-white' : 'text-black'} gap-x-3 hidden`}>
          <Link to="/shop">
            <h2 className='text-xs'>SHOP</h2>
          </Link>
          <Link to="/wholesale">
            <h2 className='text-xs'>WHOLESALE</h2>
          </Link>
          <Link to="/catering">
            <h2 className='text-xs'>CATERING</h2>
          </Link>
          <Link to="/donate">
            <h2 className='text-xs'>DONATE</h2>
          </Link>
        </div>
        <div className='flex w-44 h-12 bg-black px-5  justify-between text-white rounded-full items-center gap-x-20'>
          <div>
            {icon ? <AiOutlineMenu onClick={handleMenuOpen} /> : <AiOutlineClose onClick={handleMenuClose} />}
          </div>
          <div>
            {cart ? <AiOutlineCarryOut onClick={handleCartClose} /> : <BsCart2 onClick={handleCartData} />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar