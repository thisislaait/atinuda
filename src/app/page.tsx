'use client'

import React from 'react';

import ExpectSection from './summit/components/ExpectSection';
import SummitSpeakers from './summit/components/SummitSpeakers';
import SummitSponsors from './summit/components/SummitSponsors';
import BecomeSponsor from './summit/components/BecomeSponsor';
// import SummitNews from './summit/components/SummitNews';
import BottomNav from './summit/components/Nav/BottomNav';
import SummitHero from './summit/components/SummitHero';
import AboutSummit from './summit/components/AboutSummit';
import SummitFooter from './summit/components/SummitFooter';

const SummitPage = () => {
  return (
    <div>
      <div className='relative'>
        <SummitHero />
        <BottomNav />
      </div>
      
      <ExpectSection />
      <AboutSummit />
      <SummitSpeakers />
      <SummitSponsors />
      <BecomeSponsor />
      {/* <SummitNews /> */}
      <SummitFooter />
    </div>
  );
};

export default SummitPage;
