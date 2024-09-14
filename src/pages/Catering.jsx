import React from 'react'
import LandingPage from '../components/LandingPage';
import CateringMainSlogan from '../components/CateringMainSlogan';
import CateringMeal from '../components/CateringMeal';
import CateringPhotos from '../components/CateringPhotos';
import CateringSecondMeal from '../components/CateringSecondMeal';
import CateringReviews from '../components/CateringReviews';
import CateringSecondSlogan from '../components/CateringSecondSlogan';
import CateringThirdPhotos from '../components/CateringThirdPhotos';
import CateringThirdSlogan from '../components/CateringThirdSlogan';
import CateringFourthPhotos from '../components/CateringFourthPhotos';
import CateringFourthSlogan from '../components/CateringFourthSlogan';
import CateringFifthPhoto from '../components/CateringFifthPhoto';
import SwiperReview from '../components/SwiperReview';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Catering = () => {
  return (
    <>
      <Helmet>
        <title>Catering | Two Good Co</title>
      </Helmet>
      <div id='main'>
        <LandingPage />
        <CateringMainSlogan />
        <CateringMeal />
        <CateringPhotos />
        <CateringSecondMeal />
        <CateringReviews />
        <CateringSecondSlogan />
        <CateringThirdPhotos />
        <CateringThirdSlogan />
        <CateringFourthPhotos />
        <CateringFourthSlogan />
        <CateringFifthPhoto />
        <SwiperReview />
        <Footer />
      </div>
    </>
  )
}

export default Catering