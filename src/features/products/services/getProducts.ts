import productsMock from '@/mocks/products.mock.json';

import { normalizeProduct, type Product } from './normalizeProducts';

interface MockProductsData {
  products: Array<{
    name: string;
    listPrice: number;
    price: number;
    image: string;
  }>;
  totals: {
    productsTotal: number;
    shipping: number;
    discount: number;
    subtotal: number;
  };
}

export async function getProducts(): Promise<Product[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const data = productsMock as MockProductsData;

    return data.products.map(normalizeProduct);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('getProducts error:', error);
    return [];
  }
}
