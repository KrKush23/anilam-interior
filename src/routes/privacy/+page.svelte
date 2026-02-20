<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-svelte';
	import { EMAIL_HREF, EMAIL_DISPLAY, PHONE_HREF, PHONE_DISPLAY } from '$lib/config/site';

	let isVisible = $state(false);

	function handleEnter() {
		isVisible = true;
	}

	const sections = [
		{
			id: 'collection',
			icon: Eye,
			title: 'Information We Collect',
			content: `We collect information that you provide directly to us, including:

• **Personal Information**: Name, email address, phone number, and billing address when you contact us or request our services.
• **Project Information**: Details about your space, design preferences, budget, and timeline.
• **Communications**: Any messages, feedback, or inquiries you send us.
• **Technical Data**: IP address, browser type, device information, and cookies when you visit our website.`
		},
		{
			id: 'usage',
			icon: FileText,
			title: 'How We Use Your Information',
			content: `We use the collected information for the following purposes:

• To provide and maintain our interior design services
• To communicate with you about your projects and inquiries
• To process payments and send invoices
• To improve our website and services
• To send promotional materials and updates (with your consent)
• To comply with legal obligations and protect our rights`
		},
		{
			id: 'protection',
			icon: Shield,
			title: 'Data Protection',
			content: `We implement appropriate technical and organizational measures to protect your personal data:

• Secure SSL encryption for all data transmission
• Regular security assessments and updates
• Restricted access to personal information (authorized personnel only)
• Secure data storage with industry-standard protection
• Regular staff training on data privacy and security`
		},
		{
			id: 'sharing',
			icon: Lock,
			title: 'Information Sharing',
			content: `We respect your privacy and do not sell your personal information. We may share your data only in the following circumstances:

• **Service Providers**: With trusted third parties who assist in operating our website and conducting our business (payment processors, hosting providers).
• **Legal Requirements**: When required by law, court order, or governmental authority.
• **Business Transfers**: In connection with a merger, acquisition, or sale of assets (you will be notified of any such change).
• **With Your Consent**: When you explicitly authorize us to share your information.`
		},
		{
			id: 'cookies',
			icon: FileText,
			title: 'Cookies and Tracking',
			content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience:

• **Essential Cookies**: Required for the website to function properly
• **Analytics Cookies**: Help us understand how visitors interact with our website
• **Preference Cookies**: Remember your settings and preferences

You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our website.`
		},
		{
			id: 'rights',
			icon: Eye,
			title: 'Your Rights',
			content: `You have the following rights regarding your personal information:

• **Access**: Request a copy of the personal data we hold about you
• **Correction**: Request correction of inaccurate or incomplete data
• **Deletion**: Request deletion of your personal information (subject to legal obligations)
• **Restriction**: Request limitation of processing in certain circumstances
• **Objection**: Object to processing based on legitimate interests
• **Portability**: Request transfer of your data to another service

To exercise these rights, please contact us using the information provided below.`
		}
	];

	const lastUpdated = 'January 2026';
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-1 pt-20">
		<!-- Hero Section -->
		<section class="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32">
			<div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>

			<div class="relative mx-auto max-w-7xl px-6">
				{#if isVisible}
					<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<span
							class="mb-6 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent"
						>
							Legal
						</span>

						<h1 class="mb-6 text-5xl font-bold lg:text-6xl">Privacy Policy</h1>

						<p class="max-w-2xl text-xl text-slate-300">
							Your privacy is important to us. This policy explains how we collect, use,
							and protect your personal information.
						</p>

						<p class="mt-4 text-sm text-slate-400">Last updated: {lastUpdated}</p>
					</div>
				{/if}
			</div>
		</section>

		<!-- Policy Content -->
		<section class="bg-white py-16 lg:py-24">
			<div class="mx-auto max-w-4xl px-6">
				<div class="space-y-12">
					{#each sections as section}
						<div class="border-b border-slate-100 pb-12 last:border-0">
							<div class="mb-4 flex items-center gap-3">
								<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
									<section.icon class="h-5 w-5 text-accent" />
								</div>
								<h2 class="text-2xl font-bold text-slate-900" id={section.id}>
									{section.title}
								</h2>
							</div>
							<div class="prose prose-slate max-w-none whitespace-pre-line text-slate-600">
								{section.content}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section class="bg-slate-50 py-16">
			<div class="mx-auto max-w-4xl px-6 text-center">
				<h2 class="mb-4 text-2xl font-bold text-slate-900">Questions or Concerns?</h2>
				<p class="mb-8 text-slate-600">
					If you have any questions about this Privacy Policy or how we handle your data,
					please contact us.
				</p>

				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href={EMAIL_HREF}
						class="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-accent/90"
					>
						<Mail class="h-5 w-5" />
						{EMAIL_DISPLAY}
					</a>

					<a
						href={PHONE_HREF}
						class="flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:border-accent hover:text-accent"
					>
						<Phone class="h-5 w-5" />
						{PHONE_DISPLAY}
					</a>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
