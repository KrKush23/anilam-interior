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
		{ number: '15+', label: 'Years Experience', icon: Award },
		{ number: '500+', label: 'Projects Completed', icon: Sparkles },
		{ number: '50+', label: 'Team Members', icon: Users },
		{ number: '98%', label: 'Client Satisfaction', icon: Target }
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
			<div class="absolute inset-0 flex items-center justify-center opacity-20">
				<span class="text-2xl text-white/50">[Background Image: Team/Office - 1920x600px]</span>
			</div>

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
								Since 2010, Anilam has been at the forefront of interior design innovation,
								transforming thousands of spaces into extraordinary environments that inspire and
								delight.
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

							<h2 class="mb-6 text-4xl font-bold text-slate-900">A Legacy of Design Excellence</h2>

							<div class="space-y-4 leading-relaxed text-slate-600">
								<p>
									Founded in 2010, Anilam began with a simple mission: to transform ordinary spaces
									into extraordinary experiences. What started as a small studio in Mumbai has grown
									into one of India's premier interior design firms.
								</p>
								<p>
									Our team of 50+ designers, architects, and project managers brings together
									diverse expertise and a shared passion for creating spaces that inspire. From
									residential havens to commercial landmarks, we've completed over 500 projects
									across the country.
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
								Our Team
							</span>
							<h2 class="mb-4 text-4xl font-bold">Meet the Experts</h2>
							<p class="text-lg text-slate-300">
								Our talented team of designers and architects bring creativity and expertise to
								every project.
							</p>
						</div>

						<!-- Team grid with placeholders -->
						<div class="grid gap-8 md:grid-cols-3">
							{#each [1, 2, 3] as i}
								<div class="text-center">
									<!-- IMAGE PLACEHOLDER: Team member photo - 400x400px -->
									<div
										class="mx-auto mb-4 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-800"
									>
										<span class="text-sm text-slate-500">[Photo {i} - 400x400px]</span>
									</div>
									<h3 class="mb-1 text-xl font-semibold">Team Member {i}</h3>
									<p class="text-slate-400">Position Title</p>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</section>
	</main>

	<Footer />
</div>
