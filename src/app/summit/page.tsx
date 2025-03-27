'use client'

import React from 'react';

import ExpectSection from './components/ExpectSection';
import SummitSpeakers from './components/SummitSpeakers';
import SummitSponsors from './components/SummitSponsors';
import BecomeSponsor from './components/BecomeSponsor';
import SummitNews from './components/SummitNews';
import BottomNav from './components/Nav/BottomNav';
import SummitHero from './components/SummitHero';
import AboutSummit from './components/AboutSummit';
import SummitFooter from './components/SummitFooter';

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
      <SummitNews />
      <SummitFooter />
    </div>
  );
};

export default SummitPage;
