import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Products = () => {
  const containerRef = useRef();
  const cursorRef = useRef();
  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1
      })
    }
    const handleMouseaLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0
      })
    }
    const handleMouseMove = (events) => {
      gsap.to(cursorRef.current, {
        x: events.x,
        y: events.y
      })
    }
    const container = containerRef.current;
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseaLeave);
    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseaLeave);
      container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [])
  return (
    <section ref={containerRef} className='w-full overflow-hidden relative mt-8 px-3 flex flex-col '>
      <div ref={cursorRef} className='absolute z-0 top-0 left-0 w-96 h-96 rounded-full bg-red-300/100'></div>
      <div className='flex z-50 items-center justify-center gap-x-20'>
        <div className='flex flex-col text-center text-xs'>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format" className='w-96 h-96 object-cover' alt="" />
          <h6>JAC + JAC 1,BUY 1 GIVE 1 BLANKET-GREY/RUST</h6>
          <h6>380$</h6>
        </div>
        <div className='flex z-50 flex-col text-center text-xs'>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/7d180ca25ade6277a215b634318056d551de9da8-5000x5000.png/Website%20Products%20(5).png?w=1024&h=1024&auto=format" alt="" className='w-96 h-96 object-cover' />
          <h6>JAC + JAC 1,BUY 1 GIVE 1 BLANKET-GREY/RUST</h6>
          <h6>380$</h6>
        </div>

      </div>
      <div className='flex z-50 items-center justify-center gap-x-20'>
        <div className='flex flex-col text-center text-xs'>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=1024&h=1024&auto=format" className='w-96 h-96 object-cover' alt="" />
          <h6>JAC + JAC 1,BUY 1 GIVE 1 BLANKET-GREY/RUST</h6>
          <h6>380$</h6>
        </div>
        <div className='flex z-50 flex-col text-center text-xs'>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/5ff174456e7f3a000b5bcdd6768155d29570c39b-5000x5000.png/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format" className='w-96 h-96 object-cover' alt="" />
          <h6>JAC + JAC 1,BUY 1 GIVE 1 BLANKET-GREY/RUST</h6>
          <h6>380$</h6>
        </div>

      </div>
    </section>
  )
}

export default Products