"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="transition-transform duration-300 hover:scale-105">
          <Link href="/" className="text-2xl font-bold font-serif text-gray-800 flex items-center">
            <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
              Inhale
            </span>
            <span className="text-gray-800 mx-1">/</span>
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Exhale
            </span>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Utility Icons */}
        <div className="flex items-center space-x-5">
          <button 
            className="relative text-gray-600 hover:text-teal-600 transition-colors duration-300 group"
            aria-label="Shopping cart"
          >
            {/* Cart Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            
            {/* Cart badge - uncomment when implementing cart functionality */}
            {/* <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span> */}
          </button>
          
          <button 
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
            aria-label="User account"
          >
            {/* Account Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          
          {/* Mobile menu button - show on small screens */}
          <button className="md:hidden text-gray-600 hover:text-teal-600 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

// Navigation link with hover effect
const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link 
      href={href} 
      className="relative font-sans text-gray-600 hover:text-teal-600 transition-colors duration-300 py-2 group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

// Array of navigation links
const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default Header; 