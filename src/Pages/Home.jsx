import React from 'react'
import Hero from '../Components/LandingPage/Hero/Hero'
import Feature from '../Components/LandingPage/Features/Feature';
import Solution from '../Components/LandingPage/Solutions/Solution';
import FooterPage from '../Components/LandingPage/Footer/FooterPage';
import TestimononialsSection from '../Components/LandingPage/Testimonials/TestimononialsSection';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Solution/>
      <TestimononialsSection/>
      <FooterPage/>
    </div>
  )
}

export default Home