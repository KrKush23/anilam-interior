<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section
  class="relative min-h-screen bg-cover bg-center flex items-center justify-center"
  style="background-image: url('/src/lib/assets/hero-bg.jpg');"
>
  <div class="absolute inset-0 bg-linear-to-r from-blue-900/70 via-blue-800/50 to-blue-900/70"></div>

  <div class="relative text-center px-6 max-w-4xl">
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        in:fly={{ y: 50, duration: 800, opacity: 0 }}>
      Transforming Spaces, Elevating Lifestyles
    </h1>

    <p class="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
       in:fly={{ y: 30, duration: 900, delay: 200, opacity: 0 }}>
      Anilam brings innovative interior design solutions to homes, offices, and commercial spaces with style and functionality.
    </p>

    <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      <a href="/services"
         class="px-6 py-3 bg-accent text-primary font-medium rounded shadow hover:bg-accent-dark transition"
         title="Explore Our Services"
         in:fly={{ y: 20, duration: 800, delay: 400, opacity: 0 }}>
        Our Services
      </a>
      <a href="/portfolio"
         class="px-6 py-3 border border-white text-white font-medium rounded shadow hover:bg-white hover:text-primary transition"
         title="View Our Portfolio"
         in:fly={{ y: 20, duration: 800, delay: 500, opacity: 0 }}>
        View Portfolio
      </a>
    </div>
  </div>
</section>
