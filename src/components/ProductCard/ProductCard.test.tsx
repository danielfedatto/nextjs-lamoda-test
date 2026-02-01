// eslint-disable-next-line import-x/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import-x/no-extraneous-dependencies
import '@testing-library/jest-dom';

import { normalizeProduct } from '@/features/products/services/normalizeProducts';

import ProductCard from './ProductCard';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div data-testid="mock-image" data-src={src} data-alt={alt} {...props} />
  ),
}));

// Mock AddToCartButton
jest.mock('./AddToCartButton', () => ({
  __esModule: true,
  default: ({ product }: { product: { name: string } }) => (
    <button type="button">Add to Cart - {product.name}</button>
  ),
}));

describe('ProductCard', () => {
  const mockProduct = {
    name: 'Test Product',
    listPrice: 100,
    price: 80,
    image: 'https://example.com/image.jpg',
  };

  const product = normalizeProduct(mockProduct);

  it('renders product name, price, and image', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByTestId('mock-image')).toBeInTheDocument();
  });

  it('renders discount when available', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText('-20% OFF')).toBeInTheDocument();
  });

  it('does not render discount when not available', () => {
    const noDiscountProduct = normalizeProduct({
      ...mockProduct,
      price: 100,
    });

    render(<ProductCard product={noDiscountProduct} />);

    expect(screen.queryByText(/-.*% OFF/)).not.toBeInTheDocument();
  });

  it('renders with default image size', () => {
    render(<ProductCard product={product} />);

    const img = screen.getByTestId('mock-image');
    expect(img).toHaveAttribute('width', '300');
    expect(img).toHaveAttribute('height', '400');
  });

  it('renders with custom image size', () => {
    render(<ProductCard product={product} imageSize={{ width: 200, height: 250 }} />);

    const img = screen.getByTestId('mock-image');
    expect(img).toHaveAttribute('width', '200');
    expect(img).toHaveAttribute('height', '250');
  });

  it('renders with responsive image sizes', () => {
    render(<ProductCard product={product} responsive />);

    const img = screen.getByTestId('mock-image');
    expect(img).toHaveAttribute(
      'sizes',
      '(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px',
    );
  });

  it('renders AddToCartButton', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(`Add to Cart - ${product.name}`)).toBeInTheDocument();
  });
});
