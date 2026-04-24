'use client';

import { motion } from 'motion/react';
import { Wifi, Car, ConciergeBell, Waves, Flame, Dumbbell, Flower2, Droplets, PlaneTakeoff } from 'lucide-react';

const amenities = [
  { name: 'Infinity Pool', icon: Waves },
  { name: 'Spa & Wellness', icon: Flower2 },
  { name: 'Steam Room', icon: Droplets },
  { name: 'Sauna', icon: Flame },
  { name: 'Fitness Center', icon: Dumbbell },
  { name: 'Airport Transfer', icon: PlaneTakeoff },
  { name: '24/7 Concierge', icon: ConciergeBell },
  { name: 'Private Parking', icon: Car },
  { name: 'Free High-Speed WiFi', icon: Wifi },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
            Resort Facilities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#002349] leading-tight font-medium">
            Luxury Amenities
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Everything you need for an indulgent and relaxing stay.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-[#002349]/5 p-8 text-center flex flex-col items-center justify-center rounded-2xl group hover:shadow-xl hover:border-[#C5A059]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mb-4 group-hover:bg-[#002349] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#002349] group-hover:text-[#C5A059] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h4 className="font-medium text-sm text-[#002349] tracking-wide">{item.name}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
