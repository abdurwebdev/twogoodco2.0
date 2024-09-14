import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const initialRender = useRef(true); // Track the initial render

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false; // Skip scrolling on initial render (refresh)
    } else {
      window.scrollTo(0, 0); // Scroll to top on route change
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
