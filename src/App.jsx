import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Cards from './components/Cards';
import People from './components/People';
import Products from './components/Products';
import SwiperReview from './components/SwiperReview';
import ReviewMessage from './components/ReviewMessage';
import About from './components/About';
import Email from './components/Email';
import Footer from './components/Footer';
import Shop from '../src/pages/Shop';
import Catering from '../src/pages/Catering';
import Donate from '../src/pages/Donate';
import Wholesale from '../src/pages/Wholesale';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impact from './pages/Impact';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import Abouts from './pages/Abouts';
import SignIn from './pages/SignIn';
import Good from './pages/Good'
import { HelmetProvider } from 'react-helmet-async';
import Foodasked from './pages/Foodasked';
import Placeasked from './pages/Placeasked';
import Pathwayasked from './pages/Pathwayasked';
import Careersasked from './pages/Careersasked';
import ScrollToTop from './components/ScrollToTop';
import ShopCardOne from './pages/ShopCardOne';


const App = () => {


  return (
    <HelmetProvider>
      <div>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            {/* Home page with all static components */}
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                  <Cards />
                  <People />
                  <Products />
                  <SwiperReview />
                  <ReviewMessage />
                  <About />
                  <Email />
                  <Footer />
                </>
              }
            />
            {/* Other pages */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/donate" element={<Donate />} />
            <Route path='/impact' element={<Impact />} />
            <Route path='/stories' element={<Stories />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<Abouts />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/good' element={<Good />} />
            <Route path='/foodasked' element={<Foodasked />} />
            <Route path='/placeasked' element={<Placeasked />} />
            <Route path='/pathwayasked' element={<Pathwayasked />} />
            <Route path='/careersasked' element={<Careersasked />} />
            <Route path='/shopcardone' element={<ShopCardOne />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
