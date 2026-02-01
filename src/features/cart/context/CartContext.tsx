'use client';

import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';

import type { Product } from '@/features/products/services/normalizeProducts';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotals: () => {
    itemsCount: number;
    productsTotal: number;
  };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setItems((prevItems) =>
        prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)),
      );
    },
    [removeFromCart],
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getTotals = useCallback(() => {
    const productsTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      itemsCount,
      productsTotal,
    };
  }, [items]);

  return (
    <CartContext.Provider
      value={useMemo(
        () => ({
          items,
          addToCart,
          removeFromCart,
          updateQuantity,
          clearCart,
          getTotals,
        }),
        [items, addToCart, removeFromCart, updateQuantity, clearCart, getTotals],
      )}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
