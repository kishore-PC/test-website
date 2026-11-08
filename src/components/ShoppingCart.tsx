import { Minus, Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { shopConfig } from '../config/shop';
import { t } from '../config/translations';
import { useCart } from '../context/CartContext';
import type { CustomerDetails, Lang } from '../types';
import { formatInr } from '../utils/format';
import { buildWhatsAppUrl, validateCustomer } from '../utils/whatsapp';

export function ShoppingCart({ lang, open, onClose }: { lang: Lang; open: boolean; onClose: () => void }) {
  const cart = useCart();
  const [customer, setCustomer] = useState<CustomerDetails>({ name: '', address: '', area: '', mobile: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerDetails, string>>>({});

  if (!open) return null;

  function placeOrder() {
    const next = validateCustomer(customer);
    setErrors(next);
    if (Object.keys(next).length > 0 || cart.detailed.length === 0) return;
    const url = buildWhatsAppUrl(shopConfig.whatsappNumber, cart.detailed, customer, lang);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function field(key: keyof CustomerDetails, label: string) {
    return (
      <label className="block text-sm">
        <span className="text-brand-muted">{label}</span>
        <input
          value={customer[key]}
          onChange={(e) => setCustomer((c) => ({ ...c, [key]: e.target.value }))}
          className={`mt-1 w-full rounded-xl border px-3 py-2 ${errors[key] ? 'border-red-400' : 'border-brand-border'}`}
        />
        {errors[key] && <span className="mt-1 block text-xs text-red-600">{t(lang, errors[key]!)}</span>}
      </label>
    );
  }

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" className="absolute inset-0 bg-black/30" aria-label="Close cart" onClick={onClose} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-lg flex-col bg-brand-bg shadow-2xl">
        <div className="flex items-center justify-between border-b border-brand-border bg-white px-4 py-3">
          <h2 className="font-semibold">{t(lang, 'cart')} ({cart.count})</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-2" aria-label="Close"><X size={18} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {cart.detailed.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-brand-border bg-white p-8 text-center">
              <p className="text-brand-muted">{t(lang, 'cart_empty')}</p>
              <a href="#shop" onClick={onClose} className="mt-3 inline-block rounded-xl bg-brand-primary px-4 py-2 text-sm font-medium text-white">{t(lang, 'shop_now')}</a>
            </div>
          ) : (
            <>
              <ul className="space-y-3">
                {cart.detailed.map((item) => (
                  <li key={item.productId} className="rounded-2xl border border-brand-border bg-white p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-medium">{item.product.name[lang]}</div>
                        <div className="text-xs text-brand-muted">{item.product.size} · {formatInr(item.product.price)}{item.product.isSamplePrice ? ` (${t(lang, 'sample_price')})` : ''}</div>
                      </div>
                      <button type="button" onClick={() => cart.remove(item.productId)} className="text-red-600" aria-label={t(lang, 'remove')}><Trash2 size={16} /></button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button type="button" className="rounded border border-brand-border p-1" onClick={() => cart.setQty(item.productId, item.quantity - 1)} aria-label="Decrease"><Minus size={14} /></button>
                        <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                        <button type="button" className="rounded border border-brand-border p-1" onClick={() => cart.setQty(item.productId, item.quantity + 1)} aria-label="Increase"><Plus size={14} /></button>
                      </div>
                      <span className="font-medium">{formatInr(item.product.price * item.quantity)}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-2xl border border-brand-border bg-white p-4">
                <div className="flex justify-between text-sm"><span>{t(lang, 'subtotal')}</span><span>{formatInr(cart.total)}</span></div>
                <div className="mt-1 flex justify-between font-semibold"><span>{t(lang, 'estimated_total')}</span><span>{formatInr(cart.total)}</span></div>
                {cart.detailed.some((i) => i.product.isSamplePrice) && <p className="mt-2 text-xs text-brand-muted">Some items use sample prices until confirmed by the shop.</p>}
              </div>

              <div className="mt-4 rounded-2xl border border-brand-border bg-white p-4">
                <h3 className="font-semibold">{t(lang, 'checkout_title')}</h3>
                <p className="mt-1 text-sm text-brand-muted">{t(lang, 'checkout_help')}</p>
                <div className="mt-3 space-y-3">
                  {field('name', t(lang, 'name'))}
                  {field('address', t(lang, 'address'))}
                  {field('area', t(lang, 'area'))}
                  {field('mobile', t(lang, 'mobile'))}
                </div>
                <button type="button" onClick={placeOrder} className="mt-4 w-full rounded-xl bg-brand-primary px-4 py-3 font-medium text-white">
                  {t(lang, 'place_order')}
                </button>
                <p className="mt-2 text-xs text-brand-muted">{t(lang, 'order_note')}</p>
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
