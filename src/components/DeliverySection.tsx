import { shopConfig } from '../config/shop';
import { t } from '../config/translations';
import type { Lang } from '../types';

export function DeliverySection({ lang }: { lang: Lang }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-sm font-medium text-brand-secondary">{t(lang, 'delivery_title')}</p>
      <h2 className="mt-1 text-2xl font-semibold">{t(lang, 'delivery_headline')}</h2>
      <p className="mt-2 text-brand-muted">{t(lang, 'delivery_text')}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {[shopConfig.delivery.areas, shopConfig.delivery.minimumOrderNote, shopConfig.delivery.chargesNote].map((item, i) => (
          <div key={i} className="rounded-2xl border border-brand-border bg-white p-4 text-sm text-brand-muted shadow-soft">
            {item[lang]}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-brand-muted">{shopConfig.delivery.etaNote[lang]}</p>
      <a
        href={`https://wa.me/${shopConfig.whatsappNumber}?text=${encodeURIComponent(lang === 'ta' ? 'வணக்கம், திருப்பூரில் டெலிவரி கிடைக்குமா என்று 확인 செய்ய விரும்புகிறேன்.' : 'Hello, I would like to check delivery availability in Tiruppur.')}`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-xl bg-brand-primary px-5 py-3 font-medium text-white"
      >
        {t(lang, 'check_delivery')}
      </a>
    </section>
  );
}
