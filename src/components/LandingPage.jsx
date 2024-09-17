import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
const LandingPage = () => {
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
    <section data-scroll-section className='w-full  h-auto px-3 overflow-hidden  '>
      <div className='mt-44 main  text-black'>
        <h1 className='text-[14vw] w-fit  overflow-hidden font-extrabold tracking-tighter'>CHANGE</h1>
        <h1 className='text-[14vw]  overflow-hidden  font-extrabold tracking-tighter leading-[14vw]'>THE COURSE</h1>
      </div>
      <div className='mt-10 relative' ref={containerRef}>
        <div ref={cursorRef} className='flex w-28 h-28 absolute top-0 left-0  text-white rounded-full bg-black items-center justify-center'>
          <h1>PLAY</h1>
        </div>
        <video autoPlay loop muted src="https://videos.pexels.com/video-files/852388/852388-hd_1920_1080_24fps.mp4"></video>
      </div>
    </section>
  )
}

export default LandingPage