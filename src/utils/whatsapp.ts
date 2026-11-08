import type { CartItem, CustomerDetails, Lang, Product } from '../types';
import { formatInr } from './format';

export function buildWhatsAppUrl(
  whatsappNumber: string,
  items: Array<CartItem & { product: Product }>,
  customer: CustomerDetails,
  lang: Lang,
) {
  const lines: string[] = [];
  if (lang === 'ta') {
    lines.push('வணக்கம்! நான் மளிகைப் பொருட்கள் ஆர்டர் செய்ய விரும்புகிறேன்.');
    lines.push('');
    lines.push('Hello! I would like to order the following groceries.');
  } else {
    lines.push('Hello! I would like to order the following groceries.');
    lines.push('');
    lines.push('வணக்கம்! நான் மளிகைப் பொருட்கள் ஆர்டர் செய்ய விரும்புகிறேன்.');
  }
  lines.push('');

  let total = 0;
  items.forEach((item, i) => {
    const lineTotal = item.product.price * item.quantity;
    total += lineTotal;
    const name = `${item.product.name.en} / ${item.product.name.ta}`;
    const sample = item.product.isSamplePrice ? ' (sample)' : '';
    lines.push(`${i + 1}. ${name} – ${item.product.size} x ${item.quantity} – ${formatInr(lineTotal)}${sample}`);
  });

  lines.push('');
  lines.push(`Total (estimated): ${formatInr(total)}${items.some((i) => i.product.isSamplePrice) ? ' [includes sample prices]' : ''}`);
  lines.push('');
  lines.push(`Customer Name: ${customer.name}`);
  lines.push(`Delivery Address: ${customer.address}`);
  lines.push(`Area: ${customer.area}`);
  lines.push(`Mobile Number: ${customer.mobile}`);
  lines.push('');
  lines.push('Please confirm availability and delivery details.');
  lines.push('Thank you!');

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}

export function validateCustomer(c: CustomerDetails) {
  const errors: Partial<Record<keyof CustomerDetails, string>> = {};
  if (!c.name.trim()) errors.name = 'required';
  if (!c.address.trim()) errors.address = 'required';
  if (!c.area.trim()) errors.area = 'required';
  if (!c.mobile.trim()) errors.mobile = 'required';
  else if (!/^[6-9]\d{9}$/.test(c.mobile.replace(/\s+/g, ''))) errors.mobile = 'mobile_invalid';
  return errors;
}
