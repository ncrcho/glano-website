// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Canonical production URL (apex domain; www redirects here via GitHub Pages).
	site: 'https://glano.co',
	// Emit /privacy as privacy.html so GitHub Pages serves https://glano.co/privacy
	// directly (no redirect to a trailing slash), including on refresh.
	build: { format: 'file' },
	trailingSlash: 'never',
	fonts: [
		{
			provider: fontProviders.fontshare(),
			name: 'Clash Grotesk',
			cssVariable: '--font-display',
			weights: [400, 500],
			styles: ['normal'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
