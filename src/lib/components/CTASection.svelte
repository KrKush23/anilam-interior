<script lang="ts">
	import { fly } from 'svelte/transition';
	import { inView } from '$lib/actions/useInView';
	import { ArrowRight, Phone, Mail } from 'lucide-svelte';
	import { PHONE_DISPLAY, PHONE_HREF, EMAIL_DISPLAY, EMAIL_HREF } from '$lib/config/site';

	let isVisible = $state(false);

	function handleEnter() {
		isVisible = true;
	}
</script>

<section
	class="relative overflow-hidden bg-gradient-to-br from-accent to-teal-600 py-20 lg:py-24"
	use:inView
	onenterView={handleEnter}
>
	<!-- Decorative elements -->
	<div
		class="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
	></div>
	<div
		class="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-3xl"
	></div>
	<div
		class="absolute inset-0 opacity-30"
		style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0); background-size: 30px 30px;"
	></div>

	<div class="relative mx-auto max-w-5xl px-6 text-center">
		{#if isVisible}
			<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
				<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">
					Ready to Transform Your Space?
				</h2>

				<p class="mx-auto mb-10 max-w-2xl text-xl text-white/90">
					Let's discuss your project. Schedule a free consultation with our design experts and take
					the first step toward your dream space.
				</p>

				<div class="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="/contact"
						class="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-accent shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
					>
						Get Free Consultation
						<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</a>

					<a
						href={PHONE_HREF}
						class="flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/20 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/30"
					>
						<Phone class="h-5 w-5" />
						Call Us Now
					</a>
				</div>

				<!-- Contact info -->
				<div class="flex flex-col justify-center gap-8 text-white/80 sm:flex-row">
					<a
						href={PHONE_HREF}
						class="flex items-center gap-2 transition-colors hover:text-white"
					>
						<Phone class="h-5 w-5" />
						<span>{PHONE_DISPLAY}</span>
					</a>
					<a
						href={EMAIL_HREF}
						class="flex items-center gap-2 transition-colors hover:text-white"
					>
						<Mail class="h-5 w-5" />
						<span>{EMAIL_DISPLAY}</span>
					</a>
				</div>
			</div>
		{/if}
	</div>
</section>
