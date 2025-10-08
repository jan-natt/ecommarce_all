// Common form validation helpers

export function isEmail(value) {
  if (!value) return false;
  // simple email regex - suitable for client-side validation
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(value);
}

export function isStrongPassword(value) {
  if (!value) return false;
  // at least 8 chars, one letter and one number (adjust as needed)
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/.test(value);
}

export function required(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

export function minLength(value, len) {
  if (value == null) return false;
  return String(value).length >= len;
}

export function maxLength(value, len) {
  if (value == null) return true;
  return String(value).length <= len;
}

// validate product object example
export function validateProduct(product = {}) {
  const errors = {};
  if (!required(product.name)) errors.name = 'Name is required';
  if (!required(product.price)) errors.price = 'Price is required';
  else if (isNaN(Number(product.price))) errors.price = 'Price must be a number';
  if (!required(product.description)) errors.description = 'Description is required';
  return errors;
}
