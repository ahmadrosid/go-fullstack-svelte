<script>
  import { XIcon } from "lucide-svelte";
  import Feature from "../components/Feature.svelte";
  import Usecase from "../components/Usecase.svelte";
  import RetroOutline from "../components/RetroOutline.svelte";
  import BaseLayout from "../components/BaseLayout.svelte";

  let demoVisible = false;

  function toggleDemo() {
    demoVisible = !demoVisible;
  }
</script>

<BaseLayout>
  <div class="bg-pattern absolute inset-x-0 top-0 -z-0 h-[700px]"></div>

  <div class="container mx-auto max-w-6xl px-4 relative">
    <main>
      <div class="py-16">
        <h1 class="text-5xl font-bold text-center max-w-4xl mx-auto">
          Intersight: All-in-one dashboard for internship management
        </h1>
        <p class="text-xl text-center mt-4">
          Simplify student oversight in one intuitive platform
        </p>
        <div class="text-center pt-8">
          <div class="relative inline-block mr-4">
            <button
              on:click={toggleDemo}
              class="bg-black text-white px-4 py-2 hover:underline relative z-10"
            >
              See demo
            </button>
            <div
              class="absolute left-1 top-1 -right-1 -bottom-1 bg-white border-2 border-gray-800"
              aria-hidden="true"
            ></div>
          </div>
          <a href="#" class="hover:underline">Documentation</a>
        </div>
      </div>

      <div class="pb-12">
        <RetroOutline>
          <img src="/demo.png" alt="Intersight" />
        </RetroOutline>
      </div>
    </main>
  </div>

  <Feature />

  <Usecase />

  {#if demoVisible}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-transparent p-4 max-w-3xl w-full">
        <RetroOutline className="w-full">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold">Intersight Demo</h2>
            <button class="hover:text-gray-800" on:click={toggleDemo}>
              <XIcon />
            </button>
          </div>
          <div>Iframe content goes here!</div>
        </RetroOutline>
      </div>
    </div>
  {/if}
</BaseLayout>
