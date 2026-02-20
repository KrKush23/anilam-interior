<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import { Scale, FileCheck, Briefcase, CreditCard, AlertCircle, Mail, Phone } from 'lucide-svelte';
	import { EMAIL_HREF, EMAIL_DISPLAY, PHONE_HREF, PHONE_DISPLAY } from '$lib/config/site';

	let isVisible = $state(false);

	function handleEnter() {
		isVisible = true;
	}

	const sections = [
		{
			id: 'acceptance',
			icon: FileCheck,
			title: 'Acceptance of Terms',
			content: `By accessing and using the Anilam website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.

We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any changes indicates your acceptance of the modified terms.`
		},
		{
			id: 'services',
			icon: Briefcase,
			title: 'Our Services',
			content: `Anilam provides interior design services including but not limited to:

• Residential interior design and space planning
• Commercial interior design and office planning
• 3D visualization and rendering services
• Design consultation and advisory services
• Project management and coordination
• Furniture and material selection assistance

All services are subject to availability and require a signed agreement. Service details, timelines, and deliverables will be specified in individual project contracts.`
		},
		{
			id: 'booking',
			icon: CreditCard,
			title: 'Bookings and Payments',
			content: `When you book our services, you agree to the following terms:

• **Consultation Fees**: Initial consultation fees are due at the time of booking and are non-refundable.
• **Project Deposits**: A deposit (typically 50% of the project fee) is required to commence work, unless otherwise agreed in writing.
• **Payment Schedule**: Remaining payments are due according to the schedule outlined in your project contract.
• **Late Payments**: Late payments may incur interest charges and may result in project delays.
• **Cancellation**: Project cancellation policies are detailed in individual service agreements.

We accept payments via bank transfer, credit/debit cards, and other methods as specified in your contract.`
		},
		{
			id: 'intellectual',
			icon: Scale,
			title: 'Intellectual Property',
			content: `All content on this website, including but not limited to designs, images, text, graphics, logos, and software, is the property of Anilam or its licensors and is protected by copyright and other intellectual property laws.

• You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
• Design concepts and plans developed by Anilam remain our intellectual property until full payment is received.
• Upon full payment, you receive a license to use the final designs for the specified project only.
• We reserve the right to use completed project photographs for portfolio and marketing purposes unless otherwise agreed.`
		},
		{
			id: 'liability',
			icon: AlertCircle,
			title: 'Limitation of Liability',
			content: `To the maximum extent permitted by law:

• Anilam shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website.
• Our total liability for any claims arising under these terms shall not exceed the amount paid by you for the specific service giving rise to the claim.
• We do not guarantee that our website will be available at all times or that it will be free from errors.
• You agree to indemnify and hold harmless Anilam and its employees from any claims arising from your use of our services.

These limitations apply regardless of whether the damages arise from breach of contract, tort, negligence, or any other legal theory.`
		},
		{
			id: 'conduct',
			icon: Scale,
			title: 'User Conduct',
			content: `When using our website and services, you agree not to:

• Use the website for any unlawful purpose or in violation of any applicable laws
• Attempt to gain unauthorized access to any portion of the website or our systems
• Interfere with or disrupt the website or servers hosting it
• Submit false or misleading information when contacting us or booking services
• Harass, abuse, or harm our staff or other users
• Use any automated means to access or scrape the website
• Reproduce, duplicate, copy, sell, or exploit any portion of the website without permission

We reserve the right to terminate access to our website and services for violations of these terms.`
		},
		{
			id: 'warranty',
			icon: FileCheck,
			title: 'Warranty and Disclaimers',
			content: `Anilam provides design services with reasonable skill and care. However:

• We make no warranties that our designs will meet your specific expectations if requirements were not clearly communicated.
• We are not responsible for delays caused by third-party contractors, suppliers, or factors outside our control.
• All warranties are subject to the terms outlined in your individual project contract.
• We recommend that clients obtain appropriate insurance for their projects.

The website and its content are provided "as is" without warranties of any kind, either express or implied.`
		},
		{
			id: 'governing',
			icon: Scale,
			title: 'Governing Law and Disputes',
			content: `These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in New Delhi.

Before initiating any legal proceedings, we encourage you to contact us to attempt to resolve any disputes amicably. We are committed to addressing your concerns and finding fair solutions.`
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

						<h1 class="mb-6 text-5xl font-bold lg:text-6xl">Terms of Service</h1>

						<p class="max-w-2xl text-xl text-slate-300">
							Please read these terms carefully before using our website and services.
							By using Anilam, you agree to these terms.
						</p>

						<p class="mt-4 text-sm text-slate-400">Last updated: {lastUpdated}</p>
					</div>
				{/if}
			</div>
		</section>

		<!-- Terms Content -->
		<section class="bg-white py-16 lg:py-24">
			<div class="mx-auto max-w-4xl px-6">
				<div class="mb-12 rounded-xl bg-slate-50 p-6 lg:p-8">
					<p class="text-sm text-slate-600">
						<strong class="text-slate-900">Important Notice:</strong> These Terms of Service
						constitute a legally binding agreement between you and Anilam Interior Design Studio.
						By accessing our website or using our services, you acknowledge that you have read,
						understood, and agree to be bound by these terms.
					</p>
				</div>

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
				<h2 class="mb-4 text-2xl font-bold text-slate-900">Questions About Our Terms?</h2>
				<p class="mb-8 text-slate-600">
					If you have any questions about these Terms of Service, please don't hesitate to
					contact us.
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
