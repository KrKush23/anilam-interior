<script lang="ts">
	import { fly } from 'svelte/transition';
	import { ChevronRight, ArrowRight } from 'lucide-svelte';
	import interiorShowcase from '$lib/assets/images/b6defdf7ac3a5073c9ff23ebba60429f.jpg';
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
	<!-- Animated gradient background -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
		<!-- Decorative elements -->
		<div
			class="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-accent/20 blur-3xl"
		></div>
		<div
			class="absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-blue-500/10 blur-3xl"
			style="animation-delay: 1s;"
		></div>
		<div
			class="absolute top-1/2 right-1/3 h-64 w-64 animate-pulse rounded-full bg-teal-400/10 blur-3xl"
			style="animation-delay: 2s;"
		></div>

		<!-- Grid pattern overlay -->
		<div
			class="absolute inset-0 opacity-20"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;"
		></div>
	</div>

	<!-- Content -->
	<div class="relative mx-auto max-w-7xl px-6">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Text Content -->
			<div class="text-center lg:text-left">
				<!-- Badge -->
				<div
					class="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm"
					in:fly={{ y: 30, duration: 800, opacity: 0 }}
				>
					<span class="h-2 w-2 animate-pulse rounded-full bg-accent"></span>
					<span class="text-sm font-semibold text-white">New Design Studio • Est. 2025</span>
				</div>

				<!-- Main headline -->
				<h1
					class="text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
					in:fly={{ y: 50, duration: 900, delay: 100, opacity: 0 }}
				>
					Fresh Design<br />
					<span class="bg-gradient-to-r from-accent to-teal-300 bg-clip-text text-transparent">
						New Energy
					</span>
				</h1>

				<!-- Subtitle -->
				<p
					class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed font-light text-gray-300 md:text-xl lg:mx-0"
					in:fly={{ y: 30, duration: 900, delay: 250, opacity: 0 }}
				>
					Anilam is a brand-new interior design studio with bold ideas and fresh perspectives.
					We're here to shake up the industry with innovative, modern designs for your home or business.
				</p>

				<!-- CTA Buttons -->
				<div
					class="mt-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
					in:fly={{ y: 20, duration: 800, delay: 400, opacity: 0 }}
				>
					<a
						href="/contact"
						class="group flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
					>
						Be Our First Client
						<ChevronRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</a>
					<a
						href="/portfolio"
						class="group flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
					>
						See Our Vision
						<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</a>
				</div>

				<!-- New company highlights -->
				<div
					class="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-4 lg:mx-0"
					in:fly={{ y: 30, duration: 800, delay: 550, opacity: 0 }}
				>
					<div class="text-center lg:text-left">
						<div class="text-2xl font-bold text-accent">2025</div>
						<div class="mt-1 text-xs text-gray-400">Just Launched</div>
					</div>
					<div class="text-center lg:text-left">
						<div class="text-2xl font-bold text-accent">Modern</div>
						<div class="mt-1 text-xs text-gray-400">Fresh Aesthetic</div>
					</div>
					<div class="text-center lg:text-left">
						<div class="text-2xl font-bold text-accent">100%</div>
						<div class="mt-1 text-xs text-gray-400">Dedication</div>
					</div>
				</div>
			</div>

			<!-- Hero Image -->
			<div class="relative hidden lg:block" in:fly={{ x: 50, duration: 1000, delay: 300, opacity: 0 }}>
				<div class="relative">
					<!-- Main image -->
					<div class="relative overflow-hidden rounded-3xl shadow-2xl">
						<img
							src={interiorShowcase}
							alt="Stunning interior design showcase"
							class="h-[600px] w-full object-cover"
						/>
						<!-- Subtle overlay for text readability if needed -->
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
					</div>

					<!-- Floating badge -->
					<div class="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">
						<div class="flex items-center gap-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
								<span class="text-2xl">🚀</span>
							</div>
							<div>
								<div class="text-sm text-slate-500">Now Accepting</div>
								<div class="font-bold text-slate-900">New Projects</div>
							</div>
						</div>
					</div>

					<!-- Decorative elements -->
					<div class="absolute -top-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-accent/30"></div>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<div class="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
			<div class="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/50"></div>
		</div>
	</div>
</section>
