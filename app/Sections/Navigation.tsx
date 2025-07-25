'use client';

import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Replace with your Yelp image import
import yelp from '@/public/yelp.png'; // adjust the path if needed

const NAV_LINKS = [
  { label: 'Home', type: 'scroll', target: 'home' },
  { label: 'About', type: 'scroll', target: 'about' },
  { label: 'Nicky In The News', type: 'scroll', target: 'about' },
  { label: 'Services', type: 'scroll', target: 'services' },
  { label: 'Contact', type: 'scroll', target: 'contact' },
  { label: 'Booty Building', type: 'route', target: '/bootybuilding' },
  { label: 'Blog', type: 'route', target: '/blog' },
  { label: 'Shop Swag', type: 'route', target: '/shop' },
  { label: 'Client Area', type: 'route', target: '/clients' }
];

const SOCIAL_LINKS = [
  { icon: <Instagram className='text-white' size={20} />, url: 'https://www.instagram.com/nickybikini' },
  { icon: <img src={yelp.src} alt="Yelp" className="w-[18px] h-[20px]" />, url: 'https://www.yelp.com/biz/nicky-perry-fitness-oceanside' }
];

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Mobile links are a subset for now; adapt as needed
  const mobileLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'success', label: 'Success Stories' },
    { id: 'booty', label: 'Booty Building' },
    { id: 'testimonials', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center w-full">
            <div className="flex items-center space-x-12 text-white raleway">
              {NAV_LINKS.map((item) =>
                item.type === 'scroll' ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.target)}
                    className="text-white hover:text-pink-200 transition-colors font-light tracking-wide"
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => router.push(item.target)}
                    className="text-white hover:text-pink-200 transition-colors font-light tracking-wide"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4 absolute right-8">
            {SOCIAL_LINKS.map((soc, idx) => (
              <span key={idx} onClick={() => window.open(soc.url)} className="cursor-pointer hover:text-pink-200">
                {soc.icon}
              </span>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-pink-200 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-300 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mobileLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-white hover:text-pink-100 raleway"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
