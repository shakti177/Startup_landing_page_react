import React from 'react'
import Hero from '../Components/LandingPage/Hero/Hero'
import Feature from '../Components/LandingPage/Features/Feature';
import Solution from '../Components/LandingPage/Solutions/Solution';
import FooterPage from '../Components/LandingPage/Footer/FooterPage';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Solution/>
      <FooterPage/>
    </div>
  )
}

export default Home