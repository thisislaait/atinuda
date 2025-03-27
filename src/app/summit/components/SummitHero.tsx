'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white p-8">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/Tourism2.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full bg-[#1f2340] z-10"
       
        />
        <div className="absolute inset-0 bg-[#1f2340] opacity-59 z-10"></div>
      </div>
      
      <div className="p-8 rounded-lg max-w-4xl relative z-20">
        <h1 className="text-7xl font-primary hero-text font-medium mb-4">
          Africa&#39;s <br /> leading <br/> summit <br /> 
          <span className='text-[#ff7f41] text-4xl text-secondary border-b-1'>2025</span>
        </h1>
        <h2 
          className="nav-text font-black text-xs text-[#ff7f41] uppercase tracking-wider mb-6 shadow-2xl shadow-black" 
          style={{ letterSpacing: '0.3em' }}
        >
          Local To Global - Creative Transformations
        </h2>
        <p className="text-sm leading-relaxed mb-6">
          Every year, 500+ event professionals, luxury brand leaders, and industry disruptors gather 
          at ATINUDA to connect, collaborate, and elevate their craft. From high-impact conversations
          with global speakers to real opportunities that drive business growth, this is where the future of luxury experiences is shaped.

          Lagos, October 2025. The right room. The right people. The right opportunities.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
