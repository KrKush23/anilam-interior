<script lang="ts">
  import { fly } from 'svelte/transition';
  import { inView } from '$lib/actions/useInView';

  let cardVisible = $state<[boolean, boolean, boolean]>([false, false, false]);

  function handleEnter(index: number) {
    cardVisible[index] = true;
  }
</script>

<section class="py-24 bg-gray-50">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-4xl font-semibold mb-6">Our Services</h2>
    <p class="text-gray-700 mb-8">
      From contemporary homes to sophisticated offices, we provide complete interior design services tailored to your vision.
    </p>

    <div class="grid md:grid-cols-3 gap-8">
      {#each [0, 1, 2] as i}
        <!-- @ts-ignore -->
        <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
             use:inView
             onenterView={() => handleEnter(i)}>
          {#if cardVisible[i]}
            <div in:fly={{ y: 20, duration: 800, opacity: 0 }}>
              <h3 class="text-xl font-semibold mb-2">
                {i === 0 ? 'Residential Design' : i === 1 ? 'Commercial Design' : 'Consultation & Planning'}
              </h3>
              <p>
                {i === 0
                  ? 'Elegant interior solutions for your home, combining comfort with modern aesthetics.'
                  : i === 1
                  ? 'Functional and stylish commercial spaces that enhance productivity and brand image.'
                  : 'Expert guidance to plan your space, layout, and decor for maximum impact.'}
              </p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
