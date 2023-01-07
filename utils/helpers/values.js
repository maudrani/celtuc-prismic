export const NormalizeValue = (value = '') =>
  value ? Number(value) || value.trim().toLowerCase() : value;

export const HasCommonElements = (arr1 = [], arr2 = []) => {
  return arr1.some((item) => arr2.includes(item));
}
