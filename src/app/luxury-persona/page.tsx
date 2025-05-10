import QuizHome from "@/app/summit/components/QuizHome";
import type { Metadata } from 'next';

export const generateMetadata: Metadata = {
  description: 'Discover your luxury persona with our interactive quiz.',
  keywords: ['luxury', 'persona', 'quiz', 'assessment', 'style', 'lifestyle'],
  openGraph: {
    title: 'Discover Your Luxury Persona',
    description: 'Take our interactive quiz to find out your unique luxury persona.',
    url: 'https://atinuda.com/luxury-persona', // Assuming the domain is atinuda.com
    siteName: 'Atinuda',
    images: [
      {
        url: 'https://atinuda.com/assets/images/luxury-persona-og.jpg', // Placeholder image, replace with actual path
        width: 1200,
        height: 630,
        alt: 'Luxury Persona Quiz',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function LuxuryPersonaPage() {
  return (
    <QuizHome />
  );
}
