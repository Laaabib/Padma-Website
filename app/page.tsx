import Hero from '@/components/Hero';
import About from '@/components/About';
import Promotions from '@/components/Promotions';
import Testimonials from '@/components/Testimonials';
import VirtualTour from '@/components/VirtualTour';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <VirtualTour />
      <Promotions />
      <Testimonials />
    </main>
  );
}
