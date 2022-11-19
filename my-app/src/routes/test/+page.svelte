<script>
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	let apiData = writable([]);

	onMount(async () => {
		fetch('http://localhost:3000/test')
			.then((response) => response.json())
			.then((data) => {
				console.log(data.groups);
				apiData.set(data.groups);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<h1>Test Page for HTTPS Call</h1>

<h2>API CALL:</h2>

{#each $apiData as data}
	<p>{data.groupName}</p>
{/each}
