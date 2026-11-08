import { Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { shopConfig } from '../config/shop';
import { t } from '../config/translations';
import type { Lang } from '../types';

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
  cartCount: number;
  onOpenCart: () => void;
};

export function Header({ lang, setLang, cartCount, onOpenCart }: Props) {
  const [open, setOpen] = useState(false);
  const links = [
    ['#home', t(lang, 'nav_home')],
    ['#shop', t(lang, 'nav_shop')],
    ['#categories', t(lang, 'nav_categories')],
    ['#offers', t(lang, 'nav_offers')],
    ['#about', t(lang, 'nav_about')],
    ['#contact', t(lang, 'nav_contact')],
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#home" className="font-semibold text-brand-primary">
          {shopConfig.name[lang]}
        </a>
        <nav className="hidden items-center gap-4 text-sm text-brand-muted md:flex" aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-brand-primary">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="rounded-full border border-brand-border p-1 text-xs" role="group" aria-label="Language">
            <button
              type="button"
              onClick={() => setLang('ta')}
              className={`rounded-full px-2 py-1 ${lang === 'ta' ? 'bg-brand-primary text-white' : 'text-brand-muted'}`}
            >
              தமிழ்
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full px-2 py-1 ${lang === 'en' ? 'bg-brand-primary text-white' : 'text-brand-muted'}`}
            >
              English
            </button>
          </div>
          <button type="button" onClick={onOpenCart} className="relative rounded-lg border border-brand-border p-2" aria-label={t(lang, 'cart')}>
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-brand-accent px-1 text-center text-[11px] font-semibold text-brand-text">
                {cartCount}
              </span>
            )}
          </button>
          <a
            href={`https://wa.me/${shopConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-brand-primary px-3 py-2 text-sm font-medium text-white md:inline-block"
          >
            {t(lang, 'order_whatsapp')}
          </a>
          <button type="button" className="rounded-lg border border-brand-border p-2 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-brand-border bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-2 text-sm">
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-1 text-brand-muted">
                {label}
              </a>
            ))}
            <a
              href={`https://wa.me/${shopConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-lg bg-brand-primary px-3 py-2 text-center font-medium text-white"
            >
              {t(lang, 'order_whatsapp')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
