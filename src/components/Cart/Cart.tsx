import ShoppingCart from '@geist-ui/icons/shoppingCart';

const Cart = async () => (
  <div className="cart w-sm h-10 bg-zinc-300 flex items-center gap-2 mt-8">
    <ShoppingCart className="w-10 h-10 p-2 bg-zinc-400" />
    <span className="text-black">CART: 0 ITEM(S) - $0.00</span>
  </div>
);

export default Cart;
