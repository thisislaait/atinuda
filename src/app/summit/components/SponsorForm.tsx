'use client';

import { useState } from 'react';

const BecomeSponsorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can hook this to an email API or backend
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="md:w-1/2 bg-[#f6f6f6] flex items-center justify-center p-12 text-center">
        <div>
          <h1 className="text-4xl font-semibold text-[#372a2a] mb-4">Become a Sponsor</h1>
          <p className="text-sm text-[#5c5c5c] max-w-md mx-auto">
            Partner with Africa’s leading summit. Fill in the enquiry form to receive our sponsorship pack and next steps.
          </p>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="md:w-1/2 p-8 sm:p-10 md:p-16 bg-white text-[#5c5c5c]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff7f41] transition-all"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff7f41] transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff7f41] transition-all"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff7f41] transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#ff7f41] transition-all"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#ff7f41] text-white px-6 py-3 rounded-md uppercase tracking-wider text-sm hover:bg-[#e06930] transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default BecomeSponsorForm;
