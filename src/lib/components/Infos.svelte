<script>
	import Vr from './Vr.svelte';

	export let d_IpAdress;
	export let d_Adress;
	export let d_timeZone;
	export let d_ISP;
</script>

<div class="pointer-events-auto flex w-4/5 flex-col rounded-xl bg-white py-4 md:flex-row md:py-0">
	<div
		class="flex w-full flex-col px-6 py-1 pb-2 text-center md:mt-6 md:w-1/4 md:pb-6 md:text-left"
	>
		<p class="white">IP ADDRESS</p>
		<h2 class="leading-10">{d_IpAdress}</h2>
	</div>
	<Vr />
	<div
		class="flex w-full flex-col px-6 py-1 pb-2 text-center md:mt-6 md:w-1/4 md:pb-6 md:text-left"
	>
		<p class="white">LOCATION</p>
		<h2 class="leading-10">{d_Adress}</h2>
	</div>
	<Vr />
	<div
		class="flex w-full flex-col px-6 py-1 pb-2 text-center md:mt-6 md:w-1/4 md:pb-6 md:text-left"
	>
		<p class="white">TIME ZONE</p>
		<h2 class="leading-10">{d_timeZone}</h2>
	</div>
	<Vr />
	<div
		class="flex w-full flex-col px-6 py-1 pb-2 text-center md:mt-6 md:w-1/4 md:pb-6 md:text-left"
	>
		<p class="white">ISP</p>
		<h2 class="leading-10">{d_ISP}</h2>
	</div>
</div>
