'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BottomNav = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const header = document.getElementById("header");
      const bottomNav = document.getElementById("bottom-nav");
      
      if (!hero || !header || !bottomNav) return;
      
      const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
      const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;
      const navHeight = bottomNav.offsetHeight;
      
      // Fix BottomNav when it reaches the bottom of HeaderNav
      setIsFixed(heroBottom - navHeight <= headerBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="bottom-nav"
      className={`w-full z-50 transition-all duration-500 ${
        isFixed ? "fixed top-[calc(100%_-_4rem)] left-0" : "absolute bottom-0"
      }`}
    >
      <motion.div className="absolute inset-0 bg-[#1B365D] opacity-35 z-[-1]" />
      <motion.nav className="relative nav-text w-full text-white tracking-wider z-10 uppercase p-4 flex justify-around items-center shadow-md">
        <NavItem href="/brand">Download Summit Report</NavItem>
        <NavItem href="/calendar">Become A Sponsor</NavItem>
        <NavItem href="/invite-only">Invite Only</NavItem>
      </motion.nav>
    </div>
  );
};

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <motion.span
        className="relative cursor-pointer"
        initial={{ backgroundSize: "0% 1px" }}
        whileHover={{ backgroundSize: "100% 1px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          backgroundImage: "linear-gradient(to right, white, white)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 100%",
          backgroundSize: "0% 1px",
          letterSpacing: '0.3em',
        }}
      >
        {children}
      </motion.span>
    </Link>
  );
};

export default BottomNav;

