import type { ShopConfig } from '../types';

export const shopConfig: ShopConfig = {
  name: { en: 'Namma Grocery', ta: 'நம்ம மளிகை' },
  tagline: { en: 'Your Everyday Grocery Store', ta: 'உங்கள் அன்றாட மளிகைக் கடை' },
  phone: '+91 90000 00000',
  whatsappNumber: '919000000000', // TODO: replace with the shop's real WhatsApp number
  address: {
    en: '[Shop Address], Tiruppur, Tamil Nadu, India',
    ta: '[கடை முகவரி], திருப்பூர், தமிழ்நாடு, இந்தியா',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tiruppur+Tamil+Nadu',
  hours: {
    en: 'Mon–Sat: 7:00 AM – 9:30 PM | Sun: 7:00 AM – 1:00 PM (placeholder)',
    ta: 'திங்கள்–சனி: காலை 7:00 – இரவு 9:30 | ஞாயிறு: காலை 7:00 – மதியம் 1:00 (மாற்றக்கூடியது)',
  },
  delivery: {
    available: true,
    areas: {
      en: 'Selected areas in Tiruppur (confirm availability on WhatsApp).',
      ta: 'திருப்பூரில் தேர்ந்தெடுக்கப்பட்ட பகுதிகளில் (WhatsApp மூலம் உறுதிப்படுத்தவும்).',
    },
    minimumOrderNote: {
      en: 'Minimum order amount: to be confirmed by the shop.',
      ta: 'குறைந்தபட்ச ஆர்டர் தொகை: கடையால் உறுதிப்படுத்தப்படும்.',
    },
    chargesNote: {
      en: 'Delivery charges: to be confirmed by the shop.',
      ta: 'டெலிவரி கட்டணம்: கடையால் உறுதிப்படுத்தப்படும்.',
    },
    etaNote: {
      en: 'Estimated delivery time: to be confirmed by the shop.',
      ta: 'மதிப்பிடப்பட்ட டெலிவரி நேரம்: கடையால் உறுதிப்படுத்தப்படும்.',
    },
  },
  socialLinks: [],
  year: 2026,
};
