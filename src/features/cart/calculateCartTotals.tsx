export interface CartProduct {
  price: number;
  quantity: number;
}

export interface CartTotals {
  productsTotal: number;
  shipping: number;
  discount: number;
  subtotal: number;
}

export function calculateCartTotals(
  products: CartProduct[],
  shipping: number,
  discount: number,
): CartTotals {
  const productsTotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const subtotal = productsTotal + shipping - discount;

  return {
    productsTotal,
    shipping,
    discount,
    subtotal,
  };
}
