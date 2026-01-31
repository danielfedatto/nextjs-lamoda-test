import productsMock from '@/mocks/products.mock.json';

import { normalizeProduct, type ApiProduct, type Product } from './normalizeProducts';

export async function getProducts(): Promise<Product[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const data = productsMock as ApiProduct[];

    return data.map(normalizeProduct);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('getProducts error:', error);
    return [];
  }
}
