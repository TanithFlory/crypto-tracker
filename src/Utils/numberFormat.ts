const formatNumber = (n: number) => {
  if (n >= 1e12) return `${(n / 1e12).toFixed(2)} Trillion`;
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)} Billion`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)} Million`;
  return n?.toFixed(2);
};

export default formatNumber;
