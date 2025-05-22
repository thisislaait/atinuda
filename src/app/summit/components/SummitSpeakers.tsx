'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const speakers = [
  {
    id: 1,
    name: 'Preston Bailey',
    title: 'Event Producer',
    company: 'Preston Bailey Events',
    image: '/assets/images/Preston.jpeg',
    topic: 'Designing Dreams: Transforming Spaces with Emotion',
    bio: 'Preston Bailey is a celebrated floral and event designer known for his ability to transform ordinary spaces into lavish theatrical environments...',
  },
  {
    id: 2,
    name: 'TY Bello',
    title: 'Creative Director',
    company: 'TY Bello Photography',
    image: '/assets/images/TY.png',
    topic: 'Designing Dreams: Transforming Spaces with Emotion',
    bio: 'Preston Bailey is a celebrated floral and event designer known for his ability to transform ordinary spaces into lavish theatrical environments...',
  },
  {
    id: 3,
    name: 'Ndidi Okonkwo Nwuneli',
    title: 'President / CEO',
    company: 'ONE Campaign',
    image: '/assets/images/Ndidi.jpeg',
    topic: 'Designing Dreams: Transforming Spaces with Emotion',
    bio: 'Preston Bailey is a celebrated floral and event designer known for his ability to transform ordinary spaces into lavish theatrical environments...',
  },
  {
    id: 4,
    name: 'David Tutera',
    title: 'Founder',
    company: 'David Tutera Experience',
    image: '/assets/images/David.jpg',
    topic: 'Designing Dreams: Transforming Spaces with Emotion',
    bio: 'Preston Bailey is a celebrated floral and event designer known for his ability to transform ordinary spaces into lavish theatrical environments...',
  },
  {
    id: 5,
    name: 'Oke Maduewesi',
    title: 'Founder / CEO',
    company: 'Zaron Group',
    image: '/assets/images/Oke.webp',
    topic: 'Designing Dreams: Transforming Spaces with Emotion',
    bio: 'Preston Bailey is a celebrated floral and event designer known for his ability to transform ordinary spaces into lavish theatrical environments...',
  },
  {
    id: 6,
    name: 'Chike Nwobu',
    title: 'President',
    company: 'MunaLuchi',
    image: '/assets/images/Chike.jpg',
    topic: 'Designing Dreams: Transforming Spaces with Emotion',
    bio: 'Preston Bailey is a celebrated floral and event designer known for his ability to transform ordinary spaces into lavish theatrical environments...',
  },
  {
    id: 7,
    name: 'Marcy Blum',
    title: 'Owner',
    company: 'Marcy Blum Associates',
    image: '/assets/images/Marcy.jpg',
    topic: 'Designing Dreams: Transforming Spaces with Emotion',
    bio: 'Preston Bailey is a celebrated floral and event designer known for his ability to transform ordinary spaces into lavish theatrical environments...',
  },
  {
    id: 8,
    name: 'Frances Quarcoopome',
    title: 'Founder',
    company: 'JamJar',
    image: '/assets/images/Frances.png',
    topic: 'Designing Dreams: Transforming Spaces with Emotion',
    bio: 'Preston Bailey is a celebrated floral and event designer known for his ability to transform ordinary spaces into lavish theatrical environments...',
  },
];

const SummitSpeakers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const speakers = scrollContainer.children;
      const speakerWidth = speakers[0].clientWidth + 32; // Speaker width + gap (32px)

      scrollContainer.scrollTo({
        left: direction === 'left' ? scrollContainer.scrollLeft - speakerWidth : scrollContainer.scrollLeft + speakerWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="summit-speakers" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white p-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/RepeatBg.jpg"
          alt="Speakers Background"
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
        />
      </div>

      {/* Section Header */}
      <h2 className="text-6xl font-primary hero-text mb-4">Atinuda Speakers</h2>
      <p className="max-w-2xl text-2xl hero-text text-gray-300">
        Meet our industry leaders and visionaries who will share invaluable insights at the summit.
      </p>

      {/* Scrollable Speaker List */}
      <div className="relative w-full max-w-6xl mt-8 overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Speaker List */}
        <div ref={scrollRef} className="flex gap-32 px-20 py-6 overflow-hidden scroll-smooth">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="flex flex-col items-center min-w-[200px]">
              {/* Speaker Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <Image src={speaker.image} alt={speaker.name} width={128} height={128} className="object-cover w-full h-full" />
              </div>
              {/* Speaker Info */}
              <h3 className="text-xl hero-text mt-4">{speaker.name}</h3>
              <p className="text-sm nav-text uppercase font-extrabold text-gray-300" style={{ letterSpacing: '0.2em' }}>
                {speaker.title}
              </p>
              <p className="text-xs uppercase font-extrabold nav-text text-[#ff7f41]" style={{ letterSpacing: '0.2em' }}>
                {speaker.company}
              </p>
              {/* Read More (Hover Animation) */}
              <motion.span
                className="mt-2 cursor-pointer hero-text text-xs text-gray-300 relative"
                initial={{ backgroundSize: '0% 1px' }}
                whileHover={{ backgroundSize: '100% 1px' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                  backgroundImage: 'linear-gradient(to right, white, white)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0 100%',
                  backgroundSize: '0% 1px',
                }}
              >
                Read More
              </motion.span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default SummitSpeakers;
