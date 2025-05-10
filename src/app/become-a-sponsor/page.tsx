import BecomeSponsorForm from "../summit/components/SponsorForm";
import type { Metadata } from 'next';

export const generateMetadata: Metadata = {
  title: 'Become a Sponsor - Atinuda',
  description: 'Become a sponsor for Atinuda events and connect with industry leaders and creative thinkers.',
  keywords: ['sponsor', 'partnership', 'events', 'luxury', 'atinuda'],
  openGraph: {
    title: 'Become a Sponsor - Atinuda',
    description: 'Become a sponsor for Atinuda events and connect with industry leaders and creative thinkers.',
    url: 'https://atinuda.com/become-a-sponsor',
    siteName: 'Atinuda',
    images: [
      {
        url: 'https://atinuda.com/assets/images/sponsor-og.jpg', // Placeholder image, replace with actual path
        width: 1200,
        height: 630,
        alt: 'Become a Sponsor - Atinuda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


export default function BecomeSponsorPage() {
    return (
      <div className="min-h-screen bg-white px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Become a Sponsor</h1>
        <BecomeSponsorForm />
      </div>
    );
  }
