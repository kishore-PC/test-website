import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { CartItem, Product } from '../types';
import { products } from '../config/products';

type CartContextValue = {
  items: CartItem[];
  add: (productId: string, qty?: number) => void;
  setQty: (productId: string, qty: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  count: number;
  total: number;
  detailed: Array<CartItem & { product: Product }>;
};

const KEY = 'namma-grocery-cart-v1';
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const detailed = items
      .map((i) => ({ ...i, product: products.find((p) => p.id === i.productId)! }))
      .filter((i) => i.product);
    return {
      items,
      add(productId, qty = 1) {
        setItems((prev) => {
          const found = prev.find((i) => i.productId === productId);
          if (found) return prev.map((i) => (i.productId === productId ? { ...i, quantity: i.quantity + qty } : i));
          return [...prev, { productId, quantity: qty }];
        });
      },
      setQty(productId, qty) {
        setItems((prev) =>
          qty <= 0 ? prev.filter((i) => i.productId !== productId) : prev.map((i) => (i.productId === productId ? { ...i, quantity: qty } : i)),
        );
      },
      remove(productId) {
        setItems((prev) => prev.filter((i) => i.productId !== productId));
      },
      clear() {
        setItems([]);
      },
      count: detailed.reduce((s, i) => s + i.quantity, 0),
      total: detailed.reduce((s, i) => s + i.quantity * i.product.price, 0),
      detailed,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
