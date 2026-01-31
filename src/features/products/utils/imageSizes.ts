/**
 * Presets de tamanhos de imagem para diferentes contextos
 */
export const IMAGE_SIZE_PRESETS = {
  thumbnail: { width: 150, height: 200 },
  card: { width: 300, height: 400 },
  cardLarge: { width: 400, height: 533 },
  detail: { width: 600, height: 800 },
  hero: { width: 1200, height: 1600 },
} as const;

/**
 * Tamanhos responsivos baseados em breakpoints do Tailwind
 * sm: 640px, md: 768px, lg: 1024px, xl: 1280px
 */
export const RESPONSIVE_IMAGE_SIZES = {
  mobile: { width: 200, height: 267 }, // sm
  tablet: { width: 300, height: 400 }, // md
  desktop: { width: 400, height: 533 }, // lg
  wide: { width: 500, height: 667 }, // xl
} as const;

export type ImageSizePreset = keyof typeof IMAGE_SIZE_PRESETS;
