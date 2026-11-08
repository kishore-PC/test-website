import { categories } from '../config/products';
import { shopConfig } from '../config/shop';
import { t } from '../config/translations';
import type { Lang } from '../types';

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-brand-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="font-semibold text-brand-primary">{shopConfig.name[lang]}</div>
          <p className="mt-2 text-sm text-brand-muted">{shopConfig.tagline[lang]}. Fresh products, fair prices, and friendly service in Tiruppur.</p>
          <a href={`https://wa.me/${shopConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-brand-primary underline">
            {t(lang, 'order_whatsapp')}
          </a>
        </div>
        <div>
          <h3 className="font-semibold">{t(lang, 'footer_quick')}</h3>
          <ul className="mt-2 space-y-1 text-sm text-brand-muted">
            <li><a href="#home">{t(lang, 'nav_home')}</a></li>
            <li><a href="#shop">{t(lang, 'nav_shop')}</a></li>
            <li><a href="#about">{t(lang, 'nav_about')}</a></li>
            <li><a href="#contact">{t(lang, 'nav_contact')}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">{t(lang, 'footer_categories')}</h3>
          <ul className="mt-2 space-y-1 text-sm text-brand-muted">
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}>{c.name[lang]}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">{t(lang, 'footer_contact')}</h3>
          <p className="mt-2 text-sm text-brand-muted">{shopConfig.address[lang]}</p>
          <p className="mt-1 text-sm text-brand-muted">{shopConfig.phone}</p>
          <p className="mt-1 text-sm text-brand-muted">{shopConfig.hours[lang]}</p>
        </div>
      </div>
      <div className="border-t border-brand-border px-4 py-4 text-center text-sm text-brand-muted">
        © {shopConfig.year} {shopConfig.name.en}. {t(lang, 'rights')}
      </div>
    </footer>
  );
}
