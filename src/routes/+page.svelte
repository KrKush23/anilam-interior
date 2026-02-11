<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
	import PortfolioSection from '$lib/components/PortfolioSection.svelte';
	import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex-1">
		<HeroSection />
		<ContentSection />
		<PortfolioSection />
		<TestimonialsSection />
		<CTASection />
	</main>
	<Footer />
</div>
