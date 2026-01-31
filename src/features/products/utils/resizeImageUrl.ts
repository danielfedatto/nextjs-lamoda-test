/**
 * Ajusta os parâmetros de tamanho na URL da imagem VTEX
 *
 * @param imageUrl - URL original da imagem (ex: "https://lojalancaperfume.vtexassets.com/arquivos/ids/504997-150-200/")
 * @param width - Nova largura desejada
 * @param height - Nova altura desejada
 * @returns URL modificada com os novos tamanhos
 *
 * @example
 * resizeImageUrl("https://lojalancaperfume.vtexassets.com/arquivos/ids/504997-150-200/", 300, 400)
 * // Returns: "https://lojalancaperfume.vtexassets.com/arquivos/ids/504997-300-400/"
 */
export function resizeImageUrl(imageUrl: string, width: number, height: number): string {
  // Padrão regex para encontrar o formato: -número-número/ no final da URL
  const sizePattern = /-\d+-\d+\//;

  // Substitui o padrão encontrado pelos novos valores
  const resizedUrl = imageUrl.replace(sizePattern, `-${width}-${height}/`);

  return resizedUrl;
}

/**
 * Gera múltiplas URLs de imagem para uso responsivo
 *
 * @param imageUrl - URL original da imagem
 * @param sizes - Array de objetos com width e height
 * @returns Array de URLs redimensionadas
 *
 * @example
 * generateResponsiveImageUrls(imageUrl, [
 *   { width: 200, height: 267 },
 *   { width: 300, height: 400 },
 *   { width: 400, height: 533 }
 * ])
 */
export function generateResponsiveImageUrls(
  imageUrl: string,
  sizes: Array<{ width: number; height: number }>,
): string[] {
  return sizes.map((size) => resizeImageUrl(imageUrl, size.width, size.height));
}
