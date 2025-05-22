// pages/success.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Optional: Redirect to home after a delay
    // const timer = setTimeout(() => router.push('/'), 10000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div id="hero" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white p-6 sm:p-8">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="/assets/images/bannerdesign.png"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                className="w-full h-full bg-[#1f2340]"
              />
              <div className="absolute inset-0 bg-[#1f2340] opacity-60"></div>
            </div>
            
            {/* Content Section */}
            <div className="text-3xl md:text-4xl font-serif text-white mb-4 hero-text z-50">
              <h1 className="text-3xl md:text-4xl font-serif text-white mb-4 hero-text">
                Thank You for Your Purchase
              </h1>
              <p className="text-white mb-6">
                Your ticket(s) for Atinuda 2025 have been successfully reserved.
                A confirmation email has been sent to your inbox.
              </p>
              <button
                onClick={() => router.push('/')}
                className="mt-4 px-6 py-2 bg-white text-[#090706] font-semibold rounded hover:bg-gray-100 transition"
              >
                Return Home
              </button>
            </div>
    </div>
  );
}
