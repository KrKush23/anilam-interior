<script lang="ts">
	import { fly } from 'svelte/transition';
	import { ChevronRight, ArrowRight } from 'lucide-svelte';
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
	<div class="relative mx-auto max-w-5xl px-6 text-center">
		<!-- Badge -->
		<div
			class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
			in:fly={{ y: 30, duration: 800, opacity: 0 }}
		>
			<span class="h-2 w-2 animate-pulse rounded-full bg-accent"></span>
			<span class="text-sm font-medium text-gray-300">Premium Interior Design Studio</span>
		</div>

		<!-- Main headline -->
		<h1
			class="text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
			in:fly={{ y: 50, duration: 900, delay: 100, opacity: 0 }}
		>
			Crafting Spaces<br />
			<span class="bg-gradient-to-r from-accent to-teal-300 bg-clip-text text-transparent">
				That Inspire
			</span>
		</h1>

		<!-- Subtitle -->
		<p
			class="mx-auto mt-8 max-w-3xl text-lg leading-relaxed font-light text-gray-300 md:text-xl lg:text-2xl"
			in:fly={{ y: 30, duration: 900, delay: 250, opacity: 0 }}
		>
			Anilam transforms ordinary spaces into extraordinary experiences. We blend innovative design
			with timeless elegance for homes and businesses.
		</p>

		<!-- CTA Buttons -->
		<div
			class="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
			in:fly={{ y: 20, duration: 800, delay: 400, opacity: 0 }}
		>
			<a
				href="/services"
				class="group flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
			>
				Explore Services
				<ChevronRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
			</a>
			<a
				href="/portfolio"
				class="group flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
			>
				View Our Work
				<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
			</a>
		</div>

		<!-- Stats preview -->
		<div
			class="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8"
			in:fly={{ y: 30, duration: 800, delay: 550, opacity: 0 }}
		>
			<div class="text-center">
				<div class="text-3xl font-bold text-white md:text-4xl">500+</div>
				<div class="mt-1 text-sm text-gray-400">Projects Done</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-white md:text-4xl">15+</div>
				<div class="mt-1 text-sm text-gray-400">Years Experience</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-white md:text-4xl">98%</div>
				<div class="mt-1 text-sm text-gray-400">Happy Clients</div>
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
