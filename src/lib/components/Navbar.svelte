<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { Menu, X, Phone } from 'lucide-svelte';

	let menuOpen = $state(false);
	let menuEl: HTMLElement | null = $state(null);
	let menuButton: HTMLButtonElement | null = $state(null);
	let scrolled = $state(false);

	// Track scroll position for navbar styling
	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	$effect(() => {
		if (!menuOpen && menuButton) {
			menuButton.focus();
		}
	});

	// lock body scroll when menu is open
	$effect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
	});

	// close on ESC key
	$effect(() => {
		if (!menuOpen) return;

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				menuOpen = false;
			}
		};

		window.addEventListener('keydown', onKeyDown);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	});

	// focus trap
	$effect(() => {
		if (!menuOpen || !menuEl) return;

		const focusable = (menuEl as HTMLElement).querySelectorAll<HTMLElement>(
			'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
		);

		if (!focusable.length) return;

		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		first.focus();

		const trap = (e: KeyboardEvent) => {
			if (e.key !== 'Tab') return;

			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		};

		document.addEventListener('keydown', trap);
		return () => document.removeEventListener('keydown', trap);
	});

	const navLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Services', href: '/services' },
		{ label: 'Portfolio', href: '/portfolio' },
		{ label: 'Blog', href: '/blog' }
	];
</script>

<div>
	<nav
		class="fixed z-50 w-full transition-all duration-300 {scrolled
			? 'bg-slate-900/95 py-3 shadow-lg backdrop-blur-md'
			: 'bg-transparent py-5'}"
	>
		<div class="mx-auto flex max-w-7xl items-center justify-between px-6">
			<!-- Logo -->
			<a href="/" class="text-2xl font-bold tracking-tight text-white" aria-label="Anilam Home">
				Anilam
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-8 lg:flex">
				{#each navLinks as link}
					<a href={link.href} class="font-medium text-white/80 transition-colors hover:text-white">
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Right side: CTA + Mobile menu -->
			<div class="flex items-center gap-4">
				<!-- CTA Button (desktop) -->
				<a
					href="/contact"
					class="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-accent/90 lg:inline-flex"
				>
					<Phone class="h-4 w-4" />
					Get Quote
				</a>

				<!-- Mobile menu toggle -->
				<button
					bind:this={menuButton}
					class="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
					onclick={() => (menuOpen = !menuOpen)}
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				>
					{#if !menuOpen}
						<Menu class="h-6 w-6" />
					{:else}
						<X class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>
	</nav>

	{#if menuOpen}
		<!-- Backdrop -->
		<div
			class="fixed inset-0 z-40 bg-slate-950/95 lg:hidden"
			onclick={() => (menuOpen = false)}
			aria-hidden="true"
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 150 }}
		></div>

		<!-- Mobile Menu Panel -->
		<div
			bind:this={menuEl}
			class="fixed inset-x-0 top-0 z-50 min-h-screen bg-slate-900 lg:hidden"
			aria-label="Main menu"
			role="dialog"
			aria-modal="true"
			in:fly={{ y: -20, duration: 300, opacity: 0 }}
			out:fly={{ y: -20, duration: 200, opacity: 0 }}
		>
			<!-- Header -->
			<div class="flex items-center justify-between border-b border-slate-800 px-6 py-5">
				<span class="text-2xl font-bold text-white">Anilam</span>
				<button
					onclick={() => (menuOpen = false)}
					aria-label="Close menu"
					class="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
				>
					<X class="h-6 w-6" />
				</button>
			</div>

			<!-- Navigation links -->
			<nav class="px-6 py-8">
				<ul class="flex flex-col gap-6">
					{#each navLinks as link}
						<li>
							<a
								href={link.href}
								onclick={() => (menuOpen = false)}
								class="text-2xl font-semibold text-white/90 transition-colors hover:text-accent"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>

				<!-- Mobile CTA -->
				<a
					href="/contact"
					onclick={() => (menuOpen = false)}
					class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-white transition-colors hover:bg-accent/90"
				>
					<Phone class="h-5 w-5" />
					Get Free Quote
				</a>
			</nav>
		</div>
	{/if}
</div>
