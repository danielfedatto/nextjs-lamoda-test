'use client';

import ShoppingCart from '@geist-ui/icons/shoppingCart';

import { useCart } from '@/features/cart/context/CartContext';
import type { Product } from '@/features/products/services/normalizeProducts';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-4 w-xs bg-zinc-300 text-white font-semibold 
        hover:bg-black transition-colors uppercase flex 
        gap-2 items-center cursor-pointer transition"
    >
      <ShoppingCart className="w-10 h-10 p-2 bg-zinc-400" />
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
