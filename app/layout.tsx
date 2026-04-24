import type {Metadata} from 'next';
import './globals.css';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Padma AWT Rest House | Luxury Riverside Resort',
  description: 'Luxury beside the timeless Padma River. Experience sophisticated comfort, exclusive dining, and unforgettable riverside experiences in Bangladesh.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#FAF9F6] text-[#1A1A1A]" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />

        {/* Floating Social Widget */}
        <div className="fixed bottom-8 right-8 z-40 flex-col gap-4 items-center hidden lg:flex">
          <a href="#" className="w-10 h-10 rounded-full border border-[#002349]/10 bg-white flex items-center justify-center cursor-pointer hover:bg-[#002349] hover:text-white transition-colors shadow-sm" aria-label="Facebook">
            <Facebook size={18} strokeWidth={2} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-[#002349]/10 bg-white flex items-center justify-center cursor-pointer hover:bg-[#002349] hover:text-white transition-colors shadow-sm" aria-label="Instagram">
            <Instagram size={18} strokeWidth={2} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-[#002349]/10 bg-white flex items-center justify-center cursor-pointer hover:bg-[#002349] hover:text-white transition-colors shadow-sm" aria-label="YouTube">
            <Youtube size={18} strokeWidth={2} />
          </a>
        </div>
      </body>
    </html>
  );
}
