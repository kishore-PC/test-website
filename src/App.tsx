import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCatalogue } from './components/ProductCatalogue';
import { OffersSection } from './components/OffersSection';
import { AboutSection } from './components/AboutSection';
import { DeliverySection } from './components/DeliverySection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';
import { CartProvider, useCart } from './context/CartContext';
import { t } from './config/translations';
import type { Lang } from './types';

function WhyShop({ lang }: { lang: Lang }) {
  const items = [
    { title: t(lang, 'why_1'), sub: t(lang, 'why_1_ta_label') },
    { title: t(lang, 'why_2'), sub: t(lang, 'why_2_ta_label') },
    { title: t(lang, 'why_3'), sub: t(lang, 'why_3_ta_label') },
    { title: t(lang, 'why_4'), sub: t(lang, 'why_4_ta_label') },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">{t(lang, 'why_title')}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-brand-border bg-white p-5 shadow-soft">
            <h3 className="font-semibold text-brand-text">{item.title}</h3>
            <p className="mt-1 text-sm text-brand-secondary">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppInner() {
  const [lang, setLang] = useState<Lang>('en');
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const cart = useCart();

  function goToCategory(id: string) {
    setSelectedCategory(id);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={lang === 'ta' ? 'font-tamil' : 'font-sans'}>
      <Header lang={lang} setLang={setLang} cartCount={cart.count} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero lang={lang} onShop={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })} />
        <CategoryGrid lang={lang} onSelect={goToCategory} />
        <ProductCatalogue lang={lang} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <OffersSection lang={lang} />
        <WhyShop lang={lang} />
        <AboutSection lang={lang} />
        <DeliverySection lang={lang} />
        <Testimonials lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <ShoppingCart lang={lang} open={cartOpen} onClose={() => setCartOpen(false)} />
      {lang === 'en' ? null : null}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}
