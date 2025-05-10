'use client';

import { useState } from 'react';
import Image from 'next/image';

const JoinWaitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formsubmit.co/ajax/resort@atinuda.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you for joining the waitlist!');
        setFormData({ name: '', company: '', email: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center p-6 sm:p-8">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/assets/images/WalpoleAuction.jpg"
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              className="w-full h-full bg-[#1f2340]"
            />
            <div className="absolute inset-0 bg-[#1f2340]/40"></div>
          </div>
          
          {/* Content Section */}
          <div className="max-w-xl w-full text-center bg-amber-50 text-black bg-opacity-60 p-8 rounded-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 hero-text">Jan 26th 2026</h1>
            <p className="text-sm mb-6">Join the waitlist. Be the first to know when we launch.</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded text-black"
            />
            <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full p-3 rounded text-black"
            />
            <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded text-black"
            />
            <button
                type="submit"
                className="w-full py-3 bg-[#ff7f41] uppercase font-semibold tracking-wider text-white rounded hover:bg-[#e96c30]"
            >
                Join Now
            </button>
            </form>

            {status && <p className="text-sm mt-4">{status}</p>}
      </div>
        </section>
  );
};

export default JoinWaitlist;
