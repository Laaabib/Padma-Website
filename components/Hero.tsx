'use client';

import { motion } from 'motion/react';
import { Calendar, Users, ArrowRight, ChevronDown } from 'lucide-react';
import ImageFallback from '@/components/ImageFallback';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

function HeroDatePicker({ label, date, setDate, placeholder }: { label: string, date: Date | undefined, setDate: (d: Date | undefined) => void, placeholder: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col flex-1 relative" ref={popoverRef}>
      <label className="text-[9px] uppercase tracking-widest text-[#C5A059] mb-1 font-sans">{label}</label>
      <div className="flex items-center space-x-2 text-white text-xs font-medium relative">
         <Calendar size={14} className="absolute left-0 pointer-events-none text-white/70 z-10" />
         <button
           type="button"
           onClick={() => setIsOpen(!isOpen)}
           className="bg-transparent text-white focus:outline-none pl-6 w-full cursor-pointer text-left h-6 flex items-center"
         >
           {date ? format(date, "MMM dd, yyyy") : placeholder}
         </button>
      </div>
      
      {isOpen && (
        <div 
          className="absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 lg:-left-4 z-[99999] bg-[#002349] border border-white/20 shadow-2xl p-4 rounded-xl scale-90 sm:scale-100 origin-bottom sm:origin-bottom-left"
          style={{
            ["--rdp-accent-color" as any]: "#C5A059",
            ["--rdp-background-color" as any]: "#001a38",
            ["--rdp-accent-color-dark" as any]: "#C5A059",
            ["--rdp-background-color-dark" as any]: "#001a38",
            ["--rdp-outline" as any]: "2px solid #C5A059",
            ["--rdp-outline-selected" as any]: "2px solid #fff"
          }}
        >
          <DayPicker
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setIsOpen(false);
            }}
            className="text-white"
          />
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);

  return (
    <section id="home" className="relative lg:h-[100svh] min-h-screen w-full flex flex-col-reverse lg:grid lg:grid-cols-12 overflow-hidden bg-[#FAF9F6] pt-20 lg:pt-0">
      
      {/* Main Content (Left Sidebar) */}
      <div className="lg:col-span-5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative border-r border-[#C5A059]/10 z-10 pb-32 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-[1px] w-12 bg-[#C5A059]"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-bold">Est. 2025 December • Riverside Luxury</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-[#002349]"
        >
          Luxury beside the <br/><span className="italic font-light">timeless</span> Padma.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm text-[#555] leading-relaxed max-w-sm font-sans mb-8"
        >
          Experience unparalleled elegance and tranquility. Discover sophisticated comfort and exclusive dining at Bangladesh&apos;s premier riverside resort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-4"
        >
          <Link
            href="#booking"
            className="px-8 py-3 bg-[#002349] text-white text-[10px] uppercase tracking-widest hover:bg-[#C5A059] transition-colors duration-500"
          >
            Book Your Stay
          </Link>
          <Link
            href="#rooms"
            className="hidden sm:inline-flex px-8 py-3 bg-transparent border border-[#002349]/20 text-[#002349] text-[10px] uppercase tracking-widest hover:border-[#002349] transition-colors duration-300"
          >
            Explore Rooms
          </Link>
        </motion.div>
      </div>

      {/* Background Image / Right Side */}
      <div className="lg:col-span-7 relative h-[50vh] lg:h-full bg-[#E5E5E5]">
        <ImageFallback
          src="/images/homepage-2.png"
          alt="Padma River View at Sunset"
          fill
          priority
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[#002349]/20 mix-blend-overlay pointer-events-none"></div>
        
        {/* Decorative Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-7xl md:text-9xl opacity-20 font-serif whitespace-nowrap pointer-events-none overflow-hidden">
          RIVER VIEW
        </div>
      </div>

      {/* Floating Booking Widget */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 w-[95%] lg:w-[900px] z-50 block"
      >
        <form 
          action="/booking"
          className="bg-[#002349]/95 backdrop-blur-xl border border-white/10 rounded-3xl lg:rounded-full py-6 lg:h-20 flex flex-col lg:flex-row items-center px-6 lg:px-10 shadow-2xl gap-6 lg:gap-0"
        >
          <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
            <HeroDatePicker 
              label="Check In Date" 
              date={checkInDate} 
              setDate={(d) => {
                setCheckInDate(d);
                if (d && (!checkOutDate || d >= checkOutDate)) {
                  const nextDay = new Date(d);
                  nextDay.setDate(d.getDate() + 1);
                  setCheckOutDate(nextDay);
                }
              }} 
              placeholder="Select date" 
            />
            <div className="hidden sm:block w-[1px] h-8 bg-white/10 self-center"></div>
            <HeroDatePicker 
              label="Check Out Date" 
              date={checkOutDate} 
              setDate={setCheckOutDate} 
              placeholder="Select date" 
            />
            <div className="hidden sm:block w-[1px] h-8 bg-white/10 self-center"></div>
            <div className="flex flex-col flex-1">
              <label className="text-[9px] uppercase tracking-widest text-[#C5A059] mb-1 font-sans">Guests</label>
              <div className="flex items-center space-x-2 text-white text-xs font-medium relative">
                 <Users size={14} className="absolute left-0 pointer-events-none text-white/70" />
                 <select name="guests" defaultValue="2" className="bg-transparent text-white focus:outline-none pl-6 w-full cursor-pointer appearance-none">
                    <option value="1" className="bg-[#002349] text-white">1 Guest</option>
                    <option value="2" className="bg-[#002349] text-white">2 Guests</option>
                    <option value="3" className="bg-[#002349] text-white">3 Guests</option>
                    <option value="4" className="bg-[#002349] text-white">4 Guests</option>
                 </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full lg:w-auto bg-[#C5A059] hover:bg-white text-[#002349] font-bold px-10 h-12 rounded-full text-[10px] flex items-center justify-center uppercase tracking-widest transition-all shadow-md lg:ml-4 flex-shrink-0"
          >
            Check Availability
          </button>
        </form>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white lg:hidden flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}
