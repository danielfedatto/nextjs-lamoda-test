import { IMAGE_SIZE_PRESETS, RESPONSIVE_IMAGE_SIZES, type ImageSizePreset } from './imageSizes';

describe('imageSizes', () => {
  describe('IMAGE_SIZE_PRESETS', () => {
    it('should have correct thumbnail preset', () => {
      expect(IMAGE_SIZE_PRESETS.thumbnail).toEqual({ width: 150, height: 200 });
    });

    it('should have correct card preset', () => {
      expect(IMAGE_SIZE_PRESETS.card).toEqual({ width: 300, height: 400 });
    });

    it('should have correct cardLarge preset', () => {
      expect(IMAGE_SIZE_PRESETS.cardLarge).toEqual({ width: 400, height: 533 });
    });

    it('should have correct detail preset', () => {
      expect(IMAGE_SIZE_PRESETS.detail).toEqual({ width: 600, height: 800 });
    });

    it('should have correct hero preset', () => {
      expect(IMAGE_SIZE_PRESETS.hero).toEqual({ width: 1200, height: 1600 });
    });
  });

  describe('RESPONSIVE_IMAGE_SIZES', () => {
    it('should have correct mobile size', () => {
      expect(RESPONSIVE_IMAGE_SIZES.mobile).toEqual({ width: 200, height: 267 });
    });

    it('should have correct tablet size', () => {
      expect(RESPONSIVE_IMAGE_SIZES.tablet).toEqual({ width: 300, height: 400 });
    });

    it('should have correct desktop size', () => {
      expect(RESPONSIVE_IMAGE_SIZES.desktop).toEqual({ width: 400, height: 533 });
    });

    it('should have correct wide size', () => {
      expect(RESPONSIVE_IMAGE_SIZES.wide).toEqual({ width: 500, height: 667 });
    });
  });

  describe('ImageSizePreset type', () => {
    it('should allow valid preset keys', () => {
      const validPresets: ImageSizePreset[] = ['thumbnail', 'card', 'cardLarge', 'detail', 'hero'];

      validPresets.forEach((preset) => {
        expect(IMAGE_SIZE_PRESETS[preset]).toBeDefined();
      });
    });
  });
});
