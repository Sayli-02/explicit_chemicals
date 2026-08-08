import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSectionId = '';

      // Set a small offset to trigger early
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id') || '';
        }
      });

      // Special case: if scrolled to the very top, set active to home/empty
      if (window.scrollY < 100) {
        currentSectionId = '';
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'About Us', path: '#about' },
    { name: 'Products', path: '#products' },
    { name: 'Research and Development', path: '#research' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  const getLinkClasses = (path: string, isDesktop: boolean = true) => {
    const sectionId = path.substring(1);
    const isActive = (sectionId === '' && activeSection === '') || sectionId === activeSection;
    
    if (isDesktop) {
      return `text-navy text-sm lg:text-base font-medium transition-colors ${isActive ? 'text-teal-heading font-semibold underline underline-offset-4 decoration-2' : 'hover:text-teal-heading'}`;
    } else {
      return `font-medium transition-colors ${isActive ? 'text-teal-heading font-semibold' : 'text-navy hover:text-teal-heading'}`;
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between pointer-events-none">
        {/* Left: Logo */}
        <div className="flex items-center gap-1 z-50 pointer-events-auto">
          <a href="#" onClick={scrollToTop} className="flex items-center">
            <img src="/logo.svg" alt="Explicit Chemicals Logo" className="h-16 lg:h-20 w-auto object-contain max-w-[200px] lg:max-w-[250px] shrink-0" onError={(e) => {
              (e.target as HTMLImageElement).src = '/logo.png';
              (e.target as HTMLImageElement).onerror = null;
            }} />
          </a>
        </div>

        {/* Center: Frosted-glass pill nav (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 bg-white/70 backdrop-blur-md rounded-full px-6 py-2.5 shadow-sm border border-white/40 transition-all pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={getLinkClasses(link.path)}
              onClick={(e) => {
                if (link.path === '#') scrollToTop(e);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Contact & Careers / Hamburger (Mobile) */}
        <div className="flex items-center gap-4 z-50 pointer-events-auto">
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#careers"
              className={getLinkClasses('#careers')}
            >
              Careers
            </a>
            <a
              href="#contact"
              className="bg-navy hover:bg-navy-hover text-white text-sm lg:text-base px-5 py-2 rounded-full font-medium transition-colors shadow-sm"
            >
              Contact Us
            </a>
          </div>
          <button 
            className="lg:hidden text-navy p-2 bg-white/50 backdrop-blur-md rounded-full transition-transform duration-300 pointer-events-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="animate-in fade-in" /> : <Menu size={24} className="animate-in fade-in" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-navy/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col p-8 pt-24 shadow-2xl overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 text-lg">
          {[...navLinks, { name: 'Careers', path: '#careers' }].map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={getLinkClasses(link.path, false)}
              onClick={(e) => {
                if (link.path === '#') scrollToTop(e);
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-navy/10 w-full my-2"></div>
          <a
            href="#contact"
            className="bg-navy hover:bg-navy-hover text-white text-center px-6 py-3 rounded-full font-medium transition-colors mt-2 w-full shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};
