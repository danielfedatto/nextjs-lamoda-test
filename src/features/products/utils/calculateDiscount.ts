export default function calculateDiscount(price: number, oldPrice?: number | null): number | null {
  if (!oldPrice || oldPrice <= price) return null;

  const discount = ((oldPrice - price) / oldPrice) * 100;
  return Math.round(discount);
}
