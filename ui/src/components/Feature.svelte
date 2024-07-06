<script>
    import { Briefcase, CheckSquare, GraduationCap, TrendingUp } from 'lucide-svelte';
    import RetroOutline from './RetroOutline.svelte';

    let features = [
      { icon: Briefcase, title: "Project tracking", description: "Track and manage all your internship projects in one place, ensuring smooth progress and timely completion." },
      { icon: CheckSquare, title: "Task management", description: "Assign, monitor, and review tasks for your interns, keeping everything organized and on schedule." },
      { icon: GraduationCap, title: "Course integration", description: "Seamlessly integrate academic courses with internship work, aligning practical experience with theoretical knowledge." },
      { icon: TrendingUp, title: "Progress monitoring", description: "Monitor and analyze intern performance with real-time progress tracking and insightful analytics." }
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