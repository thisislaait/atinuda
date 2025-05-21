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
    <div className="min-h-screen bg-[#81D8D0] flex flex-col items-center justify-center text-center px-6">
      <Image
        src="/assets/images/tiffany-box.png" // Replace with your image path
        alt="Tiffany Gift Box"
        width={120}
        height={120}
        className="mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-serif text-white mb-4 hero-text">
        Thank You for Your Purchase
      </h1>
      <p className="text-white mb-6">
        Your ticket(s) for Atinuda 2025 have been successfully reserved.
        A confirmation email has been sent to your inbox.
      </p>
      <button
        onClick={() => router.push('/')}
        className="mt-4 px-6 py-2 bg-white text-[#81D8D0] font-semibold rounded hover:bg-gray-100 transition"
      >
        Return Home
      </button>
    </div>
  );
}
