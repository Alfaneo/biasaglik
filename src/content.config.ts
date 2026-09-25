import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baslikMetin = z.object({ baslik: z.string(), metin: z.string() });

const hizmetler = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/hizmetler' }),
  schema: ({ image }) =>
    z.object({
      // Sayfanın tek H1'i
      baslik: z.string(),
      altBaslik: z.string().nullable().optional(),
      kategori: z.enum(['Genel', 'Nörolojik', 'Ortopedik', 'Pediatrik', 'Kardiyopulmoner', 'Tedavi Yöntemleri']),
      sira: z.number().default(100),
      // Wix'teki eski adres; farklıysa 301 yönlendirme üretilir
      eskiUrl: z.string().optional(),

      seoBaslik: z.string().max(65),
      aciklama: z.string().min(70).max(160),
      kisaAciklama: z.string().min(20).max(140),

      hero: image(),
      heroAlt: z.string(),
      gorsel: image().optional(),
      gorselAlt: z.string().optional(),

      ozet: z.string(),
      bilgiKutusu: z.array(z.object({ etiket: z.string(), deger: z.string() })).optional(),

      endikasyonBaslik: z.string().default('Hangi durumlarda uygulanır?'),
      endikasyonGiris: z.string().optional(),
      endikasyonlar: z.array(baslikMetin).optional(),

      surecBaslik: z.string().default('Tedavi süreci adım adım'),
      surecGiris: z.string().optional(),
      adimlar: z.array(baslikMetin).optional(),

      avantajBaslik: z.string().default('Avantajları'),
      avantajlar: z.array(baslikMetin).optional(),

      onemli: baslikMetin.optional(),

      sss: z.array(z.object({ soru: z.string(), cevap: z.string() })).optional(),

      kontrolEden: reference('uzmanlar').optional(),
      guncelleme: z.coerce.date(),
    }),
});

const uzmanlar = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/uzmanlar' }),
  schema: ({ image }) =>
    z.object({
      ad: z.string(),
      unvan: z.string(),
      foto: image(),
      sira: z.number(),
    }),
});

export const collections = { hizmetler, uzmanlar };
