import { calculateDiscount } from './calculateDiscount';

describe('calculateDiscount', () => {
  it('should return null when oldPrice is null', () => {
    expect(calculateDiscount(100, null)).toBeNull();
  });

  it('should return null when oldPrice is undefined', () => {
    expect(calculateDiscount(100, undefined)).toBeNull();
  });

  it('should return null when oldPrice is less than or equal to price', () => {
    expect(calculateDiscount(100, 100)).toBeNull();
    expect(calculateDiscount(100, 90)).toBeNull();
  });

  it('should calculate discount correctly', () => {
    expect(calculateDiscount(80, 100)).toBe(20);
    expect(calculateDiscount(150, 200)).toBe(25);
    expect(calculateDiscount(90, 100)).toBe(10);
  });

  it('should round discount to nearest integer', () => {
    expect(calculateDiscount(85, 100)).toBe(15); // (100-85)/100 * 100 = 15
    expect(calculateDiscount(33, 100)).toBe(67); // (100-33)/100 * 100 = 67
  });

  it('should handle edge cases', () => {
    expect(calculateDiscount(0, 100)).toBe(100);
    expect(calculateDiscount(100, 100)).toBeNull();
  });
});
