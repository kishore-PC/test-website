import { shopConfig } from '../config/shop';
import { t } from '../config/translations';
import type { Lang } from '../types';

export function Hero({ lang, onShop }: { lang: Lang; onShop: () => void }) {
  return (
    <section id="home" className="bg-gradient-to-b from-brand-secondary/10 to-brand-bg">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-2 text-sm font-medium text-brand-secondary">{shopConfig.name[lang]}</p>
          <h1 className="text-3xl font-semibold leading-tight text-brand-text md:text-5xl">{t(lang, 'hero_title')}</h1>
          <p className="mt-4 max-w-xl text-brand-muted">{t(lang, 'hero_sub')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={onShop} className="rounded-xl bg-brand-primary px-5 py-3 font-medium text-white shadow-soft">
              {t(lang, 'explore_products')}
            </button>
            <a
              href={`https://wa.me/${shopConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-brand-border bg-white px-5 py-3 font-medium text-brand-primary"
            >
              {t(lang, 'order_whatsapp')}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {[t(lang, 'trust_quality'), t(lang, 'trust_price'), t(lang, 'trust_service'), t(lang, 'trust_delivery')].map((item) => (
              <span key={item} className="rounded-full border border-brand-border bg-white px-3 py-1 text-brand-muted">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=70"
            alt="Indian grocery shop with neatly arranged rice bags, pulses, spices, cooking oils, and packaged groceries"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
