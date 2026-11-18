/**
 * Site-wide settings. Update links before launch.
 */
export const SITE = {
	appStoreUrl: '#', // TODO: App Store URL
	privacyUrl: '/privacy',
	termsUrl: '/terms',
	supportUrl: 'mailto:support@glano.co',
	supportEmail: 'support@glano.co',
	/**
	 * Google Search Console "HTML tag" verification code (the content="..."
	 * value only). Leave empty if you verify with a DNS TXT record instead.
	 */
	googleSiteVerification: '',
};

/**
 * Some product visuals (video controls, item action bar, Recently Deleted
 * folder view, reminder notification) are proposed designs that are not yet
 * in the Figma app file. While true, they carry a small "Preview design" tag.
 * Set to false before launch once the designs are confirmed.
 */
export const SHOW_PREVIEW_TAGS = true;
