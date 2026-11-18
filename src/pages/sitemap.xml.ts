/**
 * Generates /sitemap.xml from the pages in src/pages, so new pages
 * (e.g. /large-videos, /guides/...) are included automatically.
 */
import type { APIRoute } from 'astro';

const pages = import.meta.glob('./**/*.{astro,md,mdx}');

// Pages that must never be indexed.
const EXCLUDE = new Set(['/404']);

export const GET: APIRoute = ({ site }) => {
	const urls = Object.keys(pages)
		.filter((file) => !file.includes('['))
		.map((file) =>
			file
				.replace(/^\.\//, '/')
				.replace(/\.(astro|mdx?)$/, '')
				.replace(/\/index$/, '')
				.replace(/^$/, '/'),
		)
		.map((path) => (path === '' ? '/' : path))
		.filter((path) => !EXCLUDE.has(path))
		.sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join('\n')}
</urlset>
`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
