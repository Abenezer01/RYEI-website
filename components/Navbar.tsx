import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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

  // Determine navbar style based on route and scroll state
  const getNavClasses = () => {
    if (isHome && !scrolled) {
      return "bg-transparent text-white py-6 border-b border-transparent";
    }
    return "bg-white/95 backdrop-blur-sm text-navy shadow-md py-4 border-gray-100";
  };

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    
    if (isHome && !scrolled) {
      return isActive 
        ? "text-white font-bold after:w-full" 
        : "text-gray-100 hover:text-white font-medium after:w-0 hover:after:w-full";
    }
    
    return isActive 
      ? "text-primary font-bold after:w-full" 
      : "text-navy hover:text-primary font-medium after:w-0 hover:after:w-full";
  };

  const getLogoTextClasses = () => {
    if (isHome && !scrolled) {
      return "text-white";
    }
    return "text-navy";
  };

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${getNavClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo(0,0)}>
              <div className={`transition-colors duration-300 ${isHome && !scrolled ? 'text-primary' : 'text-primary'}`}>
                <Sun className="h-10 w-10 fill-current" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className={`font-heading font-extrabold text-2xl tracking-tight leading-none ${getLogoTextClasses()}`}>
                  RYEI
                </span>
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isHome && !scrolled ? 'text-gray-300' : 'text-gray-500'}`}>
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
                to={link.path}
                className={`relative text-xs font-heading tracking-wider transition-all duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${getLinkClasses(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
                to="/contact"
                className="bg-primary hover:bg-primary-hover text-navy px-6 py-3 rounded-xl text-sm font-bold font-heading transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 duration-200"
            >
                Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isHome && !scrolled ? 'text-white' : 'text-navy'} focus:outline-none p-2`}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-light absolute w-full top-full left-0 shadow-2xl h-screen overflow-y-auto pb-20">
          <div className="px-6 pt-8 pb-6 space-y-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-xl font-bold font-heading transition-colors border-l-4 pl-4 ${location.pathname === link.path ? 'text-primary border-primary' : 'text-white border-transparent hover:text-primary'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8">
              <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-navy px-4 py-4 rounded-xl font-bold text-lg shadow-lg"
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