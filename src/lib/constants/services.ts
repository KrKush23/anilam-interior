import type { Component } from 'svelte';
import {
	Home,
	Building2,
	ClipboardList,
	Palette,
	Ruler,
	Lightbulb,
	Sofa
} from 'lucide-svelte';

import residentialImage from '$lib/assets/images/spacejoy-9M66C_w_ToM-unsplash.jpg';
import commercialImage from '$lib/assets/images/Interior Design For Office _ Space Tattva Design Studio.jpg';
import planningImage from '$lib/assets/images/3D design.jpg';

export interface MainService {
	icon: Component;
	title: string;
	description: string;
	features: string[];
	image: string;
	imageAlt: string;
}

export interface AdditionalService {
	icon: Component;
	title: string;
	description: string;
}

export interface ProcessStep {
	step: string;
	title: string;
	description: string;
}

export const mainServices: MainService[] = [
	{
		icon: Home,
		title: 'Residential Design',
		description:
			'Transform your house into a dream home with our comprehensive residential design services.',
		features: ['Interior Design', 'Space Planning', 'Custom Furniture', 'Color Consultation'],
		image: residentialImage,
		imageAlt: 'Modern residential interior with stylish furniture and decor'
	},
	{
		icon: Building2,
		title: 'Commercial Design',
		description:
			'Create inspiring workspaces that boost productivity and reflect your brand identity.',
		features: ['Office Design', 'Retail Spaces', 'Hospitality', 'Co-working Spaces'],
		image: commercialImage,
		imageAlt: 'Professional office space with modern design'
	},
	{
		icon: ClipboardList,
		title: 'Consultation & Planning',
		description:
			'Expert guidance through every phase of your project from concept to completion.',
		features: [
			'Project Planning',
			'3D Visualization',
			'Budget Management',
			'Timeline Coordination'
		],
		image: planningImage,
		imageAlt: '3D design visualization and planning'
	}
];

export const additionalServices: AdditionalService[] = [
	{
		icon: Palette,
		title: 'Color Consultation',
		description: 'Expert color schemes for your space'
	},
	{ icon: Ruler, title: 'Space Planning', description: 'Optimize layout and functionality' },
	{ icon: Lightbulb, title: 'Lighting Design', description: 'Create the perfect ambiance' },
	{ icon: Sofa, title: 'Furniture Selection', description: 'Curated pieces for your style' }
];

export const process: ProcessStep[] = [
	{
		step: '01',
		title: 'Discovery',
		description: 'We learn about your vision, needs, and lifestyle'
	},
	{ step: '02', title: 'Concept', description: 'We create initial designs and mood boards' },
	{
		step: '03',
		title: 'Design',
		description: 'Detailed plans, 3D renders, and material selection'
	},
	{
		step: '04',
		title: 'Execution',
		description: 'Professional implementation and project management'
	}
];
