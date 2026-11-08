import { shopConfig } from '../config/shop';
import { t } from '../config/translations';
import type { Lang } from '../types';

export function AboutSection({ lang }: { lang: Lang }) {
  return (
    <section id="about" className="bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-sm font-medium text-brand-secondary">{t(lang, 'about_title')}</p>
        <h2 className="mt-1 text-2xl font-semibold">{t(lang, 'about_headline')}</h2>
        <p className="mt-3 max-w-3xl text-brand-muted">{t(lang, 'about_text')}</p>
        <div className="mt-5 rounded-2xl border border-brand-border bg-white p-4 text-sm text-brand-muted">
          <strong className="text-brand-text">{shopConfig.name[lang]}</strong> — {shopConfig.address[lang]}
        </div>
      </div>
    </section>
  );
}
