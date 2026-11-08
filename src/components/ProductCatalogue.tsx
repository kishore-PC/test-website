import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { categories, products } from '../config/products';
import { t } from '../config/translations';
import { useCart } from '../context/CartContext';
import type { Lang } from '../types';
import { formatInr } from '../utils/format';

export function ProductCatalogue({
  lang,
  selectedCategory,
  onCategoryChange,
}: {
  lang: Lang;
  selectedCategory: string;
  onCategoryChange: (id: string) => void;
}) {
  const cart = useCart();
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('default');
  const [popularOnly, setPopularOnly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [qty, setQty] = useState<Record<string, number>>({});

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    let list = products.filter((p) => {
      if (selectedCategory && p.categoryId !== selectedCategory) return false;
      if (popularOnly && !p.popular) return false;
      if (availableOnly && !p.available) return false;
      if (!query) return true;
      return (
        p.name.en.toLowerCase().includes(query) ||
        p.name.ta.toLowerCase().includes(query) ||
        p.size.toLowerCase().includes(query)
      );
    });
    if (sort === 'price_low') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price_high') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [q, selectedCategory, sort, popularOnly, availableOnly]);

  return (
    <section id="shop" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">{t(lang, 'shop_products')}</h2>
      <div className="mt-4 grid gap-3 rounded-2xl border border-brand-border bg-white p-4 shadow-soft md:grid-cols-4">
        <label className="relative md:col-span-2">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t(lang, 'search_placeholder')}
            className="w-full rounded-xl border border-brand-border py-2 pl-9 pr-3 text-sm"
            aria-label={t(lang, 'search_placeholder')}
          />
        </label>
        <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)} className="rounded-xl border border-brand-border px-3 py-2 text-sm" aria-label={t(lang, 'all_categories')}>
          <option value="">{t(lang, 'all_categories')}</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name[lang]}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-xl border border-brand-border px-3 py-2 text-sm" aria-label={t(lang, 'sort_label')}>
          <option value="default">{t(lang, 'sort_default')}</option>
          <option value="price_low">{t(lang, 'sort_price_low')}</option>
          <option value="price_high">{t(lang, 'sort_price_high')}</option>
        </select>
        <div className="flex flex-wrap gap-4 text-sm text-brand-muted md:col-span-4">
          <label className="flex items-center gap-2"><input type="checkbox" checked={popularOnly} onChange={(e) => setPopularOnly(e.target.checked)} /> {t(lang, 'filter_popular')}</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} /> {t(lang, 'filter_available')}</label>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-brand-border bg-white p-8 text-center text-brand-muted">{t(lang, 'no_results')}</div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => {
            const qv = qty[p.id] ?? 1;
            return (
              <article key={p.id} className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-soft">
                <img src={p.image} alt={`${p.name.en} / ${p.name.ta}`} className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-semibold">{p.name[lang]}</h3>
                  <p className="text-xs text-brand-muted">{lang === 'en' ? p.name.ta : p.name.en}</p>
                  <p className="mt-1 text-sm text-brand-muted">{p.size}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-semibold text-brand-primary">{formatInr(p.price)}</span>
                    {p.mrp && p.mrp > p.price && <span className="text-xs text-brand-muted line-through">{t(lang, 'mrp')} {formatInr(p.mrp)}</span>}
                    {p.isSamplePrice && <span className="rounded bg-brand-accent/20 px-1.5 py-0.5 text-[11px] text-brand-text">{t(lang, 'sample_price')}</span>}
                  </div>
                  <p className={`mt-1 text-xs ${p.available ? 'text-brand-secondary' : 'text-red-600'}`}>{p.available ? t(lang, 'available') : t(lang, 'unavailable')}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <label className="text-sm text-brand-muted" htmlFor={`qty-${p.id}`}>{t(lang, 'qty')}</label>
                    <select id={`qty-${p.id}`} value={qv} onChange={(e) => setQty((s) => ({ ...s, [p.id]: Number(e.target.value) }))} className="rounded-lg border border-brand-border px-2 py-1 text-sm" disabled={!p.available}>
                      {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                    <button
                      type="button"
                      disabled={!p.available}
                      onClick={() => cart.add(p.id, qv)}
                      className="ml-auto rounded-lg bg-brand-primary px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {t(lang, 'add_to_cart')}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
