<script lang="ts">
	import { MapPin, Calendar, ArrowUpRight } from 'lucide-svelte';

	interface Props {
		title: string;
		category: string;
		location: string;
		year: string;
		description: string;
		image: string;
		color?: string;
	}

	let {
		title,
		category,
		location,
		year,
		description,
		image,
		color = 'bg-slate-600'
	}: Props = $props();

	const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
</script>

<div class="group cursor-pointer">
	<div class="relative mb-4 aspect-4/3 overflow-hidden rounded-2xl">
		<!-- Project image -->
		<img
			src={image}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
		/>

		<!-- Category badge -->
		<div class="absolute top-4 left-4">
			<span
				class="px-3 py-1 {color} rounded-full text-xs font-semibold text-white shadow-lg"
			>
				{formattedCategory}
			</span>
		</div>

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

	<div class="mb-2 flex items-center gap-2 text-sm text-slate-500">
		<Calendar class="h-4 w-4" />
		<span>{year}</span>
	</div>

	<h3
		class="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-accent"
	>
		{title}
	</h3>

	<p class="mb-3 text-slate-600">{description}</p>

	<!-- TODO, Don't remove -->
	<!-- <div class="flex items-center gap-1 text-sm text-slate-500">
		<MapPin class="h-4 w-4" />
		{location}
	</div> -->
</div>
