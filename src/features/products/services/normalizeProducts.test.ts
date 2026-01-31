import { normalizeProduct, type MockProduct, type Product } from './normalizeProducts';

describe('normalizeProduct', () => {
  it('should normalize product with discount', () => {
    const mockProduct: MockProduct = {
      name: 'Test Product',
      listPrice: 100,
      price: 80,
      image: 'test.jpg',
    };

    const result: Product = normalizeProduct(mockProduct);

    expect(result).toEqual({
      id: 'Test Product-test.jpg',
      name: 'Test Product',
      image: 'test.jpg',
      price: 80,
      oldPrice: 100,
      discount: 20,
    });
  });

  it('should normalize product without discount', () => {
    const mockProduct: MockProduct = {
      name: 'Test Product',
      listPrice: 100,
      price: 100,
      image: 'test.jpg',
    };

    const result: Product = normalizeProduct(mockProduct);

    expect(result).toEqual({
      id: 'Test Product-test.jpg',
      name: 'Test Product',
      image: 'test.jpg',
      price: 100,
      oldPrice: null,
      discount: null,
    });
  });

  it('should handle zero discount correctly', () => {
    const mockProduct: MockProduct = {
      name: 'Test Product',
      listPrice: 100,
      price: 100,
      image: 'test.jpg',
    };

    const result: Product = normalizeProduct(mockProduct);

    expect(result.discount).toBeNull();
    expect(result.oldPrice).toBeNull();
  });

  it('should calculate discount correctly', () => {
    const mockProduct: MockProduct = {
      name: 'Test Product',
      listPrice: 200,
      price: 150,
      image: 'test.jpg',
    };

    const result: Product = normalizeProduct(mockProduct);

    expect(result.discount).toBe(25); // (200-150)/200 * 100 = 25
    expect(result.oldPrice).toBe(200);
    expect(result.price).toBe(150);
  });
});
