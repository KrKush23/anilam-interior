<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />
	<main class="flex-1">
		<HeroSection />
		<ContentSection />
	</main>
	<Footer />
</div>
