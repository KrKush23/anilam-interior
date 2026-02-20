<script lang="ts">
	import { fly } from 'svelte/transition';
	import { inView } from '$lib/actions/useInView';
	import { Home, Building2, ClipboardList, ArrowUpRight } from 'lucide-svelte';
	import design3D from '$lib/assets/images/3D design.jpg';

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

		<!-- Content with image and services -->
		<div class="grid items-start gap-12 lg:grid-cols-12">
			<!-- Featured Image - takes 5 columns -->
			<div class="relative lg:col-span-5">
				<div class="sticky top-8">
					<div class="relative overflow-hidden rounded-3xl shadow-2xl">
						<img
							src={design3D}
							alt="3D Interior Design Visualization"
							class="h-auto w-full object-cover"
						/>
						<!-- Overlay with text -->
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
						<div class="absolute bottom-0 left-0 right-0 p-8">
							<div class="mb-3 inline-flex items-center rounded-full bg-accent/20 px-3 py-1 backdrop-blur-sm">
								<span class="text-xs font-semibold text-white">3D Visualization</span>
							</div>
							<h3 class="text-2xl font-bold text-white">See Your Space Before It's Built</h3>
							<p class="mt-2 text-sm text-white/80">
								Our advanced 3D rendering lets you visualize every detail before construction begins.
							</p>
						</div>
					</div>

					<!-- Stats row -->
					<div class="mt-6 grid grid-cols-3 gap-4 rounded-2xl bg-white p-6 shadow-lg">
						<div class="text-center">
							<div class="text-2xl font-bold text-accent">50+</div>
							<div class="text-xs text-slate-500">3D Projects</div>
						</div>
						<div class="text-center border-x border-slate-100">
							<div class="text-2xl font-bold text-accent">100%</div>
							<div class="text-xs text-slate-500">Accuracy</div>
						</div>
						<div class="text-center">
							<div class="text-2xl font-bold text-accent">24h</div>
							<div class="text-xs text-slate-500">Turnaround</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Service cards - takes 7 columns -->
			<div class="lg:col-span-7">
				<div class="grid gap-6">
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
		</div>
	</div>
</section>
