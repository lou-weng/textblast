<script>
	import Button from '../../components/Button.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	function sendMessage() {
		console.log(hi);
	}
	let columns = ['Group Name', 'Group Id'];
	let newRow = [...columns];
	let name = '';
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

<!-- {#each $apiData as data}
	<p>
		{data.groupName}
		{data.Id}
		{#each data.subscribers as subscribers}
			<p>{subscribers.phoneNumber}</p>
		{/each}
	</p>
{/each} -->

<div class="top">
	<div class="userPage">User Page</div>
	<div class="signOut">
		<a href="/">Sign Out</a>
	</div>
</div>
<p>List of Groups</p>
<!--<a href="/send">Send message</a>-->
<input bind:value={name} placeholder="Enter your Group Name" />
<div class="groupButtons">
	<Button buttonName={'Create Group'} />
	<Button buttonName={'Delete Group'} />
</div>

<div class="container">
	<div class="tableContent">
		<table>
			<tr>
				{#each columns as column}
					<th>{column}</th>
				{/each}
			</tr>

			{#each $apiData as row}
				<tr>
					<td>{row.groupName}</td>
					<td>{row.groupId}</td>
					<td><button on:click={() => sendMessage()}><a href="/send">Send!</a></button></td>
				</tr>
			{/each}
		</table>
	</div>
</div>
