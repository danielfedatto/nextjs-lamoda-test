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

export function normalizeProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.sku,
    name: apiProduct.name,
    image: apiProduct.image,
    price: apiProduct.priceSpecification.price,
    oldPrice: apiProduct.priceSpecification.oldPrice ?? null,
    discount: apiProduct.priceSpecification.discount ?? null,
  };
}
