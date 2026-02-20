<script lang="ts">
	import {
		Instagram,
		Facebook,
		Linkedin,
		MapPin,
		Phone,
		Mail,
		ArrowUpRight
	} from 'lucide-svelte';
	import {
		PHONE_DISPLAY,
		PHONE_HREF,
		EMAIL_DISPLAY,
		EMAIL_HREF,
		ADDRESS_FULL,
		INSTAGRAM_URL,
		FACEBOOK_URL,
		LINKEDIN_URL
	} from '$lib/config/site';

	const quickLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '/about' },
		{ label: 'Services', href: '/services' },
		{ label: 'Portfolio', href: '/portfolio' },
		{ label: 'Contact', href: '/contact' }
	];

	const services = [
		{ label: 'Residential Design', href: '/services' },
		{ label: 'Commercial Design', href: '/services' },
		{ label: 'Consultation', href: '/services' },
		{ label: '3D Visualization', href: '/services' }
	];

	const socialLinks = [
		{ icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
		{ icon: Facebook, href: FACEBOOK_URL, label: 'Facebook' },
		{ icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
	];
</script>

<footer class="bg-slate-950 text-white">
	<!-- Main footer -->
	<div class="mx-auto max-w-7xl px-6 py-16 lg:py-20">
		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
			<!-- Brand column -->
			<div class="lg:col-span-1">
				<a href="/" class="text-2xl font-bold tracking-tight"> Anilam </a>
				<p class="mt-4 leading-relaxed text-slate-400">
					Transforming spaces into extraordinary experiences. Premium interior design for homes and
					businesses.
				</p>

				<!-- Social links -->
				<div class="mt-6 flex gap-3">
					{#each socialLinks as social}
						<a
							href={social.href}
							aria-label={social.label}
							target="_blank"
							class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors duration-300 hover:bg-accent"
						>
							<social.icon class="h-5 w-5" />
						</a>
					{/each}
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="mb-5 font-semibold text-white">Quick Links</h4>
				<ul class="space-y-3">
					{#each quickLinks as link}
						<li>
							<a
								href={link.href}
								class="group flex items-center gap-1 text-slate-400 transition-colors hover:text-accent"
							>
								{link.label}
								<ArrowUpRight
									class="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
								/>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h4 class="mb-5 font-semibold text-white">Services</h4>
				<ul class="space-y-3">
					{#each services as service}
						<li>
							<a
								href={service.href}
								class="group flex items-center gap-1 text-slate-400 transition-colors hover:text-accent"
							>
								{service.label}
								<ArrowUpRight
									class="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
								/>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h4 class="mb-5 font-semibold text-white">Contact Us</h4>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<MapPin class="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
						<span class="text-slate-400">
							{ADDRESS_FULL}
						</span>
					</li>
					<li class="flex items-center gap-3">
						<Phone class="h-5 w-5 flex-shrink-0 text-accent" />
						<a href={PHONE_HREF} class="text-slate-400 transition-colors hover:text-accent">
							{PHONE_DISPLAY}
						</a>
					</li>
					<li class="flex items-center gap-3">
						<Mail class="h-5 w-5 flex-shrink-0 text-accent" />
						<a
							href={EMAIL_HREF}
							class="text-slate-400 transition-colors hover:text-accent"
						>
							{EMAIL_DISPLAY}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Bottom bar -->
	<div class="border-t border-slate-800">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row"
		>
			<p class="text-sm text-slate-500">© {new Date().getFullYear()} Anilam. All rights reserved.</p>

			<div class="flex gap-6 text-sm">
				<a href="/privacy" class="text-slate-500 transition-colors hover:text-accent"
					>Privacy Policy</a
				>
				<a href="/terms" class="text-slate-500 transition-colors hover:text-accent"
					>Terms of Service</a
				>
			</div>
		</div>
	</div>
</footer>
