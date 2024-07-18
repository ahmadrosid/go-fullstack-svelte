<script>
    import Briefcase from 'lucide-svelte/icons/briefcase';
    import CheckSquare from 'lucide-svelte/icons/square-check';
    import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
    import ServerCog from 'lucide-svelte/icons/server-cog';

    import RetroOutline from '../ui/RetroOutline.svelte';

    let features = [
      { icon: Briefcase, title: "Go Backend", description: "Leverage the power and efficiency of Go for your server-side logic, with a pre-configured structure for rapid development."},
      { icon: CheckSquare, title: "Pocketbase Integration", description: "Utilize Pocketbase as your backend, offering a robust database, authentication, and realtime APIs out of the box." },
      { icon: LayoutDashboard, title: "Svelte Frontend", description: "Create dynamic and reactive user interfaces with Svelte, providing a smooth and fast user experience." },
      { icon: ServerCog, title: "Pre-configured Setup", description: "Get up and running quickly with our carefully crafted boilerplate, saving you hours of initial setup and configuration." }
    ];
</script>

<div class="bg-gray-50 py-16">
        <div class="container max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {#each features as feature}
            <RetroOutline>
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mr-4">
                        <svelte:component this={feature.icon} class="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 class="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p class="text-gray-600">{feature.description}</p>
                </div>
            </RetroOutline>
        {/each}
        </div>
    </div>
</div>