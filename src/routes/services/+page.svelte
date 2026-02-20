<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import { inView } from '$lib/actions/useInView';
	import { fly } from 'svelte/transition';
	import { mainServices, additionalServices, process } from '$lib/constants/services';

	let visibleSections = $state<boolean[]>([false, false, false]);

	function handleEnter(index: number) {
		visibleSections[index] = true;
	}
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-1 pt-20">
		<!-- Hero -->
		<section class="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32">
			<!-- VIDEO PLACEHOLDER: Background video of design process or showroom - 1920x800px -->
			<div class="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-950"></div>
			<!-- <div class="absolute inset-0 flex items-center justify-center opacity-20">
				<span class="text-2xl text-white/50">[Video: Design Process/Showroom - 1920x800px]</span>
			</div> -->

			<div class="relative mx-auto max-w-7xl px-6" use:inView onenterView={() => handleEnter(0)}>
				{#if visibleSections[0]}
					<div class="max-w-3xl" in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<span
							class="mb-6 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent"
						>
							Our Services
						</span>

						<h1 class="mb-6 text-5xl font-bold lg:text-6xl">Comprehensive Design Solutions</h1>

						<p class="text-xl leading-relaxed text-slate-300">
							From initial concept to final execution, we offer end-to-end interior design services
							tailored to your unique vision and requirements.
						</p>
					</div>
				{/if}
			</div>
		</section>

		<!-- Main Services -->
		<section class="bg-white py-24 lg:py-32" use:inView onenterView={() => handleEnter(1)}>
			<div class="mx-auto max-w-7xl px-6">
				{#if visibleSections[1]}
					<div class="space-y-24" in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						{#each mainServices as service, i}
							<div
								class="grid items-center gap-12 lg:grid-cols-2 {i % 2 === 1
									? 'lg:flex-row-reverse'
									: ''}"
							>
								<!-- Image -->
								<div class="relative {i % 2 === 1 ? 'lg:order-2' : ''}">
									<img
										src={service.image}
										alt={service.imageAlt}
										class="aspect-3/2 rounded-2xl object-cover shadow-lg"
									/>
								</div>

								<div class={i % 2 === 1 ? 'lg:order-1' : ''}>
									<div
										class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10"
									>
										<service.icon class="h-7 w-7 text-accent" />
									</div>

									<h2 class="mb-4 text-3xl font-bold text-slate-900">{service.title}</h2>
									<p class="mb-6 text-lg text-slate-600">{service.description}</p>

									<ul class="space-y-3">
										{#each service.features as feature}
											<li class="flex items-center gap-3">
												<span class="h-2 w-2 rounded-full bg-accent"></span>
												<span class="text-slate-700">{feature}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</section>

		<!-- Additional Services Grid -->
		<section class="bg-slate-50 py-24 lg:py-32" use:inView onenterView={() => handleEnter(2)}>
			<div class="mx-auto max-w-7xl px-6">
				{#if visibleSections[2]}
					<div in:fly={{ y: 30, duration: 800, opacity: 0 }}>
						<div class="mx-auto mb-16 max-w-3xl text-center">
							<span
								class="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
							>
								Additional Services
							</span>
							<h2 class="mb-4 text-4xl font-bold text-slate-900">More Ways We Can Help</h2>
						</div>

						<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
							{#each additionalServices as service}
								<div class="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
									<service.icon class="mb-4 h-8 w-8 text-accent" />
									<h3 class="mb-2 text-lg font-bold text-slate-900">{service.title}</h3>
									<p class="text-sm text-slate-600">{service.description}</p>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</section>

		<!-- Process Section -->
		<section class="bg-slate-900 py-24 text-white lg:py-32">
			<div class="mx-auto max-w-7xl px-6">
				<div class="mx-auto mb-16 max-w-3xl text-center">
					<span
						class="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-accent"
					>
						Our Process
					</span>
					<h2 class="mb-4 text-4xl font-bold">How We Work</h2>
					<p class="text-lg text-slate-300">
						A proven process that ensures exceptional results every time.
					</p>
				</div>

				<!-- TODO: VIDEO PLACEHOLDER: Process video showing transformation - 1200x500px -->
				<!-- <div
					class="mb-16 flex aspect-video items-center justify-center rounded-2xl bg-linear-to-br from-slate-800 to-slate-700"
				>
					<span class="text-lg text-white/50"
						>[Video: Design Process/Transformation - 1200x500px]</span
					>
				</div> -->

				<div class="grid gap-8 md:grid-cols-4">
					{#each process as step (step)}
						<div class="relative">
							<div class="mb-4 text-5xl font-bold text-accent/20">{step.step}</div>
							<h3 class="mb-2 text-xl font-bold">{step.title}</h3>
							<p class="text-slate-400">{step.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<CTASection />
	</main>

	<Footer />
</div>
