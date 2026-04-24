'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import ImageFallback from '@/components/ImageFallback';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    country: 'United Kingdom',
    rating: 5,
    text: 'Exceptional riverside luxury and unforgettable hospitality. The Padma River view from our suite was simply breathtaking.',
    image: '/water-body.png'
  },
  {
    name: 'David Chen',
    country: 'Singapore',
    rating: 5,
    text: 'The dining experience at Rivera Restaurant was world-class. A perfect blend of local flavors and international standards.',
    image: '/water-body.png'
  },
  {
    name: 'Amina Rahman',
    country: 'Bangladesh',
    rating: 5,
    text: 'A magnificent escape from the city. The spa treatments and the infinity pool overlooking the river made our anniversary special.',
    image: '/water-body.png'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Parallax background effect with a mask */}
       <div className="absolute inset-0 z-0 opacity-5">
        <ImageFallback
          src="/water-body.png"
          alt="Background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
           <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
              Guest Experiences
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#002349] leading-tight font-medium">
              What They Say
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#002349]/5 relative"
            >
              <div className="flex text-[#C5A059] mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 italic font-serif leading-relaxed text-lg mb-8">
                &quot;{test.text}&quot;
              </p>
              
              <div className="flex items-center space-x-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <ImageFallback src={test.image} alt={test.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-[#002349] font-semibold text-sm">{test.name}</h4>
                  <p className="text-gray-500 text-xs">{test.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
