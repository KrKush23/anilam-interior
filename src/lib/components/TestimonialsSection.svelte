<script lang="ts">
	import { fly } from 'svelte/transition';
	import { inView } from '$lib/actions/useInView';
	import { Quote, Star } from 'lucide-svelte';

	const testimonials = [
		{
			name: 'Priya Sharma',
			role: 'Homeowner',
			location: 'Mumbai',
			quote:
				"As Anilam's first client, I watched them pour their heart into our villa. The result exceeded all our expectations - they truly listen and deliver.",
			rating: 5,
			avatar: 'bg-gradient-to-br from-pink-400 to-rose-500'
		},
		{
			name: 'Rahul Mehta',
			role: 'CEO, TechVision',
			location: 'Bangalore',
			quote:
				'Fresh ideas and incredible dedication. The Anilam team brought new energy to our office project and delivered on time.',
			rating: 5,
			avatar: 'bg-gradient-to-br from-blue-400 to-indigo-500'
		}
	];

	let isVisible = $state(false);

	function handleEnter() {
		isVisible = true;
	}
</script>

<section class="bg-slate-900 py-24 text-white lg:py-32" use:inView onenterView={handleEnter}>
	<div class="mx-auto max-w-7xl px-6">
		<!-- Section header -->
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<span
				class="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-accent"
			>
				Client Stories
			</span>
			<h2 class="mb-6 text-4xl font-bold lg:text-5xl">What Our Clients Say</h2>
			<p class="text-lg text-slate-300">
				Don't just take our word for it. Here's what our clients have to say about working with
				Anilam.
			</p>
		</div>

		<!-- Testimonials grid -->
		<div class="grid gap-8 md:grid-cols-3">
			{#each testimonials as testimonial, i}
				<div
					class="group relative rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
				>
					{#if isVisible}
						<div in:fly={{ y: 30, duration: 700, delay: i * 150, opacity: 0 }}>
							<!-- Quote icon -->
							<div
								class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10"
							>
								<Quote class="h-5 w-5 text-accent" />
							</div>

							<!-- Rating -->
							<div class="mb-4 flex gap-1">
								{#each Array(testimonial.rating) as _}
									<Star class="h-5 w-5 fill-amber-400 text-amber-400" />
								{/each}
							</div>

							<!-- Quote text -->
							<p class="mb-6 text-lg leading-relaxed text-slate-300">
								"{testimonial.quote}"
							</p>

							<!-- Author -->
							<div class="flex items-center gap-4">
								<div
									class="h-12 w-12 {testimonial.avatar} flex items-center justify-center rounded-full text-lg font-bold text-white"
								>
									{testimonial.name.charAt(0)}
								</div>
								<div>
									<div class="font-semibold text-white">
										{testimonial.name}
									</div>
									<div class="text-sm text-slate-400">
										{testimonial.role} • {testimonial.location}
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
