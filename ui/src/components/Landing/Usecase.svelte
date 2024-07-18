<script>
  import Building from 'lucide-svelte/icons/building';
  import GraduationCap from 'lucide-svelte/icons/graduation-cap';
  import Users from 'lucide-svelte/icons/users';
  import Briefcase from 'lucide-svelte/icons/briefcase';

  
    const useCases = [
      {
        icon: Building,
        title: "Startups",
        description: "Ideal for startups looking to quickly prototype and launch MVPs with a solid, scalable foundation.",
      },
      {
        icon: GraduationCap,
        title: "Personal Projects",
        description: "Perfect for developers working on side projects, allowing you to focus on features rather than boilerplate setup."
      },
      {
        icon: Users,
        title: "Enterprise Applications",
        description: "Provides a consistent starting point for enterprise teams building internal tools or customer-facing applications."
      },
      {
        icon: Briefcase,
        title: "API-driven Applications",
        description: "Excellent base for building applications that require a powerful API backend with a responsive frontend."
      }
    ];
  </script>
  
  <section class="bg-white py-16">
    <div class="container max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-5/12 md:pr-12 mb-8 md:mb-0">
          <h2 class="text-4xl font-bold mb-4">Usecase</h2>
          <p class="text-xl text-gray-600 mb-6">
            Empowering developers to build fullstack applications faster.
          </p>
          <a href="#" class="text-orange-600 hover:underline font-semibold">Explore all use cases &rarr;</a>
        </div>
        <div class="md:w-7/12">
          <div class="space-y-8">
            {#each useCases as useCase}
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-4">
                  <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                    <svelte:component this={useCase.icon} class="w-5 h-5 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p class="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>