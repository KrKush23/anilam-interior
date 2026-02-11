<script lang="ts">
	import { fly } from 'svelte/transition';
	import { inView } from '$lib/actions/useInView';
	import { ArrowUpRight, MapPin } from 'lucide-svelte';

	const projects = [
		{
			title: 'Modern Minimalist Villa',
			category: 'Residential',
			location: 'Mumbai, India',
			description:
				'Our first project - a stunning 4-bedroom villa with clean lines and natural materials.',
			image: 'bg-gradient-to-br from-stone-100 to-stone-300',
			color: 'bg-stone-600'
		},
		{
			title: 'Tech Startup Headquarters',
			category: 'Commercial',
			location: 'Bangalore, India',
			description: 'Open-concept office space designed for collaboration and creativity.',
			image: 'bg-gradient-to-br from-blue-100 to-indigo-300',
			color: 'bg-indigo-600'
		}
	];

	let isVisible = $state(false);

	function handleEnter() {
		isVisible = true;
	}
</script>

<section class="bg-white py-24 lg:py-32" use:inView onenterView={handleEnter}>
	<div class="mx-auto max-w-7xl px-6">
		<!-- Section header -->
		<div class="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div class="max-w-2xl">
				<span
					class="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
				>
					Featured Work
				</span>
				<h2 class="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">Our Recent Projects</h2>
				<p class="text-lg text-slate-600">
					Explore our portfolio of completed projects that showcase our design expertise.
				</p>
			</div>

			<a
				href="/portfolio"
				class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
			>
				View All Projects
				<ArrowUpRight class="h-5 w-5" />
			</a>
		</div>

		<!-- Projects grid -->
		<div class="grid gap-8 md:grid-cols-2">
			{#each projects as project, i}
				<div class="group cursor-pointer">
					{#if isVisible}
						<div in:fly={{ y: 40, duration: 700, delay: i * 150, opacity: 0 }}>
							<!-- Image placeholder -->
							<div class="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl {project.image}">
								<!-- Overlay on hover -->
								<div
									class="absolute inset-0 bg-slate-900/0 transition-colors duration-300 group-hover:bg-slate-900/20"
								></div>

								<!-- Category badge -->
								<div class="absolute top-4 left-4">
									<span
										class="px-3 py-1 {project.color} rounded-full text-xs font-semibold text-white"
									>
										{project.category}
									</span>
								</div>

								<!-- View icon -->
								<div
									class="absolute right-4 bottom-4 flex h-12 w-12 translate-y-2 transform items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
								>
									<ArrowUpRight class="h-5 w-5 text-slate-900" />
								</div>

								<!-- Placeholder text for image -->
								<div class="absolute inset-0 flex items-center justify-center">
									<span class="text-sm font-medium text-slate-400">{project.title}</span>
								</div>
							</div>

							<!-- Content -->
							<h3
								class="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-accent"
							>
								{project.title}
							</h3>

							<p class="mb-2 text-slate-600">
								{project.description}
							</p>

							<div class="flex items-center gap-1 text-sm text-slate-500">
								<MapPin class="h-4 w-4" />
								{project.location}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
