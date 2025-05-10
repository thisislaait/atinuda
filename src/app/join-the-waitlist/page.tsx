'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const generateMetadata: Metadata = {
  title: 'Join the Waitlist - Atinuda Mauritius 2026',
  description: 'Join the waitlist for Atinuda Mauritius 2026. Be the first to know when we launch.',
  keywords: ['waitlist', 'mauritius', '2026', 'atinuda', 'luxury', 'event'],
  openGraph: {
    title: 'Join the Waitlist - Atinuda Mauritius 2026',
    description: 'Join the waitlist for Atinuda Mauritius 2026. Be the first to know when we launch.',
    url: 'https://atinuda.com/join-the-waitlist',
    siteName: 'Atinuda',
    images: [
      {
        url: 'https://atinuda.com/assets/images/mauritius.jpg', // Placeholder image, replace with actual path
        width: 1200,
        height: 630,
        alt: 'Join the Waitlist - Atinuda Mauritius 2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


const JoinWaitlist = () => {
    type FormDataType = {
        name: string;
        company: string;
        email: string;
        goals: string;
        activities: string[];
        dietary: string;
        accommodation: string;
        location: string;
        earlybird: string;
      };
      
      const [formData, setFormData] = useState<FormDataType>({
        name: '',
        company: '',
        email: '',
        goals: '',
        activities: [],
        dietary: '',
        accommodation: '',
        location: '',
        earlybird: '',
      });
      

  const [status, setStatus] = useState('');

  const inputClass =
    'w-full p-2 border-b border-white/40 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-white transition duration-300';

const selectClass = "w-full p-2 bg-white text-black border-b border-white/40 focus:outline-none focus:border-white transition duration-300 rounded-md";

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
        setFormData({
          name: '',
          company: '',
          email: '',
          goals: '',
          activities: [],
          dietary: '',
          accommodation: '',
          location: '',
          earlybird: '',
        });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-start text-left p-6 sm:p-8">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/Mauritius2.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-[#1f2340]/40"></div>
      </div>

      <div className="max-w-xl w-full mt-36 bg-white/10 backdrop-blur-md border border-white/30 shadow-lg text-black p-6 sm:p-8 rounded-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 hero-text">Mauritius 2026</h1>
        <p className="text-sm mb-6 text-white">Join the waitlist. Be the first to know when we launch.</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Company Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={inputClass}
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />

          {/* Goals */}
          <select
            required
            value={formData.goals}
            onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
            className={selectClass} 
          >
            <option value="">What do you hope to gain?</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Networking">Networking</option>
            <option value="Business Growth">Business Growth</option>
            <option value="Wellness">Wellness</option>
          </select>

          {/* Activities */}
          <div>
            <p className="mb-1">Preferred Activities:</p>
            {['Yoga', 'Adventure Tours', 'Workshops', 'Fireside Chats', 'Spa Treatments'].map((activity) => (
              <label key={activity} className="block text-sm">
                <input
                  type="checkbox"
                  value={activity}
                  checked={formData.activities.includes(activity)}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...formData.activities, activity]
                      : formData.activities.filter((a) => a !== activity);
                    setFormData({ ...formData, activities: updated });
                  }}
                  className="mr-2"
                />
                {activity}
              </label>
            ))}
          </div>

          {/* Dietary Preferences */}
          <select
            required
            value={formData.dietary}
            onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
            className={selectClass}
          >
            <option value="">Dietary Preferences</option>
            <option value="None">None</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Halal">Halal</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Other">Other</option>
          </select>

          {/* Accommodation */}
          <div>
            <p className="mb-1">Accommodation Preference:</p>
            {['Private Room', 'Shared Room', 'No Preference'].map((opt) => (
              <label key={opt} className="block text-sm">
                <input
                  type="radio"
                  name="accommodation"
                  value={opt}
                  checked={formData.accommodation === opt}
                  onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Location */}
          <input
            type="text"
            placeholder="Where are you traveling from?"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className={inputClass}
          />

          {/* Early Bird */}
          <div>
            <p className="mb-1">Interested in early bird or referral rewards?</p>
            {['Yes', 'No'].map((opt) => (
              <label key={opt} className="inline-block mr-4 text-sm">
                <input
                  type="radio"
                  name="earlybird"
                  value={opt}
                  checked={formData.earlybird === opt}
                  onChange={(e) => setFormData({ ...formData, earlybird: e.target.value })}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-4">
            <button
              type="submit"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7f41] text-white"
            >
              <ArrowRight size={20} />
            </button>

              <motion.a
                whileHover={{ backgroundColor: '#ff7f41' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="relative px-6 py-2 border border-gray-500 text-white font-medium nav-text uppercase cursor overflow-hidden group"
              >
                <span className="relative z-10">Join Now</span>
                <span className="absolute inset-0 w-0 bg-[#ff7f41] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
           
          </div>
        </form>

        {status && <p className="text-sm mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default JoinWaitlist;
