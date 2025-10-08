import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';
import './product.css';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example API call - replace with your endpoint
    fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then((data) => setProduct(data))
      .catch((e) => console.warn('product fetch', e))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-details">
      <div className="media">
        <img src={product.image || '/placeholder.png'} alt={product.name} />
      </div>
      <div className="info">
        <h1>{product.name}</h1>
        <p className="price">{formatCurrency(product.price)}</p>
        <p className="desc">{product.description}</p>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}
