"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Image for potential product photo
import Link from 'next/link'; // Import Link for CTA

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !imageRef.current) return;
      
      const scrollPosition = window.scrollY;
      const parallaxFactor = 0.2; // Adjust for stronger/weaker effect
      
      // Move background at different rate than foreground
      parallaxRef.current.style.transform = `translateY(${scrollPosition * parallaxFactor}px)`;
      
      // Scale and subtle float for the image
      imageRef.current.style.transform = `translateY(${scrollPosition * -0.1}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden relative pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-amber-400 overflow-hidden z-0">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-500/20 mix-blend-soft-light blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-amber-400/20 mix-blend-soft-light blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Parallax element */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: 'url("/pattern-dots.svg")', 
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center relative z-10">
        {/* Text Content with Glassmorphism */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in">
          <div className="bg-white/60 backdrop-blur-lg shadow-lg p-10 rounded-3xl max-w-xl border border-white/20 border-opacity-30">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/10 text-teal-700 text-sm font-medium mb-4 tracking-wide">
              Natural Wellness
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-gray-800 leading-tight">
              Breathe In <span className="text-teal-600">Calm</span>, <br />
              Breathe Out <span className="text-amber-500">Stress</span>.
            </h1>
            
            <p className="text-lg md:text-xl font-sans mb-8 text-gray-600 leading-relaxed max-w-lg">
              Discover the power of nature with our handcrafted herbal inhalers. 
              Ethically sourced ingredients for your well-being journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/shop"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 text-lg uppercase tracking-wide"
              >
                Shop Now
              </Link>
              
              <Link
                href="/how-it-works"
                className="bg-transparent border-2 border-teal-500 text-teal-600 font-semibold py-3 px-8 rounded-full hover:bg-teal-500/5 hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Image with Glassmorphism */}
        <div 
          ref={imageRef}
          className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 animate-fade-in transition-transform duration-1000 animate-float"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -left-5 -top-5 w-20 h-20 rounded-full bg-teal-500/30 mix-blend-soft-light blur-sm"></div>
            <div className="absolute -right-5 -bottom-5 w-16 h-16 rounded-full bg-amber-500/30 mix-blend-soft-light blur-sm"></div>
            
            {/* Image container with glass effect */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-5 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/hero-image.png"
                alt="Elegant herbal inhaler product display"
                width={420}
                height={420}
                className="object-contain rounded-2xl z-20 relative shadow-sm"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curved divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50 transform-gpu z-20">
        <svg
          className="absolute -top-1 left-0 w-full h-20 text-gray-50 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 