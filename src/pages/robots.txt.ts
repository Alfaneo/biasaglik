import type { APIRoute } from 'astro';
import { site, demo } from '../data/site';

export const GET: APIRoute = () =>
  new Response(demo ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
