import Promotions from '@/components/Promotions';

export const metadata = {
  title: 'Promotions | Padma AWT Rest House',
  description: 'Discover special offers and exclusive packages for your stay at Padma AWT Rest House.',
};

export default function PromotionsPage() {
  return (
    <main className="pt-20">
      <div className="bg-[#FAF9F6] py-16">
        <div className="container mx-auto px-6 max-w-7xl text-center space-y-4">
          <span className="text-[#C5A059] tracking-[0.2em] text-xs font-bold uppercase block">
            Special Packages
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#002349] leading-tight font-medium">
            Promotions & Offers
          </h1>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Elevate your stay with our thoughtfully curated packages designed for romance, family fun, or business.
          </p>
        </div>
      </div>
      <Promotions />
    </main>
  );
}
