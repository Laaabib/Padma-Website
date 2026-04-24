'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Users, CreditCard } from 'lucide-react';
import { DatePicker } from './DatePicker';
import { differenceInDays, format } from 'date-fns';

export default function Booking() {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    room: 'superior-deluxe',
    package: 'none',
    requests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getRoomPrice = () => {
    switch (formData.room) {
      case 'superior-deluxe': return 12500;
      case 'family-connecting': return 25000;
      case 'premium-suite': return 20000;
      case 'premium-suite-riverview': return 23000;
      case 'presidential-suite': return 70000;
      default: return 12500;
    }
  };

  const nights = (checkInDate && checkOutDate) 
    ? Math.max(1, differenceInDays(checkOutDate, checkInDate)) 
    : 1;

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background orbs for glassmorphism visibility */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-[#002349]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
           <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
              Reserve Your Stay
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#002349] leading-tight font-medium">
              Booking & Reservations
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Info */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input type="text" name="name" onChange={handleChange} className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input type="email" name="email" onChange={handleChange} className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input type="tel" name="phone" onChange={handleChange} className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="+880 1..." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                {/* Dates & Guests */}
                <DatePicker 
                  label="Check-in Date" 
                  date={checkInDate} 
                  setDate={(d) => {
                    setCheckInDate(d);
                    if (d && (!checkOutDate || d >= checkOutDate)) {
                       const nextDay = new Date(d);
                       nextDay.setDate(d.getDate() + 1);
                       setCheckOutDate(nextDay);
                    }
                  }} 
                />
                <DatePicker 
                  label="Check-out Date" 
                  date={checkOutDate} 
                  setDate={setCheckOutDate} 
                />
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Adults</label>
                  <select name="adults" onChange={handleChange} className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors">
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Children</label>
                  <select name="children" onChange={handleChange} className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors">
                    <option value="0">0 Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                {/* Room & Package */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Room Type</label>
                  <select name="room" onChange={handleChange} className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors">
                    <option value="superior-deluxe">Superior Deluxe</option>
                    <option value="family-connecting">Family Connecting</option>
                    <option value="premium-suite">Premium Suite</option>
                    <option value="premium-suite-riverview">Premium Suite Riverview</option>
                    <option value="presidential-suite">Presidential Suite</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Promotion Package</label>
                  <select name="package" onChange={handleChange} className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors">
                    <option value="none">None</option>
                    <option value="romantic-escape">Romantic Escape Package</option>
                    <option value="family-weekend">Family Weekend Offer</option>
                    <option value="executive-business">Executive Business Stay</option>
                    <option value="presidential-luxury">Presidential Luxury Experience</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2 pt-6 border-t border-gray-100">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Special Requests</label>
                  <textarea name="requests" onChange={handleChange} rows={3} className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors placeholder-gray-400" placeholder="Any special requests...?"></textarea>
              </div>

              <button className="w-full py-5 rounded-xl bg-[#002349] text-white font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-[#002349] transition-colors duration-300">
                Check Availability
              </button>
            </form>
          </motion.div>

          {/* Booking Summary Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-white/60 backdrop-blur-xl p-8 border border-white max-lg:border-[#002349]/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl sticky top-32">
              <h3 className="font-serif text-2xl text-[#002349] mb-6 border-b border-gray-200/60 pb-4">Booking Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Room</span>
                  <span className="font-medium text-[#002349] capitalize">{formData.room.replace(/-/g, ' ')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Guests</span>
                  <span className="font-medium text-[#002349]">{formData.adults} Adults, {formData.children} Children</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-medium text-[#002349]">{nights} Night(s)</span>
                </div>
                {formData.package !== 'none' && (
                   <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Package</span>
                    <span className="font-medium text-[#002349] capitalize">{formData.package.replace(/-/g, ' ')}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">Room Rate ({nights}x)</span>
                  <span className="font-medium">৳{getRoomPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">Taxes & Fees (15%)</span>
                  <span className="font-medium">৳{(getRoomPrice() * 0.15).toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-[#C5A059] pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-xs uppercase tracking-widest text-[#002349] font-bold">Total</span>
                  <span className="text-2xl font-serif text-[#C5A059] font-semibold">
                    ৳{((getRoomPrice() * 1.15) * nights).toLocaleString()}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 mt-2 text-right">Includes all taxes and fees</p>
              </div>

              <button className="w-full py-4 rounded-xl border border-[#C5A059] text-[#C5A059] font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#002349] transition-colors duration-300 flex items-center justify-center space-x-2">
                <CreditCard size={18} />
                <span>Reserve Now</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
