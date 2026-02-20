<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { inView } from '$lib/actions/useInView';
	import { fly } from 'svelte/transition';
	import { Play } from 'lucide-svelte';
	import cozyCafe from '$lib/assets/images/COZY CAFE.jpg';
	import modernCoffeeShop from '$lib/assets/images/_ . . modern coffee shop_r.jpg';
	import officeDesign from '$lib/assets/images/Interior Design For Office _ Space Tattva Design Studio.jpg';
	import tropicalInterior from '$lib/assets/images/20 Tropical Interior Design Ideas_ Transform Your Home into a Serene Tropical Paradise.jpg';

	let visibleSections = $state<boolean[]>([false, false, false, false]);
	let activeFilter = $state('all');

	function handleEnter(index: number) {
		visibleSections[index] = true;
	}

	const categories = ['all', 'residential', 'commercial', 'hospitality'];

	const projects = [
		{
			title: 'Cozy Corner Cafe',
			category: 'commercial',
			location: 'Mumbai, India',
			year: '2025',
			description:
				'A warm, inviting coffee shop interior that balances modern aesthetics with comfortable, homey touches.',
			image: cozyCafe,
			color: 'bg-amber-600'
		},
		{
			title: 'Modern Coffee Lounge',
			category: 'hospitality',
			location: 'Delhi, India',
			year: '2025',
			description: 'Contemporary cafe design featuring sleek furniture, warm lighting, and an open, welcoming layout.',
			image: modernCoffeeShop,
			color: 'bg-teal-600'
		},
		{
			title: 'Tech Startup Headquarters',
			category: 'commercial',
			location: 'Bangalore, India',
			year: '2025',
			description: 'Professional office space designed for productivity, featuring modern workstations and collaborative areas.',
			image: officeDesign,
			color: 'bg-indigo-600'
		},
		{
			title: 'Tropical Paradise Home',
			category: 'residential',
			location: 'Pune, India',
			year: '2025',
			description:
				'A serene residential space transformed with lush greenery, natural textures, and tranquil color palettes.',
			image: tropicalInterior,
			color: 'bg-emerald-600'
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
			<!-- <div class="absolute inset-0 flex items-center justify-center">
				<button
					class="group flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
				>
					<Play class="ml-1 h-8 w-8 fill-white text-white" />
				</button>
			</div> -->

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
						<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{#each filteredProjects as project}
								<ProjectCard
									title={project.title}
									category={project.category}
									location={project.location}
									year={project.year}
									description={project.description}
									image={project.image}
									color={project.color}
								/>
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
