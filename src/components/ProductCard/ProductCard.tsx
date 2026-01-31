import Image from 'next/image';

import type { Product } from '@/features/products/services/normalizeProducts';
import {
  IMAGE_SIZE_PRESETS,
  RESPONSIVE_IMAGE_SIZES,
  type ImageSizePreset,
} from '@/features/products/utils/imageSizes';
import {
  generateResponsiveImageUrls,
  resizeImageUrl,
} from '@/features/products/utils/resizeImageUrl';

import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
  /**
   * Preset de tamanho da imagem ou tamanhos customizados
   * @default 'card'
   */
  imageSize?: ImageSizePreset | { width: number; height: number };
  /**
   * Se true, usa tamanhos responsivos baseados em breakpoints
   * @default false
   */
  responsive?: boolean;
}

const ProductCard = ({ product, imageSize = 'card', responsive = false }: ProductCardProps) => {
  let finalWidth: number;
  let finalHeight: number;

  if (responsive) {
    finalWidth = RESPONSIVE_IMAGE_SIZES.desktop.width;
    finalHeight = RESPONSIVE_IMAGE_SIZES.desktop.height;
  } else if (typeof imageSize === 'string') {
    const preset = IMAGE_SIZE_PRESETS[imageSize];
    finalWidth = preset.width;
    finalHeight = preset.height;
  } else {
    finalWidth = imageSize.width;
    finalHeight = imageSize.height;
  }

  const imageUrls = responsive
    ? generateResponsiveImageUrls(product.image, [
        RESPONSIVE_IMAGE_SIZES.mobile,
        RESPONSIVE_IMAGE_SIZES.tablet,
        RESPONSIVE_IMAGE_SIZES.desktop,
        RESPONSIVE_IMAGE_SIZES.wide,
      ])
    : [resizeImageUrl(product.image, finalWidth, finalHeight)];
  const imageUrl = responsive ? imageUrls[2] : imageUrls[0];

  return (
    <div className="bg-secondary border-border flex flex-col p-6">
      <div className="flex justify-center relative border-border border-1 border-black">
        <Image
          src={imageUrl}
          alt={product.name}
          width={finalWidth}
          height={finalHeight}
          sizes={
            responsive
              ? '(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px'
              : undefined
          }
        />
        {product.discount && (
          <p className="text-sm font-normal text-green-500 absolute top-2 left-2 bg-white p-1 rounded-md">
            -{product.discount}% OFF
          </p>
        )}
      </div>
      <p className="text-2xl font-semibold mt-4 text-black text-left">
        ${product.price.toFixed(2)}
      </p>
      <h5 className="text-black mt-4 text-left text-xlg font-semibold uppercase">{product.name}</h5>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductCard;
