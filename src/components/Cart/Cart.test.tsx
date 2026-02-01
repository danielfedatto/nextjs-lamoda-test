// eslint-disable-next-line import-x/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import-x/no-extraneous-dependencies
import '@testing-library/jest-dom';

import Cart from './Cart';

// Mock the ShoppingCart icon
jest.mock('@geist-ui/icons/shoppingCart', () => ({
  __esModule: true,
  default: () => <div data-testid="shopping-cart-icon" />,
}));

// Mock the useCart hook
jest.mock('@/features/cart/context/CartContext', () => {
  const mock = jest.fn();
  return {
    useCart: mock,
  };
});

const { useCart: mockUseCart } = jest.requireMock('@/features/cart/context/CartContext');

describe('Cart', () => {
  beforeEach(() => {
    mockUseCart.mockClear();
  });

  it('renders cart with zero items', () => {
    mockUseCart.mockReturnValue({
      getTotals: () => ({ itemsCount: 0, productsTotal: 0 }),
    });

    render(<Cart />);

    expect(screen.getByText('CART: 0 ITEM(S) - $0.00')).toBeInTheDocument();
    expect(screen.getByTestId('shopping-cart-icon')).toBeInTheDocument();
  });

  it('renders cart with one item', () => {
    mockUseCart.mockReturnValue({
      getTotals: () => ({ itemsCount: 1, productsTotal: 25.99 }),
    });

    render(<Cart />);

    expect(screen.getByText('CART: 1 ITEM(S) - $25.99')).toBeInTheDocument();
  });

  it('renders cart with multiple items', () => {
    mockUseCart.mockReturnValue({
      getTotals: () => ({ itemsCount: 3, productsTotal: 75.47 }),
    });

    render(<Cart />);

    expect(screen.getByText('CART: 3 ITEM(S) - $75.47')).toBeInTheDocument();
  });
});
