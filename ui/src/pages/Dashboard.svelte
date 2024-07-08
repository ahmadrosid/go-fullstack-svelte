<script>
import Button from "../components/ui/Button.svelte";
import RetroOutline from "../components/ui/RetroOutline.svelte";
import PlusIcon from 'lucide-svelte/icons/plus';
import BaseLayout from "../components/BaseLayout.svelte";
import { pb } from '../lib/pocketbase';

import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

let name = '';

onMount(async () => {
    if (!pb.authStore.isValid) {
        navigate('/login');
        return;
    }

    const user = pb.authStore.model;
    console.log('user', user);
    if (user) {
        name = user.username;
    }
});

</script>

<BaseLayout>

<div class="bg-pattern absolute inset-x-0 top-0 -z-0 h-[280px] border-b border-gray-500"></div>

<div class="container mx-auto max-w-6xl px-4 pb-12 relative">
    <div class="py-12 pb-4">
        <h1 class="text-4xl font-bold">Welcome back {name}!</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
        <RetroOutline>
            <div class="p-6">
                <div class="text-xl font-bold">Projects</div>
                <div class="text-4xl font-bold">3</div>
                <div class="text-sm text-gray-600">Progres 50%</div>
            </div>
        </RetroOutline>
        <RetroOutline>
            <div class="p-6">
                <div class="text-xl font-bold">Tasks</div>
                <div class="text-4xl font-bold">25</div>
                <div class="text-sm text-gray-600">8 Remaining</div>
            </div>
        </RetroOutline>
        <RetroOutline>
            <div class="p-6">
                <div class="text-xl font-bold">Project</div>
                <div class="text-4xl font-bold">3</div>
                <div class="text-sm text-gray-600">15 Lessons completed</div>
            </div>
        </RetroOutline>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6">
        <RetroOutline childClassName="p-0">
            <div class="text-xl font-bold border-b border-gray-800 p-3">Recent activity</div>
            <div class="p-4">
                <ul class="space-y-2 list-inside">
                    <li>
                        <h3 class="font-semibold">Complete task DBC-1</h3>
                        <p class="text-sm">Lesson intro database course</p>
                    </li>
                    <li>
                        <h3 class="font-semibold">Start task Project-A</h3>
                        <p class="text-sm">Setup database schema</p>
                    </li>
                    <li>
                        <h3 class="font-semibold">Start task Project-B</h3>
                        <p class="text-sm">Finish deployment</p>
                    </li>
                </ul>
            </div>
        </RetroOutline>
        <RetroOutline childClassName="p-0">
            <div class="text-xl font-bold border-b border-gray-800 p-3">Next task</div>
            <div class="p-4">
                <ul class="space-y-2 list-inside">
                    <li>
                        <h3 class="font-semibold">Review and merge pull requests</h3>
                    </li>
                    <li>
                        <h3 class="font-semibold">Update user authentication module</h3>
                    </li>
                    <li>
                        <h3 class="font-semibold">Conduct code review for Project-B</h3>
                    </li>
                    <li>
                        <h3 class="font-semibold">Optimize database queries</h3>
                    </li>
                </ul>
            </div>
        </RetroOutline>
    </div>

    <div class="py-8">
        <RetroOutline className="w-full" childClassName="p-0">
            <div class="border-b border-gray-800 p-3">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-bold ">
                        Notes
                    </h2>
                    <div>
                        <Button className="inline-flex items-center gap-2 pl-3"> <PlusIcon size="20"/> Add note</Button>
                    </div>
                </div>
            </div>
            <div class="px-4">
                <ul class="space-y-2 py-4 list-inside">
                    <li>
                        <h3 class="font-semibold">Review and merge pull requests</h3>
                    </li>
                    <li>
                        <h3 class="font-semibold">Update user authentication module</h3>
                    </li>
                    <li>
                        <h3 class="font-semibold">Conduct code review for Project-B</h3>
                    </li>
                    <li>
                        <h3 class="font-semibold">Optimize database queries</h3>
                    </li>
                </ul>
            </div>
        </RetroOutline>
    </div>
</div>
</BaseLayout>
