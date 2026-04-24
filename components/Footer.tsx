'use client';

import Link from 'next/link';
import ImageFallback from '@/components/ImageFallback';
import { ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] pt-24 pb-12 border-t border-[#002349]/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="#home" className="inline-block">
              <ImageFallback 
                src="/logo.png" 
                alt="Padma AWT Rest House" 
                width={200} 
                height={60} 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs">
              Experience the pinnacle of luxury beside the timeless Padma River. A serene escape redefining hospitality in Bangladesh.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#002349]/10 flex items-center justify-center text-[#002349] hover:bg-[#002349] hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={14} strokeWidth={2} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#002349]/10 flex items-center justify-center text-[#002349] hover:bg-[#002349] hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={14} strokeWidth={2} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#002349]/10 flex items-center justify-center text-[#002349] hover:bg-[#002349] hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={14} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="font-serif text-xl text-[#002349] mb-6">Quick Links</h4>
             <ul className="space-y-4">
               {['About Us', 'Rooms & Suites', 'Dining', 'Activities', 'Gallery', 'Contact'].map((link) => (
                 <li key={link}>
                   <Link href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors relative group inline-block">
                     <span className="mr-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#C5A059] absolute -left-4 top-1/2 -translate-y-1/2">›</span>
                     {link}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-xl text-[#002349] mb-6">Legal</h4>
             <ul className="space-y-4">
               {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((link) => (
                 <li key={link}>
                   <Link href="#" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors relative group inline-block">
                     <span className="mr-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#C5A059] absolute -left-4 top-1/2 -translate-y-1/2">›</span>
                     {link}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl text-[#002349] mb-6">Newsletter</h4>
            <p className="text-gray-500 font-light text-sm mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-[#002349]/20 py-3 text-[#002349] placeholder-gray-400 focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#002349] hover:text-[#C5A059] transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#002349]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} Padma AWT Rest House. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed by Labib.</p>
        </div>
      </div>
    </footer>
  );
}
