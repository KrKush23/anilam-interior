// Centralized site configuration for Anilam Interior Design
// Update these values to change contact info across the entire site

export const siteConfig = {
	// Brand
	name: 'Anilam',
	tagline: 'Transforming spaces into extraordinary experiences',

	// Contact Information
	contact: {
		phone: {
			display: '+91 98765 43210',
			href: 'tel:+919876543210'
		},
		email: {
			display: 'info@anilam.in',
			href: 'mailto:info@anilam.in'
		},
		address: {
			street: '42, Landmark Plaza',
			area: 'Andheri West',
			city: 'Mumbai',
			state: 'Maharashtra',
			pincode: '400053',
			country: 'India',
			full: '42, Landmark Plaza, Andheri West, Mumbai, Maharashtra 400053, India'
		},
		hours: {
			weekdays: 'Mon - Sat: 10AM - 7PM',
			sunday: 'Sunday: Closed'
		}
	},

	// Social Media Links
	social: {
		instagram: {
			url: 'https://instagram.com/anilam.interiors',
			handle: '@anilam.interiors'
		},
		facebook: {
			url: 'https://facebook.com/anilaminteriors',
			handle: 'Anilam Interiors'
		},
		linkedin: {
			url: 'https://linkedin.com/company/anilam-interiors',
			handle: 'Anilam Interiors'
		},
		twitter: {
			url: 'https://twitter.com/anilaminteriors',
			handle: '@anilaminteriors'
		}
	},

	// Business Info
	business: {
		founded: 2015,
		employees: '15+',
		projectsCompleted: '500+',
		yearsExperience: 9
	},

	// SEO Defaults
	seo: {
		title: 'Anilam | Premium Interior Design Studio in Mumbai',
		description:
			'Transform your space with Anilam. Mumbai\'s premier interior design studio specializing in residential and commercial spaces. Book a free consultation today.',
		keywords: [
			'interior design',
			'Mumbai interior designer',
			'home renovation',
			'office design',
			'residential design',
			'commercial interiors'
		]
	}
} as const;

// Type-safe exports for common values
export const PHONE_DISPLAY = siteConfig.contact.phone.display;
export const PHONE_HREF = siteConfig.contact.phone.href;
export const EMAIL_DISPLAY = siteConfig.contact.email.display;
export const EMAIL_HREF = siteConfig.contact.email.href;
export const ADDRESS_FULL = siteConfig.contact.address.full;
export const HOURS_WEEKDAYS = siteConfig.contact.hours.weekdays;
export const INSTAGRAM_URL = siteConfig.social.instagram.url;
export const FACEBOOK_URL = siteConfig.social.facebook.url;
export const LINKEDIN_URL = siteConfig.social.linkedin.url;
export const TWITTER_URL = siteConfig.social.twitter.url;
