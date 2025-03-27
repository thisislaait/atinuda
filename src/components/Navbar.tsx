// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Navbar = () => {
//   return (
//     // <nav className="bg-white flex justify-center items-center w-full h-20 px-6 fixed top-0 left-0 shadow-sm z-50">
//     //   <div className="container w-container flex justify-between items-center">
//     //     {/* Logo */}
//     //     <Link href="/" className="flex items-center">
//     //       <Image src="/assets/images/main_logo.png" width={150} height={50} alt="ATINUDA Logo" priority />
//     //     </Link>

//     //     {/* Navigation Links */}
//     //     <div className="flex items-center space-x-6">
//     //       {/* Dropdown Links */}
//     //       {[
//     //         { name: "About", links: [ 
//     //           { label: "About ATINUDA", href: "/about" }, 
//     //           { label: "ATINUDA Team", href: "/team" }, 
//     //           { label: "Partners", href: "/partners" }, 
//     //           { label: "Contact", href: "/contact" }
//     //         ]},
//     //         { name: "Membership", links: [ 
//     //           { label: "Our Members", href: "/member-list" }, 
//     //           { label: "About Membership", href: "/about-membership" }, 
//     //           { label: "Become a Member", href: "/become-a-member" }
//     //         ]},
//     //        { name: "Events", links: [ 
//     //           { label: "All Events", href: "/events" }, 
//     //           { label: "Luxury Summit", href: "/luxury-summit" }, 
//     //           { label: "Speakers", href: "/speakers" }
//     //         ]},
//     //         { name: "Spark The Future", links: [ 
//     //           { label: "About Spark The Future", href: "/brands-of-tomorrow" }, 
//     //           { label: "Apply Now", href: "/apply-now" }, 
//     //           { label: "Alumni", href: "/alumni" }
//     //         ]},
//     //          { name: "Representation", links: [ 
//     //           { label: "About Representation", href: "/representation" }, 
//     //           { label: "Reports & Research", href: "/reports-research" }, 
//     //         ]},
//     //       ].map((menu, index) => (
//     //         <div key={index} className="relative group">
//     //           <button className="flex items-center text-black text-xs font-medium hover:text-light-coral transition">
//     //             <Image src="/assets/images/ArrowDownMid.svg" width={12} height={8} alt="Dropdown Arrow" className="mr-2" />
//     //             {menu.name}
//     //           </button>
//     //           <div className="absolute left-0 hidden group-hover:block bg-black shadow-md rounded-md py-8 w-48">
//     //             {menu.links.map((link, idx) => (
//     //               <Link key={idx} href={link.href} className="block px-4 py-2 text-xs text-gray-200 hover:bg-gray-100">
//     //                 {link.label}
//     //               </Link>
//     //             ))}
//     //           </div>
//     //         </div>
//     //       ))}

          

//     //       {/* News Link */}
//     //       <Link href="/news" className="text-black text-sm font-medium hover:text-light-coral transition">
//     //         News & Insights
//     //       </Link>

//     //       {/* Search */}
//     //       <div className="relative group">
//     //         <button className="flex items-center text-black text-sm font-medium hover:text-gray-700 transition">
//     //           <Image src="/assets/images/search_icon.svg" width={16} height={16} alt="Search Icon" className="mr-2" />
//     //           Search
//     //         </button>
//     //         <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md p-4 w-64">
//     //           <form method="GET" action="/search">
//     //             <input
//     //               type="text"
//     //               className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
//     //               placeholder="Search..."
//     //             />
//     //             <button type="submit" className="mt-2 w-full bg-black text-white px-4 py-2 text-sm font-semibold rounded-md hover:bg-gray-800 transition">
//     //               Go
//     //             </button>
//     //           </form>
//     //         </div>
//     //       </div>

//     //       {/* Reserve Membership Spot Button */}
//     //       <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition">
//     //         Reserve Membership Spot
//     //       </button>
//     //     </div>
//     //   </div>
//     // </nav>
//     // <nav className="bg-transparent flex justify-between items-center w-full h-20 px-6 fixed top-0 left-0 shadow-sm z-50">
//     //   <div className="container w-container flex justify-between items-center">
//     //      {/* Logo */}
//     //     <Link href="/" className="flex items-center">
//     //       <Image src="/assets/images/main_logo.png" width={150} height={50} alt="ATINUDA Logo" priority />
//     //     </Link>
//     //   </div>

//     //   <div className="flex items-end text-md uppercase">
//     //     <p>Menu</p>
//     //   </div>
//     // </nav>
//   );
// };

// export default Navbar;


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent z-50">
      <h1 className="text-xl font-bold">BRAND</h1>
      <button onClick={toggleMenu} className="relative text-lg font-medium">
        <motion.span
          className="cursor-pointer"
          initial={{ backgroundSize: '0% 2px' }}
          whileHover={{ backgroundSize: '100% 2px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ backgroundImage: 'linear-gradient(to right, black, black)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%', backgroundSize: '0% 2px' }}
        >
          MENU
        </motion.span>
      </button>
    </header>
  );
};

const FullScreenNav = ({ isOpen, closeMenu }: { isOpen: boolean; closeMenu: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 w-full h-full bg-cover bg-center flex flex-col justify-center items-center z-50 ${isOpen ? 'block' : 'hidden'}`}
      style={{ backgroundImage: "url('/assets/images/WalpoleAuction.jpg')" }}
    >
      <button onClick={closeMenu} className="absolute top-4 right-4 text-lg">CLOSE</button>
      <nav className="text-center space-y-6">
        <Link href="/dashboard">DASHBOARD</Link>
        <Link href="/profile">PROFILE</Link>
        <Link href="/settings">SETTINGS</Link>
        <Link href="/logout">LOGOUT</Link>
      </nav>
    </motion.div>
  );
};

const BottomNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      setIsScrolled(window.scrollY > heroHeight);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 w-full bg-white p-4 flex justify-around items-center z-50 shadow-md transition-transform duration-300 ${isScrolled ? 'top-16' : 'bottom-0'}`}>
      <Link href="/brand">BRAND</Link>
      <Link href="/calendar">CALENDAR</Link>
      <Link href="/invite-only">INVITE ONLY</Link>
    </nav>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Header toggleMenu={() => setMenuOpen(true)} />
      <FullScreenNav isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
      <main id="hero" className="flex-grow">{children}</main>
      <BottomNav />
    </div>
  );
}
