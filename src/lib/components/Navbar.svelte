<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  let menuOpen = $state(false);
  let menuEl: HTMLElement | null = $state(null);

  let menuButton: HTMLButtonElement | null = $state(null);

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
</script>


<div>
    <nav class="bg-primary text-white fixed w-full z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
        <div class="flex items-center gap-8">

            <!-- Left: Logo -->
            <a href="/" class="text-2xl font-semibold tracking-wide" aria-label="Anilam Home">
            Anilam
            </a>

            <!-- Center/Left: Primary Links (desktop only) -->
            <ul class="hidden md:flex gap-8 ml-0">
            <li><a href="/about" class="hover:text-accent" title="About Us">About</a></li>
            <li><a href="/services" class="hover:text-accent" title="Our Services">Services</a></li>
            <li><a href="/portfolio" class="hover:text-accent" title="Our Portfolio">Portfolio</a></li>
            </ul>
        </div>

        <!-- Right: Secondary Links + Utilities -->
        <div class="flex items-center gap-6">
        <!-- Secondary Links (desktop only) -->
        <ul class="hidden md:flex gap-6">
            <li><a href="/locations" class="hover:text-accent" title="Locations">Locations</a></li>
            <li><a href="/blog" class="hover:text-accent" title="Blog">Blog</a></li>
            <li><a href="/contact" class="hover:text-accent" title="Contact">Contact</a></li>
        </ul>

        <!-- Utility icons -->
        <button title="Search" aria-label="Search" class="md:ml-4" type="button"> 
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
        </button>

        <!-- Mobile menu toggle -->
        <button
        bind:this={menuButton}
            class="ml-2"
            onclick={() => menuOpen = !menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            title={menuOpen ? 'Close menu' : 'Open menu'}
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if !menuOpen}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {:else}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {/if}
            </svg>
        </button>
        </div>
    </div>

    <!-- Mobile Menu -->
    {#if menuOpen}
        <div class="md:hidden bg-primary text-white">
        <ul class="flex flex-col gap-4 p-6">
            <!-- Primary Links -->
            <li><a href="/about" class="hover:text-accent">About</a></li>
            <li><a href="/services" class="hover:text-accent">Services</a></li>
            <li><a href="/portfolio" class="hover:text-accent">Portfolio</a></li>

            <!-- Secondary Links -->
            <li><a href="/locations" class="hover:text-accent">Locations</a></li>
            <li><a href="/blog" class="hover:text-accent">Blog</a></li>
            <li><a href="/contact" class="hover:text-accent">Contact</a></li>
        </ul>
        </div>
    {/if}
    </nav>

    {#if menuOpen}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-black/40 z-40"
    onclick={() => menuOpen = false}
    aria-hidden="true"
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 150 }}
    >
  </div>

  <!-- Slide-in panel -->
  <div
  bind:this={menuEl}
    class="fixed top-0 right-0 h-full w-full sm:w-105 bg-black text-white z-50 p-8 overflow-y-auto"
    aria-label="Main menu"
     role="dialog"
  aria-modal="true"
    in:fly={{ x: 420, duration: 300, opacity: 1 }}
    out:fly={{ x: 420, duration: 200, opacity: 1 }}
  >
    <!-- Close button -->
    <div class="flex justify-end mb-8">
      <button
        onclick={() => menuOpen = false}
        aria-label="Close menu"
        title="Close menu"
        class="text-white text-sm uppercase tracking-wide"
      >
        Close ✕
      </button>
    </div>

    <!-- Menu content -->
    <nav class="flex flex-col gap-10">
      <!-- Primary -->
      <div>
        <h3 class="text-xs uppercase tracking-widest text-gray-400 mb-4">
          What we do
        </h3>
        <ul class="flex flex-col gap-4 text-2xl font-semibold">
          <li><a href="/services" onclick={() => menuOpen = false}>Services</a></li>
          <li><a href="/portfolio" onclick={() => menuOpen = false}>Portfolio</a></li>
          <li><a href="/process" onclick={() => menuOpen = false}>Our Process</a></li>
        </ul>
      </div>

      <!-- Secondary -->
      <div>
        <h3 class="text-xs uppercase tracking-widest text-gray-400 mb-4">
          Company
        </h3>
        <ul class="flex flex-col gap-3 text-lg">
          <li><a href="/about" onclick={() => menuOpen = false}>About Us</a></li>
          <li><a href="/locations" onclick={() => menuOpen = false}>Locations</a></li>
          <li><a href="/blog" onclick={() => menuOpen = false}>Blog</a></li>
          <li><a href="/contact" onclick={() => menuOpen = false}>Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
{/if}

</div>

