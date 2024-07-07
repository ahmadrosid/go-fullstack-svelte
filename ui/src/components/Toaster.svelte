<script lang="ts">
	import { getToastState, type ToastType } from '../lib/toast';
  import Toast from './Toast.svelte';

	const toastState = getToastState();
	let toasts: ToastType[] = [];
	
	$: toastState.subscribe(value => {
		toasts = value;
	});
</script>

<div class="absolute z-20 right-2 bottom-2 flex flex-col gap-2">
	{#each toasts as toast (toast.id)}
		<Toast {toast} />
	{/each}
</div>