import React from 'react';
import ProductList from '../product/ProductList';
import './admin.css';

export default function ProductManagement() {
  return (
    <div className="admin-products">
      <h2>Product Management</h2>
      <ProductList />
      {/* You might add ProductForm here for create/edit */}
    </div>
  );
}
