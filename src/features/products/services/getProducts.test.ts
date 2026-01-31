import productsMock from '@/mocks/products.mock.json';

import { getProducts } from './getProducts';

describe('getProducts', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return normalized products', async () => {
    const promise = getProducts();

    // Fast-forward time
    jest.advanceTimersByTime(200);

    const products = await promise;

    expect(products).toHaveLength(productsMock.products.length);
    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('name', productsMock.products[0].name);
    expect(products[0]).toHaveProperty('price', productsMock.products[0].price);
  });
});
