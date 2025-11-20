"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PROGRAMS', path: '/programs' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'GALLERY', path: '/gallery' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={cn(
      "fixed w-full z-50 top-0 transition-all duration-300 border-b",
      isHome && !scrolled 
        ? "bg-transparent border-transparent py-6" 
        : "bg-white/95 backdrop-blur-md border-gray-100 py-4 shadow-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className={cn("transition-colors", isHome && !scrolled ? "text-white" : "text-primary")}>
                 <Sun className={cn("h-10 w-10 fill-current", isHome && !scrolled ? "text-primary" : "text-primary")} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-heading font-extrabold text-2xl tracking-tight leading-none transition-colors",
                  isHome && !scrolled ? "text-white" : "text-navy"
                )}>
                  RYEI
                </span>
                <span className={cn(
                  "text-[10px] font-bold tracking-[0.2em] uppercase transition-colors",
                  isHome && !scrolled ? "text-gray-200" : "text-gray-500"
                )}>
                  Empowering Rural Youth
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.path}
                className={cn(
                  "relative text-xs font-bold font-heading tracking-wider transition-all duration-200 py-1 group",
                  // Text Color Logic
                  isHome && !scrolled 
                    ? (isActive(link.path) ? "text-white" : "text-gray-100 hover:text-white")
                    : (isActive(link.path) ? "text-primary" : "text-navy hover:text-primary")
                )}
              >
                {link.name}
                {/* Animated Underline */}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[2px] transform transition-transform duration-300 origin-left",
                  isHome && !scrolled ? "bg-primary" : "bg-primary",
                  isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
            <Link 
                href="/contact"
                className="bg-primary hover:bg-primary-hover text-navy px-6 py-3 rounded-xl text-sm font-bold font-heading transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 duration-200"
            >
                Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "focus:outline-none p-2 transition-colors",
                isHome && !scrolled ? "text-white" : "text-navy"
              )}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-light absolute w-full top-full left-0 shadow-2xl h-screen overflow-y-auto">
          <div className="px-6 pt-8 pb-20 space-y-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-xl font-bold font-heading transition-colors border-l-4 pl-4",
                  isActive(link.path) 
                    ? "text-primary border-primary" 
                    : "text-white border-transparent hover:text-primary hover:border-primary/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8">
              <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary hover:bg-primary-hover text-navy px-4 py-4 rounded-xl font-bold text-lg shadow-lg transition-colors"
              >
                  Get Involved
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};