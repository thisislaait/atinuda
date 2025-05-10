'use client'

import React from 'react';
import type { Metadata } from 'next';

import ExpectSection from './summit/components/ExpectSection';
import SummitSpeakers from './summit/components/SummitSpeakers';
import SummitSponsors from './summit/components/SummitSponsors';
import BecomeSponsor from './summit/components/BecomeSponsor';
// import SummitNews from './summit/components/SummitNews';
import BottomNav from './summit/components/Nav/BottomNav';
import SummitHero from './summit/components/SummitHero';
import AboutSummit from './summit/components/AboutSummit';

export const generateMetadata: Metadata = {
  title: 'Atinuda Summit',
  description: 'Join us for the Atinuda Summit, featuring industry leaders, insightful sessions, and networking opportunities.',
  keywords: ['summit', 'luxury', 'conference', 'speakers', 'sponsors', 'atinuda'],
  openGraph: {
    title: 'Atinuda Summit',
    description: 'Join us for the Atinuda Summit, featuring industry leaders, insightful sessions, and networking opportunities.',
    url: 'https://atinuda.com/', // Assuming the root is the summit page
    siteName: 'Atinuda',
    images: [
      {
        url: 'https://atinuda.com/assets/images/summit-og.jpg', // Placeholder image, replace with actual path
        width: 1200,
        height: 630,
        alt: 'Atinuda Summit',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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
    </div>
  );
};

export default SummitPage;
