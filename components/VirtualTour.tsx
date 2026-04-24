'use client';

import { motion } from 'motion/react';

export default function VirtualTour() {
  return (
    <section id="virtual-tour" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#002349] mb-4">
            3D Virtual Tour
          </h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto mb-6"></div>
          <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto font-sans">
            Explore our sophisticated comfort and timeless elegance through an immersive 3D virtual experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
        >
          <iframe
            width="853"
            height="480"
            src="https://my.matterport.com/show/?m=8RPPZjHPaXW&play=1&brand=0&title=0&tourcta=2"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full"
            title="Matterport Virtual Tour"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
