// Small helper utilities used across components

// formatCurrency: formats a number into locale currency (default USD)
export function formatCurrency(amount, locale = 'en-US', currency = 'USD') {
  if (amount == null || isNaN(amount)) return '';
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}

// debounce: returns a debounced version of a function
export function debounce(fn, wait = 300) {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

// localStorage helpers for cart or auth tokens
export const storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('storage.set error', e);
    }
  },
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      console.warn('storage.get error', e);
      return fallback;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('storage.remove error', e);
    }
  }
};

// safe access helper (optional chaining fallback)
export function safeGet(obj, path, fallback = undefined) {
  if (!obj) return fallback;
  const keys = path.split('.');
  let cur = obj;
  for (const k of keys) {
    if (cur == null) return fallback;
    cur = cur[k];
  }
  return cur === undefined ? fallback : cur;
}
