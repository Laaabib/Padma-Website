'use client';

import { motion } from 'motion/react';
import ImageFallback from '@/components/ImageFallback';
import { Clock, Users } from 'lucide-react';
import Link from 'next/link';

const activities = [
  {
    title: 'River Speed Boat',
    description: 'Feel the thrill of the Padma River with a high-speed boat ride.',
    duration: '30 Mins / 1 Hour',
    suitability: 'Adults & Teens',
    image: '/Water Body.png',
  },
  {
    title: 'Country Boat Ride',
    description: 'A peaceful, traditional wooden boat journey along the serene riverbanks.',
    duration: '1 Hour',
    suitability: 'All Ages',
    image: '/Water Body.png',
  },
  {
    title: 'Golf Cart Riverside Tour',
    description: 'Explore the extensive resort grounds and scenic riverside comfortably.',
    duration: '45 Mins',
    suitability: 'All Ages',
    image: '/Water Body.png',
  },
  {
    title: 'Quad Bike Adventure',
    description: 'Exciting off-road trails designed for adrenaline seekers.',
    duration: '30 Mins',
    suitability: 'Adults Only',
    image: '/Water Body.png',
  },
  {
    title: 'Water Body Boat Ride',
    description: 'Gentle boating within our internal majestic water bodies.',
    duration: '30 Mins',
    suitability: 'Families',
    image: '/Water Body.png',
  },
  {
    title: 'Kids Fun Zone',
    description: 'A safe, engaging playground with supervised activities for children.',
    duration: 'Unlimited',
    suitability: 'Kids (3-12)',
    image: '/Water Body.png',
  }
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
              Experience More
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#002349] leading-tight font-medium">
              Riverside Activities
            </h2>
            <p className="text-gray-500 font-light">
              Make your stay unforgettable with curated experiences designed to connect you with the beauty and thrill of the Padma River.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-gray-100 bg-[#FAF9F6] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <ImageFallback
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#002349] font-medium mb-3">{activity.title}</h3>
                <p className="text-gray-500 text-sm font-light mb-6 line-clamp-2">
                  {activity.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium mb-6">
                  <div className="flex items-center space-x-1.5">
                    <Clock size={14} className="text-[#C5A059]" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Users size={14} className="text-[#C5A059]" />
                    <span>{activity.suitability}</span>
                  </div>
                </div>

                <Link
                  href="/booking"
                  className="block w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-[#002349] border border-[#002349]/20 rounded-xl hover:bg-[#002349] hover:text-white transition-colors duration-300 group-hover:border-[#002349]"
                >
                  Book Activity
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
