import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

export const GET: APIRoute = async () => {
  const hizmetler = await getCollection('hizmetler');
  const bugun = new Date().toISOString().slice(0, 10);
  const sayfalar = [
    { yol: '/', tarih: bugun },
    { yol: '/hizmetlerimiz', tarih: bugun },
    { yol: '/hakkimizda', tarih: bugun },
    { yol: '/ekibimiz', tarih: bugun },
    { yol: '/iletisim', tarih: bugun },
    ...hizmetler.map((h) => ({ yol: `/${h.id}`, tarih: h.data.guncelleme.toISOString().slice(0, 10) })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sayfalar.map((s) => `  <url><loc>${new URL(s.yol, site.url).href.replace(/\/$/, s.yol === '/' ? '/' : '')}</loc><lastmod>${s.tarih}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
