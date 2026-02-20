<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { inView } from '$lib/actions/useInView';
	import { fly } from 'svelte/transition';
	import { Award, Users, Target, Sparkles } from 'lucide-svelte';
	import officeImage from '$lib/assets/images/spacejoy-PyeXkOVmG1Y-unsplash.jpg';

	let sectionsVisible = $state<boolean[]>([false, false, false, false]);

	function handleEnter(index: number) {
		sectionsVisible[index] = true;
	}

	const stats = [
		{ number: '2025', label: 'Founded', icon: Award },
		{ number: '5+', label: 'Projects Completed', icon: Sparkles },
		{ number: 'Dedicated', label: 'Team', icon: Users },
		{ number: '100%', label: 'Commitment', icon: Target }
	];

	const values = [
		{ title: 'Innovation', description: 'Pushing boundaries with creative solutions' },
		{ title: 'Quality', description: 'Uncompromising standards in every detail' },
		{ title: 'Collaboration', description: 'Working closely with our clients' },
		{ title: 'Sustainability', description: 'Eco-friendly design practices' }
	];
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-1 pt-20">
		<!-- Hero Section -->
		<section class="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32">
			<!-- Background placeholder for image -->
			<div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
			<!-- IMAGE PLACEHOLDER: Office/Team photo background - 1920x600px -->
			<!-- <div class="absolute inset-0 flex items-center justify-center opacity-20">
				<span class="text-2xl text-white/50">[Background Image: Team/Office - 1920x600px]</span>
			</div> -->

			<div class="relative mx-auto max-w-7xl px-6">
				<div class="max-w-3xl" use:inView onenterView={() => handleEnter(0)}>
					{#if sectionsVisible[0]}
						<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
							<span
								class="mb-6 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent"
							>
								About Us
							</span>

							<h1 class="mb-6 text-5xl font-bold lg:text-6xl">
								Crafting Spaces That Tell Your Story
							</h1>

							<p class="text-xl leading-relaxed text-slate-300">
								Anilam is a fresh interior design studio founded in 2025 with a passion for
								transforming spaces into extraordinary environments that inspire and
								delight. We're just getting started, and we're excited to create something beautiful with you.
							</p>
						</div>
					{/if}
				</div>
			</div>
		</section>

		<!-- Stats Section -->
		<section
			class="border-b border-slate-100 bg-white py-16"
			use:inView
			onenterView={() => handleEnter(1)}
		>
			<div class="mx-auto max-w-7xl px-6">
				{#if sectionsVisible[1]}
					<div
						class="grid grid-cols-2 gap-8 lg:grid-cols-4"
						in:fly={{ y: 30, duration: 800, opacity: 0 }}
					>
						{#each stats as stat}
							<div class="text-center">
								<div
									class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10"
								>
									<stat.icon class="h-6 w-6 text-accent" />
								</div>
								<div class="mb-1 text-4xl font-bold text-slate-900">{stat.number}</div>
								<div class="text-slate-600">{stat.label}</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</section>

		<!-- Story Section -->
		<section class="bg-slate-50 py-24 lg:py-32" use:inView onenterView={() => handleEnter(2)}>
			<div class="mx-auto max-w-7xl px-6">
				{#if sectionsVisible[2]}
					<div
						class="grid items-center gap-12 lg:grid-cols-2"
						in:fly={{ y: 30, duration: 800, opacity: 0 }}
					>
						<!-- Image -->
						<div class="relative">
							<img
								src={officeImage}
								alt="Anilam interior design showroom with elegant furniture and decor"
								class="aspect-[4/3] rounded-2xl object-cover shadow-lg"
							/>
						</div>

						<div>
							<span
								class="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
							>
								Our Story
							</span>

							<h2 class="mb-6 text-4xl font-bold text-slate-900">A New Vision for Design</h2>

							<div class="space-y-4 leading-relaxed text-slate-600">
								<p>
									Founded in 2025, Anilam is a new interior design studio with a simple mission:
									to transform ordinary spaces into extraordinary experiences. Based in Mumbai,
									we're ready to bring fresh ideas and modern design to homes and businesses.
								</p>
								<p>
									Our team brings together expertise in interior design, architecture, and project
									management with a shared passion for creating spaces that inspire. We're excited to
									work on residential havens and commercial spaces that make a difference.
								</p>
								<p>
									We believe that great design is about more than aesthetics—it's about
									understanding how people live, work, and interact with their environment. Every
									project we undertake is an opportunity to create something truly unique.
								</p>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</section>

		<!-- Values Section -->
		<section class="bg-white py-24 lg:py-32" use:inView onenterView={() => handleEnter(3)}>
			<div class="mx-auto max-w-7xl px-6">
				{#if sectionsVisible[3]}
					<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<div class="mx-auto mb-16 max-w-3xl text-center">
							<span
								class="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
							>
								Our Values
							</span>
							<h2 class="mb-4 text-4xl font-bold text-slate-900">What Drives Us</h2>
							<p class="text-lg text-slate-600">
								Our core values guide every decision we make and every project we undertake.
							</p>
						</div>

						<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							{#each values as value}
								<div class="rounded-2xl bg-slate-50 p-6 transition-shadow hover:shadow-lg">
									<h3 class="mb-2 text-xl font-bold text-slate-900">{value.title}</h3>
									<p class="text-slate-600">{value.description}</p>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</section>

		<!-- Team Section -->
		<section
			class="bg-slate-900 py-24 text-white lg:py-32"
			use:inView
			onenterView={() => handleEnter(4)}
		>
			<div class="mx-auto max-w-7xl px-6">
				{#if sectionsVisible[4]}
					<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<div class="mx-auto mb-16 max-w-3xl text-center">
							<span
								class="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-accent"
							>
								What We Do
							</span>
							<h2 class="mb-4 text-4xl font-bold">Meet the Team</h2>
							<p class="text-lg text-slate-300">
								We're a passionate team of designers and architects ready to bring creativity and expertise to
								every project.
							</p>
						</div>

						<!-- Team description (no individual names shown) -->
						<div class="mx-auto max-w-3xl text-center">
							<p class="mb-8 text-slate-300">
								The Anilam team brings together expertise in interior design, space planning,
								and project management. With a focus on modern aesthetics and client collaboration,
								we're here to help you create spaces that reflect your vision and lifestyle.
							</p>
							<div class="grid gap-6 md:grid-cols-3">
								<div class="rounded-xl bg-white/5 p-6">
									<div class="mb-3 text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
									<h3 class="mb-2 font-semibold">Design</h3>
									<p class="text-sm text-slate-400">Creative interior solutions tailored to your space</p>
								</div>
								<div class="rounded-xl bg-white/5 p-6">
									<div class="mb-3 text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
										</svg>
									</div>
									<h3 class="mb-2 font-semibold">Planning</h3>
									<p class="text-sm text-slate-400">Strategic space planning and 3D visualization</p>
								</div>
								<div class="rounded-xl bg-white/5 p-6">
									<div class="mb-3 text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
										</svg>
									</div>
									<h3 class="mb-2 font-semibold">Execution</h3>
									<p class="text-sm text-slate-400">End-to-end project management and delivery</p>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</section>
	</main>

	<Footer />
</div>
