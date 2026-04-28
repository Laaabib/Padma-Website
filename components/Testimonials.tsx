'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import ImageFallback from '@/components/ImageFallback';
import Script from 'next/script';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Parallax background effect with a mask */}
       <div className="absolute inset-0 z-0 opacity-5">
        <ImageFallback
          src="/images/water-body.png"
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

        <div className="bg-white rounded-2xl shadow-xl border border-[#002349]/5 p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Elfsight Reviews from Tripadvisor | Untitled Reviews from Tripadvisor */}
            <div className="elfsight-app-b00afe2f-2bff-47b6-a34b-d28be087b430" data-elfsight-app-lazy></div>
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          </div>
        </div>
      </div>
    </section>
  );
}
