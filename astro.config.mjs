// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.biasaglik.com.tr',
  // Eski Wix adresleri /elektro-terapi biçiminde; aynı kalsın diye sayfalar .html olarak üretilir
  build: { format: 'file', inlineStylesheets: 'always' },
  trailingSlash: 'never',
  compressHTML: true,
  prefetch: false,
});
