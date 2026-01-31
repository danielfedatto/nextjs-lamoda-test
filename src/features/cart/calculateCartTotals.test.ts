import { products, totals } from '@/mocks/cart.mock.json';

import { calculateCartTotals } from './calculateCartTotals';

describe('calculateCartTotals', () => {
  it('should calculate cart totals correctly', () => {
    const cartProducts = products.map((product) => ({
      price: product.price,
      quantity: 1, // Cart quantity
    }));

    const cartTotals = calculateCartTotals(cartProducts, totals.shipping, totals.discount);

    expect(cartTotals).toEqual({
      productsTotal: totals.productsTotal,
      shipping: totals.shipping,
      discount: totals.discount,
      subtotal: totals.subtotal,
    });
  });
});
