export type Lang = 'en' | 'ta';

export type LocalizedText = {
  en: string;
  ta: string;
};

export type ShopConfig = {
  name: LocalizedText;
  tagline: LocalizedText;
  phone: string;
  whatsappNumber: string; // digits only, with country code, e.g. 919000000000
  address: LocalizedText;
  mapUrl: string;
  hours: LocalizedText;
  delivery: {
    available: boolean;
    areas: LocalizedText;
    minimumOrderNote: LocalizedText;
    chargesNote: LocalizedText;
    etaNote: LocalizedText;
  };
  socialLinks: { label: string; url: string }[];
  year: number;
};

export type Category = {
  id: string;
  name: LocalizedText;
  image: string;
};

export type Product = {
  id: string;
  categoryId: string;
  name: LocalizedText;
  size: string;
  price: number; // sample placeholder unless confirmed by shop owner
  mrp?: number; // only when verified
  isSamplePrice?: boolean;
  available: boolean;
  popular?: boolean;
  image: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CustomerDetails = {
  name: string;
  address: string;
  area: string;
  mobile: string;
};
