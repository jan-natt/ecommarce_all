import React, { useState } from 'react';
import { validateProduct, required } from '../utils/validations';
import './product.css';

export default function ProductForm({ initial = {}, onSave }) {
  const [product, setProduct] = useState({
    name: initial.name || '',
    price: initial.price || '',
    description: initial.description || '',
    image: initial.image || '',
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((p) => ({ ...p, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validateProduct(product);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    if (onSave) onSave(product);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={product.name} onChange={handleChange} />
        {errors.name && <div className="field-error">{errors.name}</div>}
      </label>

      <label>
        Price
        <input name="price" value={product.price} onChange={handleChange} />
        {errors.price && <div className="field-error">{errors.price}</div>}
      </label>

      <label>
        Image URL
        <input name="image" value={product.image} onChange={handleChange} />
      </label>

      <label>
        Description
        <textarea name="description" value={product.description} onChange={handleChange} />
        {errors.description && <div className="field-error">{errors.description}</div>}
      </label>

      <button type="submit" className="btn">Save</button>
    </form>
  );
}
