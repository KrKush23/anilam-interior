<script lang="ts">
	import { fly } from 'svelte/transition';
	import { inView } from '$lib/actions/useInView';
	import { Home, Building2, ClipboardList, ArrowUpRight } from 'lucide-svelte';

	const services = [
		{
			icon: Home,
			title: 'Residential Design',
			description:
				'Transform your home into a sanctuary. We create personalized spaces that reflect your lifestyle, from cozy apartments to luxury estates.',
			features: ['Space Planning', 'Custom Furniture', 'Color Consultation'],
			color: 'from-blue-500/20 to-cyan-500/20'
		},
		{
			icon: Building2,
			title: 'Commercial Design',
			description:
				'Elevate your business environment. We design offices, retail spaces, and hospitality venues that boost productivity and impress clients.',
			features: ['Office Layouts', 'Brand Integration', 'Ergonomic Solutions'],
			color: 'from-accent/20 to-teal-500/20'
		},
		{
			icon: ClipboardList,
			title: 'Consultation & Planning',
			description:
				'Expert guidance at every step. From initial concept to final execution, we help you make informed decisions for your space.',
			features: ['3D Visualization', 'Budget Planning', 'Project Management'],
			color: 'from-purple-500/20 to-pink-500/20'
		}
	];

	let visibleCards = $state<boolean[]>([false, false, false]);

	function handleEnter(index: number) {
		visibleCards[index] = true;
	}
</script>

<section class="bg-slate-50 py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6">
		<!-- Section header -->
		<div class="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
			<span
				class="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
			>
				What We Do
			</span>
			<h2 class="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
				Services Tailored to Your Vision
			</h2>
			<p class="text-lg leading-relaxed text-slate-600">
				From concept to completion, we offer comprehensive interior design services that transform
				spaces into stunning, functional environments.
			</p>
		</div>

		<!-- Service cards -->
		<div class="grid gap-8 md:grid-cols-3">
			{#each services as service, i}
				<div
					class="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
					use:inView
					onenterView={() => handleEnter(i)}
				>
					{#if visibleCards[i]}
						<div in:fly={{ y: 30, duration: 700, delay: i * 150, opacity: 0 }}>
							<!-- Icon background -->
							<div
								class="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br {service.color} rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-110"
							></div>

							<!-- Icon -->
							<div
								class="relative h-14 w-14 bg-gradient-to-br {service.color} mb-6 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
							>
								<service.icon class="h-7 w-7 text-slate-700" strokeWidth={1.5} />
							</div>

							<!-- Content -->
							<h3
								class="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-accent"
							>
								{service.title}
							</h3>

							<p class="mb-6 leading-relaxed text-slate-600">
								{service.description}
							</p>

							<!-- Features -->
							<ul class="mb-6 space-y-2">
								{#each service.features as feature}
									<li class="flex items-center gap-2 text-sm text-slate-600">
										<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
										{feature}
									</li>
								{/each}
							</ul>

							<!-- Link -->
							<a
								href="/services"
								class="inline-flex items-center gap-1 font-semibold text-accent transition-all hover:gap-2"
							>
								Learn More
								<ArrowUpRight class="h-4 w-4" />
							</a>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
