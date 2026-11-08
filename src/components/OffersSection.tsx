import { t } from '../config/translations';
import type { Lang } from '../types';

export function OffersSection({ lang }: { lang: Lang }) {
  return (
    <section id="offers" className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary p-6 text-white shadow-soft md:p-8">
        <p className="text-sm opacity-90">{t(lang, 'offers_title')}</p>
        <h2 className="mt-1 text-2xl font-semibold">{t(lang, 'offers_headline')}</h2>
        <p className="mt-2 max-w-3xl text-white/90">{t(lang, 'offers_text')}</p>
      </div>
    </section>
  );
}
