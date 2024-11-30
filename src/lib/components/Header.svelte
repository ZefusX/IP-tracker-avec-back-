<script lang="ts">
	import SearchBar from './SearchBar.svelte';
	export let onResult: (data: any) => void;
	export let onError: (error: string) => void;
</script>

<div class="flex min-h-screen w-full flex-col items-center gap-4 bg-bg-pattern text-center">
	<div class=" mt-4 w-full">
		<h1 class="text-[24px] md:text-[38px]">IP Address Tracker</h1>
	</div>
	<div class="flex w-4/5 justify-center md:w-2/4">
		<SearchBar {onResult} {onError} />
	</div>
</div>
