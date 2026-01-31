'use client';

import { useEffect, useState } from 'react';

import ProductCard from '@/components/ProductCard/ProductCard';
import { getProducts } from '@/features/products/services/getProducts';
import type { Product } from '@/features/products/services/normalizeProducts';

const Section = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  const extendedProducts = [...products, ...products.slice(0, 3)];

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {extendedProducts.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Section;
