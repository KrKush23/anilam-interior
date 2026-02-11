<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import { inView } from '$lib/actions/useInView';
	import { fly } from 'svelte/transition';
	import { Calendar, Clock, ArrowUpRight, User } from 'lucide-svelte';

	let visibleSections = $state<boolean[]>([false, false]);
	let activeCategory = $state('all');

	function handleEnter(index: number) {
		visibleSections[index] = true;
	}

	const categories = ['all', 'Company', 'Projects', 'Guides'];

	const featuredPost = {
		title: 'Welcome to Anilam: Our Design Journey Begins',
		excerpt:
			"We're a new interior design studio excited to transform spaces. Learn about our philosophy and what drives us to create beautiful environments.",
		category: 'Company',
		date: 'Jan 15, 2024',
		readTime: '3 min read',
		author: 'Anilam Team',
		imageSize: '1200x600'
	};

	const posts = [
		{
			title: 'Behind the Scenes: Our First Project',
			excerpt:
				'An inside look at our journey designing our very first client project - the Modern Minimalist Villa.',
			category: 'Projects',
			date: 'Jan 10, 2024',
			readTime: '5 min read',
			imageSize: '600x400'
		},
		{
			title: 'How to Choose the Perfect Color Palette',
			excerpt: 'A comprehensive guide to selecting colors that transform your space.',
			category: 'Guides',
			date: 'Jan 5, 2024',
			readTime: '4 min read',
			imageSize: '600x400'
		}
	];

	let filteredPosts = $derived(
		activeCategory === 'all' ? posts : posts.filter((p) => p.category === activeCategory)
	);
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-1 pt-20">
		<!-- Hero -->
		<section class="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32">
			<div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
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
							Our Blog
						</span>

						<h1 class="mb-6 text-5xl font-bold lg:text-6xl">Design Insights & Inspiration</h1>

						<p class="mx-auto max-w-3xl text-xl text-slate-300">
							Expert tips, trend forecasts, and behind-the-scenes looks at our projects.
						</p>
					</div>
				{/if}
			</div>
		</section>

		<!-- Featured Post -->
		<section class="border-b border-slate-100 bg-white py-16">
			<div class="mx-auto max-w-7xl px-6">
				<div class="group cursor-pointer">
					<div class="grid items-center gap-8 lg:grid-cols-2">
						<!-- IMAGE PLACEHOLDER: Featured blog image - 1200x600px -->
						<div
							class="flex aspect-[16/9] items-center justify-center rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300"
						>
							<span class="text-slate-500">[Image: {featuredPost.imageSize}]</span>
						</div>

						<div>
							<div class="mb-4 flex items-center gap-3">
								<span class="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent"
									>{featuredPost.category}</span
								>
								<span class="text-slate-400">•</span>
								<span class="text-sm text-slate-500">{featuredPost.date}</span>
							</div>

							<h2
								class="mb-4 text-3xl font-bold text-slate-900 transition-colors group-hover:text-accent"
							>
								{featuredPost.title}
							</h2>

							<p class="mb-6 text-lg text-slate-600">{featuredPost.excerpt}</p>

							<div class="flex items-center gap-4">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-teal-500 font-semibold text-white"
								>
									{featuredPost.author.charAt(0)}
								</div>
								<div>
									<p class="font-medium text-slate-900">{featuredPost.author}</p>
									<p class="flex items-center gap-1 text-sm text-slate-500">
										<Clock class="h-4 w-4" />
										{featuredPost.readTime}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Blog Grid -->
		<section class="bg-slate-50 py-24 lg:py-32">
			<div class="mx-auto max-w-7xl px-6">
				<!-- Filters -->
				<div class="mb-12 flex flex-wrap justify-center gap-3">
					{#each categories as category}
						<button
							class="rounded-full px-5 py-2 font-medium transition-all {activeCategory === category
								? 'bg-accent text-white'
								: 'bg-white text-slate-700 hover:bg-slate-100'}"
							onclick={() => (activeCategory = category)}
						>
							{category}
						</button>
					{/each}
				</div>

				<!-- Grid -->
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each filteredPosts as post}
						<article
							class="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
						>
							<!-- IMAGE PLACEHOLDER: Blog thumbnail - 600x400px -->
							<div
								class="flex aspect-[3/2] items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300"
							>
								<span class="text-sm text-slate-500">[Image: {post.imageSize}]</span>
							</div>

							<div class="p-6">
								<div class="mb-3 flex items-center gap-2">
									<span class="text-sm font-medium text-accent">{post.category}</span>
									<span class="text-slate-300">•</span>
									<span class="text-sm text-slate-500">{post.date}</span>
								</div>

								<h3
									class="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-accent"
								>
									{post.title}
								</h3>

								<p class="mb-4 line-clamp-2 text-slate-600">{post.excerpt}</p>

								<div class="flex items-center justify-between">
									<span class="flex items-center gap-1 text-sm text-slate-500">
										<Clock class="h-4 w-4" />
										{post.readTime}
									</span>
									<span
										class="flex items-center gap-1 font-medium text-accent transition-all group-hover:gap-2"
									>
										Read More <ArrowUpRight class="h-4 w-4" />
									</span>
								</div>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<CTASection />
	</main>

	<Footer />
</div>
