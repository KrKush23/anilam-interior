<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { inView } from '$lib/actions/useInView';
	import { fly } from 'svelte/transition';
	import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-svelte';
	import {
		PHONE_DISPLAY,
		PHONE_HREF,
		EMAIL_DISPLAY,
		EMAIL_HREF,
		ADDRESS_FULL,
		HOURS_WEEKDAYS
	} from '$lib/config/site';

	let isVisible = $state(false);
	let formSubmitted = $state(false);
	let isSubmitting = $state(false);
	let formError = $state('');

	let formData = $state({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		projectType: '',
		message: ''
	});

	function handleEnter() {
		isVisible = true;
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		formError = '';

		try {
			// Option 1: Use Formspree (Free - 50 submissions/month)
			// Sign up at https://formspree.io, create a form, and replace 'YOUR_FORM_ID'
			// const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {

			// Option 2: Use Discord Webhook (Free - Unlimited)
			// Create a webhook in your Discord server and replace the URL below
			const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL || '';

			if (webhookUrl) {
				const discordMessage = {
					embeds: [{
						title: '📨 New Contact Form Submission',
						color: 0xFF6B6B,
						fields: [
							{ name: 'Name', value: `${formData.firstName} ${formData.lastName}`, inline: true },
							{ name: 'Email', value: formData.email, inline: true },
							{ name: 'Phone', value: formData.phone || 'Not provided', inline: true },
							{ name: 'Project Type', value: formData.projectType, inline: true },
							{ name: 'Message', value: formData.message }
						],
						timestamp: new Date().toISOString()
					}]
				};

				const response = await fetch(webhookUrl, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(discordMessage)
				});

				if (response.ok) {
					formSubmitted = true;
					formData = { firstName: '', lastName: '', email: '', phone: '', projectType: '', message: '' };
					setTimeout(() => (formSubmitted = false), 5000);
				} else {
					formError = 'Failed to send message. Please try again.';
				}
			} else {
				// Fallback: Log to console (for development)
				console.log('Form submission:', formData);
				formSubmitted = true;
				formData = { firstName: '', lastName: '', email: '', phone: '', projectType: '', message: '' };
				setTimeout(() => (formSubmitted = false), 5000);
			}
		} catch (error) {
			console.error('Form error:', error);
			formError = 'Network error. Please check your connection and try again.';
		} finally {
			isSubmitting = false;
		}
	}

	const contactInfo = [
		{ icon: Phone, title: 'Phone', value: PHONE_DISPLAY, href: PHONE_HREF },
		{ icon: Mail, title: 'Email', value: EMAIL_DISPLAY, href: EMAIL_HREF },
		{ icon: MapPin, title: 'Address', value: ADDRESS_FULL, href: '#' },
		{ icon: Clock, title: 'Hours', value: HOURS_WEEKDAYS, href: '#' }
	];
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-1 pt-20">
		<!-- Hero -->
		<section class="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32">
			<!-- IMAGE PLACEHOLDER: Office interior - 1920x600px -->
			<!-- <div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
			<div class="absolute inset-0 flex items-center justify-center opacity-20">
				<span class="text-2xl text-white/50">[Image: Office Interior - 1920x600px]</span>
			</div> -->

			<div class="relative mx-auto max-w-7xl px-6 text-center" use:inView onenterView={handleEnter}>
				{#if isVisible}
					<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<span
							class="mb-6 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent"
						>
							Get In Touch
						</span>

						<h1 class="mb-6 text-5xl font-bold lg:text-6xl">Let's Create Something Beautiful</h1>

						<p class="mx-auto max-w-3xl text-xl text-slate-300">
							Ready to transform your space? We'd love to hear from you. Reach out for a free
							consultation.
						</p>
					</div>
				{/if}
			</div>
		</section>

		<!-- Contact Section -->
		<section class="bg-white py-24 lg:py-32">
			<div class="mx-auto max-w-7xl px-6">
				<div class="grid gap-16 lg:grid-cols-2">
					<!-- Contact Info -->
					<div>
						<span
							class="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
						>
							Contact Us
						</span>
						<h2 class="mb-6 text-4xl font-bold text-slate-900">Get in Touch</h2>
						<p class="mb-10 text-lg text-slate-600">
							Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
						</p>

						<div class="space-y-6">
							{#each contactInfo as info}
								<a href={info.href} class="group flex items-start gap-4">
									<div
										class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20"
									>
										<info.icon class="h-6 w-6 text-accent" />
									</div>
									<div>
										<h3 class="font-semibold text-slate-900">{info.title}</h3>
										<p class="text-slate-600">{info.value}</p>
									</div>
								</a>
							{/each}
						</div>

						<!-- Map section (placeholder) -->
						<!-- <div
							class="mt-10 flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-6 text-center"
						>
							<MapPin class="h-10 w-10 text-accent/60" />
							<p class="font-medium text-slate-600">Interactive Map Coming Soon</p>
							<p class="text-sm text-slate-500">Visit us at our New Delhi studio</p>
						</div> -->
					</div>

					<!-- Contact Form -->
					<div class="rounded-2xl bg-slate-50 p-8 lg:p-10">
						{#if formSubmitted}
							<div
								class="flex h-full flex-col items-center justify-center text-center"
								in:fly={{ y: 20, duration: 400 }}
							>
								<div
									class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
								>
									<CheckCircle class="h-8 w-8 text-green-600" />
								</div>
								<h3 class="mb-2 text-2xl font-bold text-slate-900">Message Sent!</h3>
								<p class="text-slate-600">We'll get back to you within 24 hours.</p>
							</div>
						{:else}
							<form class="space-y-6" onsubmit={handleSubmit}>
								{#if formError}
									<div class="rounded-xl bg-red-50 p-4 text-red-700">
										{formError}
									</div>
								{/if}
								<div class="grid gap-6 md:grid-cols-2">
									<div>
										<label class="mb-2 block text-sm font-medium text-slate-700" for="firstName">
											First Name
										</label>
										<input
											id="firstName"
											name="firstName"
											type="text"
											bind:value={formData.firstName}
											required
											class="w-full rounded-xl border border-slate-200 px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
											placeholder="John"
										/>
									</div>
									<div>
										<label class="mb-2 block text-sm font-medium text-slate-700" for="lastName">
											Last Name
										</label>
										<input
											id="lastName"
											name="lastName"
											type="text"
											bind:value={formData.lastName}
											required
											class="w-full rounded-xl border border-slate-200 px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
											placeholder="Doe"
										/>
									</div>
								</div>

								<div>
									<label class="mb-2 block text-sm font-medium text-slate-700" for="email">Email</label>
									<input
										id="email"
										name="email"
										type="email"
										bind:value={formData.email}
										required
										class="w-full rounded-xl border border-slate-200 px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
										placeholder="john@example.com"
									/>
								</div>

								<div>
									<label class="mb-2 block text-sm font-medium text-slate-700" for="phone">Phone</label>
									<input
										id="phone"
										name="phone"
										type="tel"
										bind:value={formData.phone}
										class="w-full rounded-xl border border-slate-200 px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
										placeholder="+91 12345 67890"
									/>
								</div>

								<div>
									<label class="mb-2 block text-sm font-medium text-slate-700" for="projectType">
										Project Type
									</label>
									<select
										id="projectType"
										name="projectType"
										bind:value={formData.projectType}
										required
										class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
									>
										<option value="">Select a service</option>
										<option value="Residential Design">Residential Design</option>
										<option value="Commercial Design">Commercial Design</option>
										<option value="Consultation">Consultation</option>
										<option value="Other">Other</option>
									</select>
								</div>

								<div>
									<label class="mb-2 block text-sm font-medium text-slate-700" for="message">Message</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										bind:value={formData.message}
										required
										class="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
										placeholder="Tell us about your project..."
									></textarea>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									class="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 font-semibold text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
								>
									{#if isSubmitting}
										<span class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
										Sending...
									{:else}
										<Send class="h-5 w-5" />
										Send Message
									{/if}
								</button>
							</form>
						{/if}
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
