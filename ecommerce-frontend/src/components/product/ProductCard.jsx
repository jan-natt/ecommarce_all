import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';
import './product.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="card-media">
        <img src={product.image || '/placeholder.png'} alt={product.name} />
      </Link>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div className="card-price">{formatCurrency(product.price)}</div>
        <Link to={`/product/${product.id}`} className="btn btn-secondary">View</Link>
      </div>
    </div>
  );
}
