<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import { inView } from '$lib/actions/useInView';
	import { fly } from 'svelte/transition';
	import { MapPin, Calendar, ArrowUpRight, Play } from 'lucide-svelte';
	import projectImage from '$lib/assets/images/jason-wang-NxAwryAbtIw-unsplash.jpg';

	let visibleSections = $state<boolean[]>([false, false, false, false]);
	let activeFilter = $state('all');

	function handleEnter(index: number) {
		visibleSections[index] = true;
	}

	const categories = ['all', 'residential', 'commercial', 'hospitality'];

	const projects = [
		{
			title: 'Modern Minimalist Villa',
			category: 'residential',
			location: 'Mumbai, India',
			year: '2024',
			description:
				'Our first project - a stunning 4-bedroom villa with clean lines and natural materials.',
			imageSize: '800x600'
		},
		{
			title: 'Tech Startup Headquarters',
			category: 'commercial',
			location: 'Bangalore, India',
			year: '2024',
			description: 'Open-concept office space designed for collaboration and creativity.',
			imageSize: '800x600'
		}
	];

	let filteredProjects = $derived(
		activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)
	);
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-1 pt-20">
		<!-- Hero -->
		<section class="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32">
			<!-- Background gradient (video placeholder) -->
			<div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>

			<!-- Play button for video -->
			<div class="absolute inset-0 flex items-center justify-center">
				<button
					class="group flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
				>
					<Play class="ml-1 h-8 w-8 fill-white text-white" />
				</button>
			</div>

			<div
				class="relative mx-auto max-w-7xl px-6 text-center"
				use:inView
				onenterView={() => handleEnter(0)}
			>
				{#if visibleSections[0]}
					<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<span
							class="mb-6 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent"
						>
							Our Portfolio
						</span>

						<h1 class="mb-6 text-5xl font-bold lg:text-6xl">Showcasing Our Finest Work</h1>

						<p class="mx-auto max-w-3xl text-xl text-slate-300">
							Explore our collection of transformative interior design projects, from cozy homes to
							grand commercial spaces.
						</p>
					</div>
				{/if}
			</div>
		</section>

		<!-- Gallery -->
		<section class="bg-white py-24 lg:py-32" use:inView onenterView={() => handleEnter(1)}>
			<div class="mx-auto max-w-7xl px-6">
				{#if visibleSections[1]}
					<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<!-- Filters -->
						<div class="mb-12 flex flex-wrap justify-center gap-3">
							{#each categories as category}
								<button
									class="rounded-full px-6 py-2 font-medium transition-all {activeFilter ===
									category
										? 'bg-accent text-white'
										: 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
									onclick={() => (activeFilter = category)}
								>
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</button>
							{/each}
						</div>

						<!-- Projects Grid -->
						<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{#each filteredProjects as project}
								<div class="group cursor-pointer">
									<div class="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl">
										<!-- Project image -->
										{#if project.title === 'Modern Minimalist Villa'}
											<img
												src={projectImage}
												alt="Modern minimalist villa interior with clean lines and natural materials"
												class="h-full w-full object-cover"
											/>
										{:else}
											<div
												class="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300"
											>
												<span class="text-sm text-slate-500">[{project.imageSize}]</span>
											</div>
										{/if}

										<!-- Hover overlay -->
										<div
											class="absolute inset-0 bg-slate-900/0 transition-colors group-hover:bg-slate-900/40"
										></div>

										<!-- View button -->
										<div
											class="absolute right-4 bottom-4 flex h-12 w-12 translate-y-4 transform items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100"
										>
											<ArrowUpRight class="h-5 w-5 text-slate-900" />
										</div>
									</div>

									<div class="mb-2 flex items-center gap-2 text-sm text-accent">
										<span class="font-semibold tracking-wide uppercase">{project.category}</span>
										<span class="text-slate-300">•</span>
										<span class="text-slate-500">{project.year}</span>
									</div>

									<h3
										class="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-accent"
									>
										{project.title}
									</h3>

									<p class="mb-3 text-slate-600">{project.description}</p>

									<div class="flex items-center gap-1 text-sm text-slate-500">
										<MapPin class="h-4 w-4" />
										{project.location}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</section>

		<!-- Before/After Section -->
		<section class="bg-slate-50 py-24 lg:py-32" use:inView onenterView={() => handleEnter(2)}>
			<div class="mx-auto max-w-7xl px-6">
				{#if visibleSections[2]}
					<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<div class="mx-auto mb-16 max-w-3xl text-center">
							<span
								class="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
							>
								Transformations
							</span>
							<h2 class="mb-4 text-4xl font-bold text-slate-900">Before & After</h2>
							<p class="text-lg text-slate-600">
								See the dramatic transformation of our first project.
							</p>
						</div>

						<!-- Before/After Single -->
						<div class="mx-auto max-w-3xl">
							<div class="grid grid-cols-2 gap-4">
								<div>
									<p class="mb-2 text-sm font-semibold text-slate-500">BEFORE</p>
									<!-- IMAGE PLACEHOLDER: Before image - 400x300px -->
									<div
										class="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-slate-300 to-slate-400"
									>
										<span class="text-sm text-slate-600">[Before - 400x300px]</span>
									</div>
								</div>
								<div>
									<p class="mb-2 text-sm font-semibold text-accent">AFTER</p>
									<!-- IMAGE PLACEHOLDER: After image - 400x300px -->
									<div
										class="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-slate-200 to-slate-300"
									>
										<span class="text-sm text-slate-600">[After - 400x300px]</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</section>

		<!-- Video Gallery -->
		<section
			class="bg-slate-900 py-24 text-white lg:py-32"
			use:inView
			onenterView={() => handleEnter(3)}
		>
			<div class="mx-auto max-w-7xl px-6">
				{#if visibleSections[3]}
					<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<div class="mx-auto mb-16 max-w-3xl text-center">
							<span
								class="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-accent"
							>
								Video Tours
							</span>
							<h2 class="mb-4 text-4xl font-bold">Walkthrough Videos</h2>
							<p class="text-lg text-slate-300">Experience our designs in motion.</p>
						</div>

						<div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
							{#each [1, 2] as i}
								<div
									class="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700"
								>

									<!-- Play button -->
									<div
										class="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-colors group-hover:bg-slate-900/40"
									>
										<div
											class="flex h-16 w-16 scale-90 transform items-center justify-center rounded-full bg-white shadow-lg transition-transform group-hover:scale-100"
										>
											<Play class="ml-1 h-6 w-6 fill-slate-900 text-slate-900" />
										</div>
									</div>

									<!-- Title -->
									<div
										class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-slate-950 to-transparent p-6"
									>
										<h3 class="text-lg font-semibold">Project Walkthrough {i}</h3>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</section>

		<CTASection />
	</main>

	<Footer />
</div>
