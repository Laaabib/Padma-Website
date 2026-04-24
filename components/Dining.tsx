'use client';

import { motion } from 'motion/react';
import ImageFallback from '@/components/ImageFallback';
import { Clock, Users, UtensilsCrossed, Wine, Coffee, Music, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const diningOutlets = [
  {
    id: 'rivera-restaurant',
    name: 'Rivera Restaurant',
    subtitle: 'Signature Fine Dining',
    description: 'A signature fine-dining restaurant offering premium cuisine with beautiful ambiance and exceptional service for couples, families, and business guests.',
    image: '/Restaurant Rivera.png',
    features: ['Elegant Interior', 'Signature Dishes', 'Private Dining Option', 'Wine/Mocktail Pairing'],
    icon: <Wine className="w-5 h-5" />,
    revered: true,
  },
  {
    id: 'all-day-dining',
    name: 'All Day Dining',
    subtitle: 'International Cuisine',
    description: 'A stylish restaurant serving breakfast, lunch, and dinner with both local and international cuisine in a refined atmosphere.',
    image: '/Banquet Hall.png',
    features: ['Buffet Display', 'Chef Specialties', 'Opening Hours: 6AM-11PM', 'Seating Capacity: 150'],
    icon: <UtensilsCrossed className="w-5 h-5" />,
    revered: false,
  },
  {
    id: 'cafe-lounge',
    name: 'Cafe Lounge',
    subtitle: 'Relaxation & Social Gathering',
    description: 'A relaxing lounge space for coffee, desserts, tea, light snacks, and evening social gatherings with a luxury modern atmosphere.',
    image: '/Lobby Area.png',
    features: ['Artisan Coffee', 'Handcrafted Desserts', 'Soft Seating', 'Live Music (Evenings)'],
    icon: <Coffee className="w-5 h-5" />,
    revered: false,
  }
];

const chefMenu = [
  { name: 'Grilled River Fish', desc: 'Fresh local catch with citrus glaze', price: '৳2,500', img: '/Water Body.png' },
  { name: 'Premium Steak', desc: 'Aged beef tenderloin, truffle mash', price: '৳4,500', img: '/Water Body.png' },
  { name: 'Signature Dessert', desc: 'Dark chocolate lava with berries', price: '৳1,200', img: '/Water Body.png' },
  { name: 'Mocktail Collection', desc: 'Refreshing tropical blends', price: '৳800', img: '/Water Body.png' },
];

export default function Dining() {
  return (
    <section id="dining" className="py-24 bg-[#002349] relative text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
            Culinary Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight font-medium">
            Dining Experiences
          </h2>
          <p className="text-white/70 font-light max-w-2xl mx-auto">
            Savor exceptional flavors across our three signature outlets, where every meal is a celebration of taste and ambiance.
          </p>
        </div>

        {/* Dining Outlets - Horizontal Layouts */}
        <div className="space-y-16 mb-24">
          {diningOutlets.map((outlet, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={outlet.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "flex flex-col gap-8 lg:gap-16 items-center",
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative overflow-hidden rounded-xl border border-white/10 group">
                  <ImageFallback
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002349]/80 to-transparent"></div>
                </div>

                {/* Content - Glassmorphism Panel */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-xl relative overflow-hidden">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50"></div>
                    
                    <div className="flex items-center space-x-3 mb-4 text-[#C5A059]">
                      {outlet.icon}
                      <span className="text-xs uppercase tracking-widest font-semibold">{outlet.subtitle}</span>
                    </div>
                    
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 font-medium tracking-wide">
                      {outlet.name}
                    </h3>
                    
                    <p className="text-white/70 font-light leading-relaxed mb-8 text-sm md:text-base">
                      {outlet.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {outlet.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-white/80 text-sm">
                          <Sparkles className="w-4 h-4 text-[#C5A059]/70" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Chef Recommended Signature Menu */}
        <div className="mt-24 pt-24 border-t border-white/10 relative">
           <div className="text-center mb-16 space-y-4">
            <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
              Culinary Masterpieces
            </span>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight font-medium">
              Chef Recommended
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chefMenu.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <ImageFallback
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#002349]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="text-center px-4">
                  <h4 className="font-serif text-lg text-white font-medium mb-2">{item.name}</h4>
                  <p className="text-white/60 text-xs tracking-wide font-light mb-3">{item.desc}</p>
                  <p className="text-[#C5A059] font-semibold text-sm tracking-widest">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
