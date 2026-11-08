import { Clock, MapPin, Phone } from 'lucide-react';
import { shopConfig } from '../config/shop';
import { t } from '../config/translations';
import type { Lang } from '../types';

export function ContactSection({ lang }: { lang: Lang }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">{t(lang, 'contact_title')}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-brand-border bg-white p-5 shadow-soft">
          <h3 className="font-semibold">{shopConfig.name[lang]}</h3>
          <p className="mt-3 flex gap-2 text-sm text-brand-muted"><MapPin size={16} className="mt-0.5 shrink-0" />{shopConfig.address[lang]}</p>
          <p className="mt-2 flex gap-2 text-sm text-brand-muted"><Phone size={16} className="mt-0.5 shrink-0" /><a className="underline" href={`tel:${shopConfig.phone.replace(/\s+/g, '')}`}>{shopConfig.phone}</a></p>
          <p className="mt-2 text-sm text-brand-muted">
            WhatsApp: <a className="underline" href={`https://wa.me/${shopConfig.whatsappNumber}`} target="_blank" rel="noreferrer">{shopConfig.phone}</a>
          </p>
          <p className="mt-3 flex gap-2 text-sm text-brand-muted"><Clock size={16} className="mt-0.5 shrink-0" /><span><strong className="text-brand-text">{t(lang, 'opening_hours')}:</strong> {shopConfig.hours[lang]}</span></p>
          <a href={shopConfig.mapUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-xl bg-brand-primary px-4 py-2 text-sm font-medium text-white">
            {t(lang, 'get_directions')}
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-soft">
          <iframe
            title="Namma Grocery location map"
            src="https://www.google.com/maps?q=Tiruppur,Tamil+Nadu&output=embed"
            className="h-72 w-full md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
