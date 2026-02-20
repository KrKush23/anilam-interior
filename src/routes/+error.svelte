<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import { Home, ArrowLeft, AlertTriangle, FileQuestion } from 'lucide-svelte';

	// Get appropriate message based on status code
	function getErrorMessage(status: number): string {
		switch (status) {
			case 404:
				return "The page you're looking for doesn't exist or has been moved.";
			case 500:
				return "Something went wrong on our end. Please try again later.";
			case 403:
				return "You don't have permission to access this page.";
			case 401:
				return "You need to be logged in to access this page.";
			default:
				return "An unexpected error occurred. Please try again later.";
		}
	}

	function getErrorTitle(status: number): string {
		switch (status) {
			case 404:
				return 'Page Not Found';
			case 500:
				return 'Server Error';
			case 403:
				return 'Access Denied';
			case 401:
				return 'Unauthorized';
			default:
				return 'Error';
		}
	}

	const status = page.status;
	const errorMessage = page.error?.message || getErrorMessage(status);
	const errorTitle = getErrorTitle(status);
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-1 pt-20">
		<section class="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32">
			<!-- Background gradient -->
			<div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>

			<!-- Decorative elements -->
			<div
				class="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
			></div>
			<div
				class="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
			></div>

			<div class="relative mx-auto max-w-7xl px-6">
				<div class="text-center" in:fly={{ y: 30, duration: 800, opacity: 0 }}>
					<!-- Error Icon -->
					<div class="mb-8 flex justify-center">
						<div
							class="flex h-24 w-24 items-center justify-center rounded-full bg-accent/20"
						>
							{#if status === 404}
								<FileQuestion class="h-12 w-12 text-accent" />
							{:else}
								<AlertTriangle class="h-12 w-12 text-accent" />
							{/if}
						</div>
					</div>

					<!-- Error Code -->
					<h1 class="mb-4 text-8xl font-bold text-accent">{status}</h1>

					<!-- Error Title -->
					<h2 class="mb-6 text-3xl font-bold lg:text-4xl">{errorTitle}</h2>

					<!-- Error Message -->
					<p class="mx-auto mb-10 max-w-xl text-lg text-slate-300">
						{errorMessage}
					</p>

					<!-- Action Buttons -->
					<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="/"
							class="group flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-accent/90"
						>
							<Home class="h-5 w-5" />
							Go Home
						</a>

						<button
							onclick={() => history.back()}
							class="flex items-center gap-2 rounded-full border-2 border-slate-600 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-accent hover:text-accent"
						>
							<ArrowLeft class="h-5 w-5" />
							Go Back
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- Help Section -->
		<section class="bg-white py-16 lg:py-20">
			<div class="mx-auto max-w-7xl px-6">
				<div class="text-center">
					<h3 class="mb-4 text-2xl font-bold text-slate-900">Need Help?</h3>
					<p class="mb-8 text-slate-600">
						If you continue to experience issues, please contact our support team.
					</p>

					<div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
						<a
							href="/contact"
							class="text-accent transition-colors hover:text-accent/80 hover:underline"
						>
							Contact Support
						</a>
						<span class="hidden text-slate-400 sm:inline">|</span>
						<a
							href="/services"
							class="text-accent transition-colors hover:text-accent/80 hover:underline"
						>
							View Our Services
						</a>
						<span class="hidden text-slate-400 sm:inline">|</span>
						<a
							href="/portfolio"
							class="text-accent transition-colors hover:text-accent/80 hover:underline"
						>
							Browse Portfolio
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
