// Centralized site configuration for Anilam Interior Design
// Update these values to change contact info across the entire site

export const siteConfig = {
	// Brand
	name: 'Anilam',
	tagline: 'Transforming spaces into extraordinary experiences',

	// Contact Information
	contact: {
		phone: {
			display: '+91 99346 60870',
			href: 'tel:+919934660870'
		},
		email: {
			display: 'anilamofficial@gmail.com',
			href: 'mailto:anilamofficial@gmail.com'
		},
		address: {
			// street: '42, Landmark Plaza',
			// area: 'Andheri West',
			// city: 'Mumbai',
			state: 'New Delhi',
			// pincode: '400053',
			country: 'India',
			full: 'New Delhi, India'
		},
		hours: {
			weekdays: 'Mon - Sat: 10AM - 7PM',
			sunday: 'Sunday: Closed'
		}
	},

	// Social Media Links
	social: {
		instagram: {
			url: 'https://www.instagram.com/anilam_interior?igsh=MWh5bWYydW5tYmN5aQ==',
			handle: '@anilam.interiors'
		},
		facebook: {
			url: 'https://www.facebook.com/share/1CK7PRDqwW/',
			handle: 'Anilam Interiors'
		},
		linkedin: {
			url: 'https://www.linkedin.com/company/anilam/',
			handle: 'Anilam Interiors'
		}
	},

	// Business Info
	business: {
		founded: 2025,
		employees: '1-5',
		projectsCompleted: '5+',
		yearsExperience: 0
	},

	// SEO Defaults
	seo: {
		title: 'Anilam | Premium Interior Design Studio',
		description:
			'Transform your space with Anilam. New Delhi\'s premier interior design studio specializing in residential and commercial spaces. Book a free consultation today.',
		keywords: [
			'interior design',
			'New Delhi interior designer',
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
