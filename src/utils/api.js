export const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export const apiUrl = (endpoint) => {
  const cleanPath = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE}${cleanPath}`;
};
