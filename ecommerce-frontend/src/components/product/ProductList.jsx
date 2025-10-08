import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './product.css';

export default function ProductList({ initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialProducts.length) return; // skip fetch when provided
    setLoading(true);
    // Example fetch - replace with your API call
    fetch('/api/products')
      .then((r) => r.json())
      .then((data) => setProducts(data || []))
      .catch((err) => console.warn('fetch products', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (!products.length) return <div>No products found.</div>;

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
