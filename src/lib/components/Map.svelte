<script lang="ts">
	export let long;
	export let lat;
	import { MapPin } from 'lucide-svelte';
	import { MapLibre, Marker, Popup } from 'svelte-maplibre';
	// Import an icon from Lucide-Svelte

	const markers = [
		{
			lngLat: [long, lat],
			label: 'IP',
			name: 'IP'
		}
	];
</script>

<div class="h-full w-full">
	<MapLibre
		center={[long, lat]}
		zoom={13}
		class="map"
		standardControls
		style="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
	>
		{#each markers as { lngLat, name }}
			<Marker {lngLat} draggable>
				<!-- Lucide-Svelte icon for the marker -->
				<div class="custom-marker">
					<MapPin color="black" size={32} />
				</div>
				<Popup offset={[0, -10]}>
					<div class="text-lg font-bold">{name}</div>
				</Popup>
			</Marker>
		{/each}
	</MapLibre>
</div>

<style>
	:global(.map) {
		height: 1080px;
	}
</style>
