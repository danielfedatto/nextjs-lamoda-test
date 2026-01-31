import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getProducts } from '@/features/products/services/getProducts';

import Section from './Section';

// Mock ProductCard
jest.mock('@/components/ProductCard/ProductCard', () => ({
  __esModule: true,
  default: ({ product }: { product: { name: string } }) => (
    <div data-testid="product-card">{product.name}</div>
  ),
}));

// Mock getProducts
jest.mock('@/features/products/services/getProducts', () => ({
  getProducts: jest.fn(),
}));

const mockGetProducts = getProducts as jest.MockedFunction<typeof getProducts>;

describe('Section', () => {
  beforeEach(() => {
    mockGetProducts.mockClear();
  });

  it('renders products in a grid', async () => {
    const mockProducts = [
      { id: '1', name: 'Product 1', image: '', price: 10, oldPrice: null, discount: null },
      { id: '2', name: 'Product 2', image: '', price: 20, oldPrice: null, discount: null },
    ];

    mockGetProducts.mockResolvedValue(mockProducts);

    render(<Section />);

    await waitFor(() => {
      expect(screen.queryAllByTestId('product-card').length).toBeGreaterThan(0);
    });

    // Should render 4 cards: 2 products + 2 duplicated (slice(0,3) but only 2 available)
    expect(screen.getAllByTestId('product-card')).toHaveLength(4);
    expect(screen.getAllByText('Product 1')).toHaveLength(2);
    expect(screen.getAllByText('Product 2')).toHaveLength(2);
  });

  it('renders empty section when no products', async () => {
    mockGetProducts.mockResolvedValue([]);

    render(<Section />);

    await waitFor(() => {
      expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
    });
  });

  it('handles getProducts error', async () => {
    mockGetProducts.mockRejectedValue(new Error('API error'));

    render(<Section />);

    await waitFor(() => {
      expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
    });
  });
});
