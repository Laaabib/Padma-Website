'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ImageFallback from '@/components/ImageFallback';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Accommodation', href: '/accommodation' },
  { name: 'Dining', href: '/dining' },
  { name: 'Activities', href: '/activities' },
  { name: 'Promotions', href: '/promotions' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 border-b transition-all duration-300',
        scrolled || pathname !== '/' ? 'border-[#C5A059]/20 bg-white/95 backdrop-blur-md shadow-sm' : 'border-transparent bg-transparent'
      )}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group relative h-12 w-48">
          <Image 
            src="/images/logo.png" 
            alt="Padma AWT Rest House" 
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={cn("hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.15em] font-sans font-medium transition-colors", scrolled || pathname !== '/' ? "text-[#002349]" : "text-[#002349]")}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "hover:text-[#C5A059] transition-colors pb-1 border-b hover:border-[#C5A059]",
                pathname === link.href ? "text-[#C5A059] border-[#C5A059]" : "border-transparent"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-6">
          <Link
            href="/booking"
            className={cn("hidden lg:inline-flex px-8 py-3 text-[10px] uppercase tracking-widest transition-colors duration-500", scrolled || pathname !== '/' ? "bg-[#002349] text-white hover:bg-[#C5A059]" : "bg-[#002349] text-white hover:bg-[#C5A059]")}
          >
            Book Your Stay
          </Link>

          <button
            className={cn("lg:hidden p-2", scrolled || pathname !== '/' ? "text-[#002349]" : "text-[#002349]")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 w-full h-[calc(100vh-80px)] bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-y-auto"
          >
            <div className="px-6 py-12 flex flex-col items-center space-y-8 min-h-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-serif tracking-wide transition-colors",
                      pathname === link.href ? "text-[#C5A059]" : "text-[#002349] hover:text-[#C5A059]"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="w-full pt-8 mt-auto border-t border-gray-200"
              >
                 <Link
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-5 bg-[#002349] text-white text-sm uppercase tracking-widest font-bold shadow-lg hover:bg-[#C5A059] hover:text-[#002349] transition-all"
                >
                  Book Your Stay
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
