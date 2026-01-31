import { resizeImageUrl, generateResponsiveImageUrls } from './resizeImageUrl';

describe('resizeImageUrl', () => {
  it('should resize image URL correctly', () => {
    const originalUrl = 'https://lojalancaperfume.vtexassets.com/arquivos/ids/504997-150-200/';
    const result = resizeImageUrl(originalUrl, 300, 400);

    expect(result).toBe('https://lojalancaperfume.vtexassets.com/arquivos/ids/504997-300-400/');
  });

  it('should handle different original sizes', () => {
    const originalUrl = 'https://example.com/image-500-600/';
    const result = resizeImageUrl(originalUrl, 250, 300);

    expect(result).toBe('https://example.com/image-250-300/');
  });

  it('should handle URLs without trailing slash correctly', () => {
    const originalUrl = 'https://example.com/image-100-150';
    const result = resizeImageUrl(originalUrl, 200, 250);

    // Since the pattern requires / at the end, it should not match
    expect(result).toBe('https://example.com/image-100-150');
  });

  it('should handle large numbers', () => {
    const originalUrl = 'https://example.com/image-100-150/';
    const result = resizeImageUrl(originalUrl, 1200, 1600);

    expect(result).toBe('https://example.com/image-1200-1600/');
  });
});

describe('generateResponsiveImageUrls', () => {
  it('should generate multiple resized URLs', () => {
    const originalUrl = 'https://example.com/image-100-150/';
    const sizes = [
      { width: 200, height: 267 },
      { width: 300, height: 400 },
      { width: 400, height: 533 },
    ];

    const result = generateResponsiveImageUrls(originalUrl, sizes);

    expect(result).toEqual([
      'https://example.com/image-200-267/',
      'https://example.com/image-300-400/',
      'https://example.com/image-400-533/',
    ]);
  });

  it('should return empty array for empty sizes', () => {
    const originalUrl = 'https://example.com/image-100-150/';
    const result = generateResponsiveImageUrls(originalUrl, []);

    expect(result).toEqual([]);
  });

  it('should handle single size', () => {
    const originalUrl = 'https://example.com/image-100-150/';
    const sizes = [{ width: 500, height: 600 }];

    const result = generateResponsiveImageUrls(originalUrl, sizes);

    expect(result).toEqual(['https://example.com/image-500-600/']);
  });
});
