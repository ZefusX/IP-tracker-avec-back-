<script lang="ts">
	import type { IPInfos } from '$lib';
	import Header from '$lib/components/Header.svelte';
	import Infos from '$lib/components/Infos.svelte';
	import Map from '$lib/components/Map.svelte';
	let ipInfos: IPInfos | null = null;
	let error = null;

	function handleResult(data: any) {
		ipInfos = data;
		error = null;
	}

	function handleError(err: any) {
		error = err;
		ipInfos = null;
	}
</script>

<div class="relative h-1/3">
	<Header onResult={handleResult} onError={handleError} />
</div>
<div class="relative h-2/3">
	{#if ipInfos}
		<Map long={ipInfos.location.lng} lat={ipInfos.location.lat} />
	{:else}
		<Map long="9" lat="49" />
	{/if}
</div>
{#if ipInfos}
	<div
		class="pointer-events-none absolute left-0 top-1/3 z-10 flex w-full -translate-y-1/3 justify-center drop-shadow-sm md:-translate-y-1/2"
	>
		<Infos
			d_IpAdress={ipInfos.ip}
			d_Adress={ipInfos.location.city}
			d_timeZone={ipInfos.location.timezone}
			d_ISP={ipInfos.isp}
		/>
	</div>
{/if}
