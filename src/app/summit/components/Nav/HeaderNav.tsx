'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 600; // Default 600px if hero section not found
      if (window.scrollY > heroHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <Image 
          src={scrolled ? "/assets/images/blacklogo.png" : "/assets/images/whitelogo.png"} 
          alt="Logo" 
          width={120} 
          height={40} 
          className="object-contain transition-all duration-300"
        />
        <button onClick={() => setMenuOpen(true)} className="relative text-lg font-medium tracking-wider">
          <motion.span
            className="cursor-pointer tracking-wider transition-all duration-300"
            initial={{ backgroundSize: '0% 1px' }}
            whileHover={{ backgroundSize: '100% 1px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              color: scrolled ? 'black' : 'white',
              backgroundImage: scrolled
                ? 'linear-gradient(to right, black, black)'
                : 'linear-gradient(to right, white, white)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 100%',
              backgroundSize: '0% 2px',
            }}
          >
            <span className='nav-text tracking-wider' style={{ letterSpacing: '0.3em' }}>MENU</span>
          </motion.span>
        </button>
      </header>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center flex flex-col justify-center items-end pr-20 z-50"
          style={{ backgroundImage: "url('/assets/images/menubanner.jpg')" }}
        >
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-10 text-lg">CLOSE</button>
          <nav className="flex flex-col space-y-6 text-6xl h-full justify-center">
            {['Private Membership', 'Brands Activation', 'Spark The Future 2025', 'Regional Events'].map((item, index) => (
              <motion.span
                key={index}
                initial={{ backgroundSize: '0% 1px' }}
                whileHover={{ backgroundSize: '100% 1px' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                  color: 'white',
                  backgroundImage: 'linear-gradient(to right, white, white)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0 100%',
                  backgroundSize: '0% 1px',
                }}
              >
                <Link href={`/${item.toLowerCase()}`} className="block">{item}</Link>
              </motion.span>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default HeaderNav;

