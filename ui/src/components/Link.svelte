<script lang="ts">
    import { route, type Routes } from "../lib/store";
    
    export let to: Routes;
    export let className = '';

    function handleClick(event: MouseEvent) {
        event.preventDefault();
        route.set(to);
    }
</script>

<a href={to} on:click={handleClick} class={className}>
    <slot></slot>
</a>