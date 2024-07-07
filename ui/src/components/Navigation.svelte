<script lang="ts">
    import { Link } from "svelte-routing";
    import Button from "./ui/Button.svelte";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { pb } from '../lib/pocketbase';
    
    let isLoggedIn = false;
    
    onMount(() => {
        checkAuthStatus();
    });
    
    function checkAuthStatus() {
        isLoggedIn = pb.authStore.isValid;
    }
    
    function handleLogout() {
        pb.authStore.clear();
        checkAuthStatus();
        // You might want to redirect the user after logout
        // window.location.href = "/";
        navigate('/');
    }
    </script>
    
    <nav class="relative z-10 border-b border-gray-800 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="flex gap-4 items-center">
                    <Link to="/" class="font-semibold text-xl text-gray-950">
                        Internsight
                    </Link>
    
                    <Link to="/dashboard" class="text-sm hover:underline">
                        Dashboard
                    </Link>
                    
                    <Link to="/projects" class="text-sm hover:underline">
                        Project
                    </Link>
                    
                    <Link to="/tasks" class="text-sm hover:underline">
                        Task
                    </Link>
                    
                    <Link to="/dashboard" class="text-sm hover:underline">
                        Course
                    </Link>
    
                    <Link to="/settings" class="text-sm hover:underline">
                        Settings
                    </Link>
                </div>
                <div class="flex items-center space-x-8">
                    {#if !isLoggedIn}
                        <Link to="/login">
                            <span class="text-gray-950 hover:text-gray-800 hover:underline">Login</span>
                        </Link>
                        <Link to="/register">
                            <Button>Register</Button>
                        </Link>
                    {:else}
                        <button on:click={handleLogout} class="text-gray-950 hover:text-gray-800 hover:underline">
                            Logout
                        </button>
                    {/if}
                </div>
            </div>
        </div>
    </nav>