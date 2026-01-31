'use client';

import ShoppingCart from '@geist-ui/icons/shoppingCart';

import { useCart } from '@/features/cart/context/CartContext';

const Cart = () => {
  const { getTotals } = useCart();
  const { itemsCount, productsTotal } = getTotals();

  return (
    <div
      className="cart md:max-w-md max-w-xs h-10 bg-zinc-300 
            flex items-center gap-2 mt-8 pr-4"
    >
      <ShoppingCart className="w-10 h-10 p-2 bg-zinc-400" />
      <span className="text-black">
        CART: {itemsCount} ITEM(S) - ${productsTotal.toFixed(2)}
      </span>
    </div>
  );
};

export default Cart;
