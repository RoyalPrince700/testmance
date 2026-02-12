import React from 'react';
import Hero from './HomeSections/Hero';
import Features from './HomeSections/Features';
import HowItWorks from './HomeSections/HowItWorks';
import Stats from './HomeSections/Stats';
import CallToAction from './HomeSections/CallToAction';
import Footer from './HomeSections/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
