export interface MockProduct {
  name: string;
  listPrice: number;
  price: number;
  image: string;
}

export interface ApiProduct {
  sku: string;
  name: string;
  image: string;
  priceSpecification: {
    price: number;
    oldPrice: number | null;
    discount: number | null;
  };
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number | null;
  discount: number | null;
}

export function normalizeProduct(mockProduct: MockProduct): Product {
  const hasDiscount = mockProduct.listPrice > mockProduct.price;
  const discount = hasDiscount
    ? Math.round(((mockProduct.listPrice - mockProduct.price) / mockProduct.listPrice) * 100)
    : null;

  const id = `${mockProduct.name}-${mockProduct.image}`;

  return {
    id,
    name: mockProduct.name,
    image: mockProduct.image,
    price: mockProduct.price,
    oldPrice: hasDiscount ? mockProduct.listPrice : null,
    discount,
  };
}
