import type { Category, Product } from '../types';

const img = (query: string) =>
  `https://images.unsplash.com/${query}?auto=format&fit=crop&w=600&q=60`;

export const categories: Category[] = [
  { id: 'rice-grains', name: { en: 'Rice & Grains', ta: 'அரிசி மற்றும் தானியங்கள்' }, image: img('photo-1586201375761-83865001e31c') },
  { id: 'dals-pulses', name: { en: 'Dals & Pulses', ta: 'பருப்பு வகைகள்' }, image: img('photo-1596040033229-a9821ebd058d') },
  { id: 'cooking-oils', name: { en: 'Cooking Oils', ta: 'சமையல் எண்ணெய்' }, image: img('photo-1474979266404-7eaacbcd87c5') },
  { id: 'spices-masalas', name: { en: 'Spices & Masalas', ta: 'மசாலா மற்றும் மளிகை' }, image: img('photo-1596040033229-a0b3b7e1b6e9') },
  { id: 'sugar-salt', name: { en: 'Sugar & Salt', ta: 'சர்க்கரை மற்றும் உப்பு' }, image: img('photo-1621939514649-280e2ee25f60') },
  { id: 'flour-atta', name: { en: 'Flour & Atta', ta: 'மாவு வகைகள்' }, image: img('photo-1574323347407-f5e1ad6d020b') },
  { id: 'biscuits-snacks', name: { en: 'Biscuits & Snacks', ta: 'பிஸ்கட் மற்றும் ஸ்நாக்ஸ்' }, image: img('photo-1599490659213-e2b9527bd087') },
  { id: 'dairy', name: { en: 'Dairy Products', ta: 'பால் பொருட்கள்' }, image: img('photo-1628088062854-d1870b4553da') },
  { id: 'beverages', name: { en: 'Beverages', ta: 'குளிர்பானங்கள்' }, image: img('photo-1544787219-7f47ccb76574') },
  { id: 'household', name: { en: 'Household Essentials', ta: 'வீட்டு உபயோகப் பொருட்கள்' }, image: img('photo-1583947215259-38e31be8751f') },
  { id: 'cleaning', name: { en: 'Cleaning Products', ta: 'சுத்தம் செய்யும் பொருட்கள்' }, image: img('photo-1563453392212-326f5e854473') },
  { id: 'personal-care', name: { en: 'Personal Care', ta: 'தனிநபர் பராமரிப்பு' }, image: img('photo-1556228578-0d85b1a4d571') },
];

// Sample products for demonstration. Prices are placeholders until confirmed by the shop owner.
export const products: Product[] = [
  { id: 'ponni-5kg', categoryId: 'rice-grains', name: { en: 'Ponni Rice', ta: 'பொன்னி அரிசி' }, size: '5 kg', price: 320, isSamplePrice: true, available: true, popular: true, image: img('photo-1586201375761-83865001e31c') },
  { id: 'idli-5kg', categoryId: 'rice-grains', name: { en: 'Idli Rice', ta: 'இட்லி அரிசி' }, size: '5 kg', price: 280, isSamplePrice: true, available: true, image: img('photo-1536304993881-ff6e9eefa2a6') },
  { id: 'basmati-1kg', categoryId: 'rice-grains', name: { en: 'Basmati Rice', ta: 'பாஸ்மதி அரிசி' }, size: '1 kg', price: 140, isSamplePrice: true, available: true, image: img('photo-1516684732162-798a0062be99') },
  { id: 'toor-1kg', categoryId: 'dals-pulses', name: { en: 'Toor Dal', ta: 'துவரம் பருப்பு' }, size: '1 kg', price: 165, isSamplePrice: true, available: true, popular: true, image: img('photo-1596040033229-a9821ebd058d') },
  { id: 'urad-1kg', categoryId: 'dals-pulses', name: { en: 'Urad Dal', ta: 'உளுத்தம் பருப்பு' }, size: '1 kg', price: 155, isSamplePrice: true, available: true, image: img('photo-1515543904379-3d757afe72e3') },
  { id: 'moong-500g', categoryId: 'dals-pulses', name: { en: 'Moong Dal', ta: 'பாசிப்பருப்பு' }, size: '500 g', price: 75, isSamplePrice: true, available: true, image: img('photo-1615485290382-441e4d049cb5') },
  { id: 'sunflower-1l', categoryId: 'cooking-oils', name: { en: 'Sunflower Oil', ta: 'சூரியகாந்தி எண்ணெய்' }, size: '1 L', price: 145, isSamplePrice: true, available: true, popular: true, image: img('photo-1474979266404-7eaacbcd87c5') },
  { id: 'groundnut-1l', categoryId: 'cooking-oils', name: { en: 'Groundnut Oil', ta: 'கடலை எண்ணெய்' }, size: '1 L', price: 190, isSamplePrice: true, available: true, image: img('photo-1620706857370-e1b9770e8bb1') },
  { id: 'coconut-500ml', categoryId: 'cooking-oils', name: { en: 'Coconut Oil', ta: 'தேங்காய் எண்ணெய்' }, size: '500 ml', price: 110, isSamplePrice: true, available: true, image: img('photo-1526947425960-945c6e72858f') },
  { id: 'sugar-1kg', categoryId: 'sugar-salt', name: { en: 'Sugar', ta: 'சர்க்கரை' }, size: '1 kg', price: 48, isSamplePrice: true, available: true, popular: true, image: img('photo-1621939514649-280e2ee25f60') },
  { id: 'salt-1kg', categoryId: 'sugar-salt', name: { en: 'Salt', ta: 'உப்பு' }, size: '1 kg', price: 22, isSamplePrice: true, available: true, image: img('photo-1518110925495-5fe2fda2828c') },
  { id: 'turmeric-100g', categoryId: 'spices-masalas', name: { en: 'Turmeric Powder', ta: 'மஞ்சள் தூள்' }, size: '100 g', price: 35, isSamplePrice: true, available: true, image: img('photo-1615485500704-8e990f9900f7') },
  { id: 'chilli-100g', categoryId: 'spices-masalas', name: { en: 'Chilli Powder', ta: 'மிளகாய் தூள்' }, size: '100 g', price: 40, isSamplePrice: true, available: true, image: img('photo-1596040033229-a9821ebd058d') },
  { id: 'atta-1kg', categoryId: 'flour-atta', name: { en: 'Wheat Flour / Atta', ta: 'கோதுமை மாவு' }, size: '1 kg', price: 58, isSamplePrice: true, available: true, image: img('photo-1574323347407-f5e1ad6d020b') },
  { id: 'rava-500g', categoryId: 'flour-atta', name: { en: 'Rava', ta: 'ரவை' }, size: '500 g', price: 32, isSamplePrice: true, available: true, image: img('photo-1509440159596-0249088772ff') },
  { id: 'biscuits-pack', categoryId: 'biscuits-snacks', name: { en: 'Biscuits', ta: 'பிஸ்கட்' }, size: '1 pack', price: 30, isSamplePrice: true, available: true, image: img('photo-1599490659213-e2b9527bd087') },
  { id: 'tea-250g', categoryId: 'beverages', name: { en: 'Tea Powder', ta: 'தேயிலைத் தூள்' }, size: '250 g', price: 95, isSamplePrice: true, available: true, image: img('photo-1544787219-7f47ccb76574') },
  { id: 'milk-500ml', categoryId: 'dairy', name: { en: 'Milk', ta: 'பால்' }, size: '500 ml', price: 28, isSamplePrice: true, available: true, image: img('photo-1628088062854-d1870b4553da') },
  { id: 'detergent-1kg', categoryId: 'cleaning', name: { en: 'Detergent Powder', ta: 'சலவைத் தூள்' }, size: '1 kg', price: 85, isSamplePrice: true, available: true, image: img('photo-1585421514738-01798e348b17') },
  { id: 'soap-bar', categoryId: 'personal-care', name: { en: 'Bathing Soap', ta: 'குளியல் சோப்பு' }, size: '1 bar', price: 40, isSamplePrice: true, available: true, image: img('photo-1600857544200-b2f666a9a2ec') },
];
