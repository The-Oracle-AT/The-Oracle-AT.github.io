<script>
	import { writable } from 'svelte/store';

	const progress = writable(0);
</script>

<progress value={$progress} />

<button on:click={() => progress.set(0)}>
	0%
</button>

<button on:click={() => progress.set(0.25)}>
	25%
</button>

<button on:click={() => progress.set(0.5)}>
	50%
</button>

<button on:click={() => progress.set(0.75)}>
	75%
</button>

<button on:click={() => progress.set(1)}>
	100%
</button>

<style>
	progress {
		display: float;
        float:left;
		width: 100%;
	}
</style>
