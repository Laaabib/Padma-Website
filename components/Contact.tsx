'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#002349] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block mb-4">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight font-medium mb-8">
              Contact Us.
            </h2>
            <p className="text-white/70 font-light max-w-md mb-12 leading-relaxed">
              Whether you&apos;re planning a stay, a special event, or simply have a question, our dedicated team is at your service.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={18} className="text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-[#C5A059] mb-2">Address</h4>
                  <p className="text-white/80 font-light">Padma River Bank,<br />Mawa, Munshiganj,<br />Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={18} className="text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-[#C5A059] mb-2">Phone</h4>
                  <p className="text-white/80 font-light">+880 1234 567890<br />+880 9876 543210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={18} className="text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-[#C5A059] mb-2">Email</h4>
                  <p className="text-white/80 font-light">info@padmaawt.com<br />reservations@padmaawt.com</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#C5A059] hover:text-[#002349] text-white flex items-center justify-center rounded-full transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#C5A059] hover:text-[#002349] text-white flex items-center justify-center rounded-full transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#C5A059] hover:text-[#002349] text-white flex items-center justify-center rounded-full transition-all duration-300">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <form className="bg-white/5 backdrop-blur-md p-8 border border-white/10 space-y-6 rounded-xl">
               <div className="space-y-2">
                 <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="Your Name" />
               </div>
               <div className="space-y-2">
                 <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="Email Address" />
               </div>
               <div className="space-y-2">
                 <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="How can we help you?"></textarea>
               </div>
               <button className="w-full py-4 bg-[#C5A059] text-[#002349] font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 mt-4 rounded-md">
                 Send Message
               </button>
            </form>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-white/10 rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#002349]/50 flex items-center justify-center group-hover:bg-[#002349]/30 transition-colors z-10 cursor-pointer">
                <span className="text-white text-sm font-medium tracking-widest uppercase border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">View Map</span>
              </div>
              <div className="w-full h-full bg-[url('https://picsum.photos/seed/map/800/400')] bg-cover bg-center opacity-50 blur-[2px]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
