export const NormalizeValue = (value = '') =>
  value ? Number(value) || value.trim().toLowerCase() : value;
