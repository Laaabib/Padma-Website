'use client';

import { motion } from 'motion/react';
import ImageFallback from '@/components/ImageFallback';

const stats = [
  { value: '5+', label: 'Luxury Suites' },
  { value: '3', label: 'Dining Outlets' },
  { value: '180°', label: 'River View' },
  { value: '24/7', label: 'Concierge' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase mb-4 block">
                Welcome to Padma AWT
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#002349] leading-tight font-medium">
                Sophisticated Comfort by the Timeless River.
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Padma AWT Rest House offers an exclusive sanctuary where luxury meets the mesmerizing beauty of the Padma River. Designed for discerning travelers, our resort blends elegant architecture with impeccable hospitality.
            </p>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Experience sophisticated comfort, exclusive dining across three signature outlets, state-of-the-art wellness facilities, and unforgettable riverside adventures. Every detail is crafted to ensure your stay is extraordinary.
            </p>

            {/* Stats Grid */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-[#002349]/10">
               <div className="p-4 bg-white border border-[#C5A059]/30 rounded-2xl shadow-sm flex items-center gap-4 flex-1">
                 <div className="w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center text-xl">✨</div>
                 <div>
                   <div className="text-xs font-bold text-[#002349] uppercase tracking-wider">5-Star Excellence</div>
                   <div className="text-[10px] text-[#888]">Certified Luxury Hospitality</div>
                 </div>
               </div>
               <div className="p-4 bg-white border border-[#C5A059]/30 rounded-2xl shadow-sm flex items-center gap-4 flex-1">
                 <div className="w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center text-xl">🌊</div>
                 <div>
                   <div className="text-xs font-bold text-[#002349] uppercase tracking-wider">Riverside Oasis</div>
                   <div className="text-[10px] text-[#888]">Panoramic Padma Views</div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mx-auto"
          >
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-full sm:w-[80%] h-[80%] z-10">
              <div className="relative w-full h-full shadow-2xl z-10 overflow-hidden rounded-xl">
                <ImageFallback
                  src="/Lobby Area 2.png"
                  alt="Luxury Hotel Lobby"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Frame - Hidden on small screens to avoid overflow issues */}
              <div className="absolute -inset-4 border border-[#C5A059] z-0 -translate-x-4 translate-y-4 hidden sm:block rounded-xl"></div>
            </div>
            
            {/* Secondary Overlapping Image - Hidden on mobile for cleaner look */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[45%] z-20 bg-[#FAF9F6] p-3 shadow-2xl rounded-xl hidden sm:block">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <ImageFallback
                  src="/Swimming pool.png"
                  alt="Hotel Pool Area"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
