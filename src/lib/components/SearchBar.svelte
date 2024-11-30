<script lang="ts">
	import getInfos from '$lib';
	import { ChevronRight } from 'lucide-svelte';
	let inputData = '';
	export let onResult: (data: any) => void;
	export let onError: (error: string) => void;

	async function getIpInfos() {
		try {
			const data = await getInfos(inputData); // Appelle l'API
			onResult(data); // Transmet les données au parent
		} catch (err: any) {
			onError(err.message); // Transmet l'erreur au parent
		}
	}
</script>

<form class="w-full" on:submit|preventDefault={getIpInfos}>
	<div class="max-w-2xl">
		<div class="flex space-x-4">
			<div class="flex w-full overflow-hidden rounded-xl">
				<input
					type="text"
					class="w-full rounded-xl rounded-r-none p-1 px-4"
					placeholder="Search for any IP address or domain"
					bind:value={inputData}
				/>
				<button
					type="submit"
					class="rounded-r-xl bg-black px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:bg-[color:hsl(0,0%,17%)] active:scale-90"
				>
					<ChevronRight />
				</button>
			</div>
		</div>
	</div>
</form>
