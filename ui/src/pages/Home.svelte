<script>
  import Feature from "../components/Landing/Feature.svelte";
  import Usecase from "../components/Landing/Usecase.svelte";
  import BaseLayout from "../components/BaseLayout.svelte";
  import Hero from "../components/Landing/Hero.svelte";

  let demoVisible = false;

  function toggleDemo() {
    demoVisible = !demoVisible;
  }
</script>

<BaseLayout>
  <div class="bg-pattern absolute inset-x-0 top-0 -z-0 h-[700px]"></div>

  <Hero />

  <Feature />

  <Usecase />

</BaseLayout>
