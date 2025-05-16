'use client';

import { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

const ticketOptions = [
  { type: 'Member', price: 250000, desc: 'Discounted rate for registered members.' },
  { type: 'Non-Member', price: 450000, desc: 'Standard access for non-members.' },
  { type: 'VIP', price: 750000, desc: 'Front row seating, exclusive dinner invite.' },
];

const Payment = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const selectedTicket = ticketOptions.find((t) => t.type === selected);
  const totalAmount = selectedTicket ? selectedTicket.price * quantity : 0;

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY || '',
    tx_ref: Date.now().toString(),
    amount: totalAmount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'guest@example.com',
      phone_number: '08012345678',
      name: 'Atinuda Guest',
    },
    customizations: {
      title: 'Atinuda Ticket',
      description: `${selected} Ticket x ${quantity}`,
      logo: '/assets/images/blacklogo.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const { user, openAuthModal } = useAuth();

  return (
    <section className="w-full bg-white">
      {/* Banner Header */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/assets/images/Tourism2.jpg"
          alt="Ticket Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1f2340]/60 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
            Reserve Your Spot at Atinuda 2025
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-[#ff7f41] mb-6">
          Local To Global – Creative Transformations
        </p>

        <div className="mb-8 text-gray-700">
          <p><strong>Date:</strong> October 7–9, 2025</p>
          <p><strong>Location:</strong> Landmark Event Centre, Lagos</p>
          <p><strong>Time:</strong> 10:00 AM – 6:00 PM Daily</p>
          <p className="mt-4 text-sm text-gray-500">
            Early bird pricing ends July 1st. No refunds after purchase.
          </p>

          <Link
            href="https://instagram.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white bg-[#ff7f41] px-5 py-2 text-sm font-semibold uppercase rounded hover:bg-[#e66a30] transition"
          >
            Follow us on Instagram
          </Link>
        </div>

        <hr className="my-10 border-gray-300" />

        {/* Ticket Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ticketOptions.map((ticket) => (
            <div
              key={ticket.type}
              className={`border p-6 rounded-lg transition-all cursor-pointer ${
                selected === ticket.type
                  ? 'border-[#ff7f41] bg-[#fff8f3]'
                  : 'border-gray-300 hover:border-[#ff7f41]'
              }`}
              onClick={() => {
                setSelected(ticket.type);
                setQuantity(1);
              }}
            >
              <h3 className="text-lg text-black font-semibold mb-2">{ticket.type} Ticket</h3>
              <p className="text-sm text-[#ff7f41]">{ticket.desc}</p>
              <p className="mt-4 text-xl font-bold text-black">₦{ticket.price.toLocaleString()}</p>

              {selected === ticket.type && (
                <div className="mt-4 flex items-center gap-3">
                  <button
                    className="px-2 py-1 border border-gray-400 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (quantity > 1) setQuantity((q) => q - 1);
                    }}
                  >
                    −
                  </button>
                  <span className="text-base text-black font-medium">{quantity}</span>
                  <button
                    className="px-2 py-1 border border-gray-400 text-sm text-black"
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuantity((q) => q + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment Button */}
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-sm mb-4 text-black">
              Total for <strong>{quantity}</strong> {selected} ticket(s):{' '}
              <strong>₦{totalAmount.toLocaleString()}</strong>
            </p>
          
            <button
              onClick={() => {
                if (!user) {
                  openAuthModal(); // 👈 open modal
                  return;
                }

                handleFlutterPayment({
                  callback: (response) => {
                    console.log('Payment success:', response);
                    closePaymentModal();
                  },
                  onClose: () => {
                    console.log('Payment closed');
                  },
                });
              }}
              className="relative px-8 py-3 border border-gray-600 text-black font-medium uppercase overflow-hidden group mt-4"
            >
              Proceed to Payment
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Payment;
