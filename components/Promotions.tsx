'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const promotions = [
  {
    id: 'romantic-escape',
    title: 'Romantic Escape Package',
    includes: ['Premium Suite Riverview', 'Candlelight dinner for two', 'Couples spa treatment', 'Breakfast in room'],
    price: 'From ৳18,500/night',
    cta: 'Book Romantic Stay',
  },
  {
    id: 'family-weekend',
    title: 'Family Weekend Offer',
    includes: ['Family Connecting room', 'Unlimited kids zone access', 'Complimentary breakfast', 'Country boat ride'],
    price: 'From ৳22,000/night',
    cta: 'Book Family Package',
  },
  {
    id: 'executive-business',
    title: 'Executive Business Stay',
    includes: ['Superior Deluxe room', 'Airport pickup & drop', 'Meeting support & WiFi', 'Express laundry service'],
    price: 'From ৳14,500/night',
    cta: 'Book Executive Stay',
  },
  {
    id: 'presidential-luxury',
    title: 'Presidential Luxury Experience',
    includes: ['Presidential Suite', 'Private dining set menu', 'Personal butler service', 'Exclusive VIP river cruise'],
    price: 'From ৳45,000/night',
    cta: 'Reserve VIP Experience',
    featured: true,
  }
];

export default function Promotions() {
  return (
    <section id="offers" className="py-24 bg-[#002349] relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 z-0 flex justify-evenly pointer-events-none opacity-10">
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
            Exclusive Packages
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight font-medium">
            Special Offers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-transparent border ${promo.featured ? 'border-[#C5A059] bg-[#C5A059]/5' : 'border-white/20'} p-8 md:p-10 flex flex-col justify-between group hover:border-[#C5A059]/70 transition-colors duration-500`}
            >
              {/* Ribbon */}
              <div className="absolute top-0 right-0 bg-[#C5A059] text-[#002349] text-[10px] font-bold uppercase tracking-widest py-1 px-3 transform translate-x-2 -translate-y-2 shadow-lg">
                Save 20%
              </div>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-6">{promo.title}</h3>
                <ul className="space-y-3 mb-10">
                  {promo.includes.map((item, i) => (
                    <li key={i} className="flex items-start text-white/70 text-sm font-light">
                       <span className="text-[#C5A059] mr-3 mt-1">•</span>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold block mb-1">Pricing</span>
                  <span className="text-xl text-white font-serif">{promo.price}</span>
                </div>
                <Link
                  href={`/booking?promo=${promo.id}`}
                  className={`inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${promo.featured ? 'bg-[#C5A059] text-[#002349] hover:bg-white' : 'border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#002349]'}`}
                >
                  {promo.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
