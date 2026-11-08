import { t } from '../config/translations';
import type { Lang } from '../types';

export function Testimonials({ lang }: { lang: Lang }) {
  return (
    <section className="bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">{t(lang, 'reviews_title')}</h2>
        <div className="mt-4 rounded-2xl border border-dashed border-brand-border bg-white p-6 text-brand-muted">
          {t(lang, 'reviews_placeholder')}
        </div>
      </div>
    </section>
  );
}
