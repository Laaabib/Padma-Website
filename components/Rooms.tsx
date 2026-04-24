'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ImageFallback from '@/components/ImageFallback';
import { Users, Maximize, BedDouble, View, Check, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const rooms = [
  {
    id: 'superior-deluxe',
    name: 'Superior Deluxe',
    price: '৳12,500',
    image: '/superior-delux.webp',
    size: '45 sqm',
    bed: 'King Bed',
    occupancy: '2 Adults',
    view: 'Garden View',
    description: 'Experience modern comfort in our tastefully designed Superior Deluxe room, offering a serene garden view, a luxurious King bed, and a dedicated workspace. Enjoy standard complimentary amenities and an exclusive ambience.',
    amenities: ['Free WiFi', 'Mini Bar', 'Work Desk', 'Rain Shower'],
    popular: false,
  },
  {
    id: 'family-connecting',
    name: 'Family Connecting',
    price: '৳25,000',
    image: '/family-connecting.webp',
    size: '80 sqm',
    bed: '2 King Beds',
    occupancy: '4 Adults, 2 Kids',
    view: 'Pool View',
    description: 'Perfect for families, this spacious connecting room offers separate sleeping areas, dual bathrooms, and a fun gaming console to keep the kids entertained. Have peace of mind with shared access while maintaining privacy.',
    amenities: ['Connecting Doors', '2 Bathrooms', 'Lounge Area', 'Gaming Console'],
    popular: false,
  },
  {
    id: 'premium-suite',
    name: 'Premium Suite',
    price: '৳20,000',
    image: '/premium-suite.webp',
    size: '65 sqm',
    bed: 'King Bed',
    occupancy: '2 Adults',
    view: 'City View',
    description: 'Unwind in the expansive Premium Suite, featuring a separated lounge area for relaxation, a deep soaking bathtub, and panoramic city views. Designed specifically for comfort, this corner suite is ideal for a tranquil city escape.',
    amenities: ['Lounge Area', 'Espresso Machine', 'Bathtub', 'Premium WiFi'],
    popular: false,
  },
  {
    id: 'premium-suite-riverview',
    name: 'Premium Suite Riverview',
    price: '৳23,000',
    image: '/premium-suite-riverview.webp',
    size: '65 sqm',
    bed: 'King Bed',
    occupancy: '2 Adults',
    view: 'Padma River View',
    description: 'Wake up to breathtaking views of the Padma River. Enjoy premium amenities, an exclusive balcony, and unmatched tranquility in this luxurious riverside suite. Our premium toiletries and espresso machine complete the ultimate relaxation package.',
    amenities: ['Balcony', 'Espresso Machine', 'Bathtub', 'Premium Toiletries'],
    popular: true,
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    price: '৳70,000',
    image: '/presidential-suite.webp',
    size: '120 sqm',
    bed: 'Super King Bed',
    occupancy: '2 Adults',
    view: 'Panoramic River View',
    description: 'Our ultimate offering. The Presidential Suite boasts unparalleled luxury with a private butler, panoramic river views, a private dining room, and an in-suite jacuzzi. Entertain guests or retreat into supreme comfort in this expansive suite.',
    amenities: ['Private Butler', 'Jacuzzi', 'Dining Area', 'Private Check-in', 'Premium Bar', 'Lounge'],
    popular: false,
  }
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);

  // Manage body scroll lock
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (selectedRoom) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [selectedRoom]);

  const handleRoomClick = (room: typeof rooms[0]) => {
    setSelectedRoom(room);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  return (
    <section id="rooms" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
            Signature Accommodation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#002349] leading-tight font-medium">
            Rooms & Suites
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Experience the epitome of luxury with our thoughtfully designed rooms, offering breathtaking views and unparalleled comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleRoomClick(room)}
              className={cn(
                "group relative bg-[#FAF9F6] flex flex-col border border-[#002349]/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 block cursor-pointer"
              )}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 z-20 bg-[#C5A059] text-[#002349] text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-md">
                  Most Popular
                </div>
              )}
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <ImageFallback
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                   <h3 className="font-serif text-2xl text-white font-medium">{room.name}</h3>
                   <div className="text-right">
                     <span className="text-xs text-white/80 uppercase tracking-widest block mb-1">From</span>
                     <span className="text-[#C5A059] font-semibold text-lg">{room.price}</span>
                     <span className="text-white/80 text-xs"> / night</span>
                   </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col flex-1 border-t-2 border-[#C5A059]/20">
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 text-sm text-gray-600 font-medium">
                  <div className="flex items-center space-x-2">
                    <Maximize size={16} className="text-[#C5A059]" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BedDouble size={16} className="text-[#C5A059]" />
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-[#C5A059]" />
                    <span>{room.occupancy}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <View size={16} className="text-[#C5A059]" />
                    <span>{room.view}</span>
                  </div>
                </div>

                <div className="mb-8 flex-1">
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-gray-500">
                        <Check size={12} className="text-[#002349]" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/booking?room=${room.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full text-center py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#002349] border border-[#002349] hover:bg-[#002349] hover:text-white transition-colors duration-300"
                >
                  Book This Room
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-[#002349]/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="fixed inset-x-4 top-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 w-auto md:w-full max-w-4xl max-h-[90vh] bg-white z-[101] flex flex-col overflow-hidden shadow-2xl rounded-2xl"
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="md:h-[350px] h-[250px] relative w-full shrink-0">
                <ImageFallback
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-2">
                   <h3 className="font-serif text-3xl md:text-4xl text-white font-medium">{selectedRoom.name}</h3>
                   <div className="text-left md:text-right">
                     <span className="text-xs text-white/80 uppercase tracking-widest block mb-1">From</span>
                     <span className="text-[#C5A059] font-semibold text-2xl">{selectedRoom.price}</span>
                     <span className="text-white/80 text-sm"> / night</span>
                   </div>
                </div>
              </div>

              <div className="p-6 md:p-10 overflow-y-auto w-full flex-1 bg-[#FAF9F6]">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-2/3 space-y-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-3">About This Room</h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {selectedRoom.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4">Room Amenities</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedRoom.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                            <Check size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/3 space-y-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm shrink-0">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4 border-b border-gray-100 pb-3">Room Specifications</h4>
                    
                    <div className="space-y-4 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3"><Maximize size={16} className="text-gray-400" /><span>Size</span></div>
                        <span className="font-medium text-[#002349]">{selectedRoom.size}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3"><BedDouble size={16} className="text-gray-400" /><span>Bed</span></div>
                        <span className="font-medium text-[#002349]">{selectedRoom.bed}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3"><Users size={16} className="text-gray-400" /><span>Occupancy</span></div>
                        <span className="font-medium text-[#002349]">{selectedRoom.occupancy}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3"><View size={16} className="text-gray-400" /><span>View</span></div>
                        <span className="font-medium text-[#002349]">{selectedRoom.view}</span>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-gray-100">
                      <Link
                        href={`/booking?room=${selectedRoom.id}`}
                        className="flex items-center justify-center w-full py-4 bg-[#002349] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-[#002349] transition-colors rounded-lg"
                      >
                        Book This Room
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
