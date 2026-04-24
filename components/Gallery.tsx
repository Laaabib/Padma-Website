'use client';

import { motion } from 'motion/react';
import ImageFallback from '@/components/ImageFallback';

const images = [
  { src: '/Premium Suite RiverView.png', category: 'Rooms', rowSpan: 'row-span-2' },
  { src: '/Swimming pool.png', category: 'Pool', rowSpan: 'row-span-1' },
  { src: '/Restaurant Rivera.png', category: 'Dining', rowSpan: 'row-span-1' },
  { src: '/Lobby Area.png', category: 'Lobby', rowSpan: 'row-span-2' },
  { src: '/Water Body.png', category: 'River View', rowSpan: 'row-span-1' },
  { src: '/Banquet Hall.png', category: 'Banquet Hall', rowSpan: 'row-span-1' },
  { src: '/Presidential Suite 2.png', category: 'Presidential Suite', rowSpan: 'row-span-1' },
  { src: '/Family Connecting.png', category: 'Family Connecting', rowSpan: 'row-span-1' },
  { src: '/Premium Suite.png', category: 'Premium Suite', rowSpan: 'row-span-1' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#002349] leading-tight font-medium">
            Gallery
          </h2>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[50vh] md:h-[60vh] rounded-xl overflow-hidden shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 bg-[#002349]/80 backdrop-blur-sm text-white px-6 py-3 z-10 rounded-br-xl">
              <h3 className="font-serif text-lg">3D Virtual Tour</h3>
              <p className="text-xs text-[#C5A059] tracking-wider uppercase">Explore the Resort</p>
            </div>
            <iframe
              src="https://my.matterport.com/show/?m=JRXbY1P2Eqn"
              allowFullScreen
              allow="vr"
              className="absolute inset-0 w-full h-full border-0"
              title="3D Virtual Tour"
            ></iframe>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${img.rowSpan}`}
            >
              <ImageFallback
                src={img.src}
                alt={img.category}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#002349]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-2xl drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
