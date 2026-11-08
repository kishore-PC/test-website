import { categories } from '../config/products';
import { t } from '../config/translations';
import type { Lang } from '../types';

export function CategoryGrid({ lang, onSelect }: { lang: Lang; onSelect: (id: string) => void }) {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">{t(lang, 'shop_by_category')}</h2>
      <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelect(c.id)}
            className="group overflow-hidden rounded-2xl border border-brand-border bg-white text-left shadow-soft transition hover:-translate-y-0.5"
          >
            <img src={c.image} alt={`${c.name.en} / ${c.name.ta}`} className="h-28 w-full object-cover" loading="lazy" />
            <div className="p-3">
              <div className="font-medium text-brand-text">{c.name[lang]}</div>
              <div className="text-xs text-brand-muted">{lang === 'en' ? c.name.ta : c.name.en}</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
