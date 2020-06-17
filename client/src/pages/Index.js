import React from 'react';
import NavUpperPart from '../components/NavUpperPart';
import Navbar from '../components/Navbar';
import HomepageSlider from '../components/HomepageSlider';
import MarketAnalysis from '../components/MarketAnalysis';
import OurServices from '../components/HomepageServices';
import HomepageMembers from '../components/HomepageMembers';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className='homepage'>
      <NavUpperPart />
      <Navbar />
      <HomepageSlider />
      <MarketAnalysis />
      <OurServices />
      <HomepageMembers />
      <Footer />
    </div>
  );
};

export default Index;
