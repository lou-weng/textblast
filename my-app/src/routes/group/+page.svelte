<script>
	import Button from '../../components/Button.svelte';
	import SmoothCorners from 'svelte-smooth-corners';
	function addRow() {
		data = [...data, [...newRow]];
		newRow = columns;
	}
	function sendMessage() {
		console.log(hi);
	}
	let columns = ['Group Name', 'Phone Number'];
	let data = [
		['John', '(353) 01 222 3333'],
		['Sarah', '(01) 22 888 4444'],
		['Afshin', '(353) 22 87 8356']
	];
	let newRow = [...columns];
	let name = '';
</script>

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

			{#each data as row}
				<tr>
					{#each row as cell}
						<td contenteditable="true" bind:innerHTML={cell} />
					{/each}
					<button on:click={() => sendMessage()}><a href="/send">Send!</a></button>
				</tr>
			{/each}
			<tr style="color: black">
				{#each newRow as column}
					<td contenteditable="true" bind:innerHTML={column} />
				{/each}
				<button on:click={addRow}>add</button>
			</tr>
		</table>
	</div>
</div>

<style>
	.userPage {
		color: green;
		font-size: 2em;
		font-weight: bold;
		font-family: sans-serif;
	}

	p {
		text-align: right;
		color: black;
		font-size: 1.5em;
		font-family: sans-serif;
		padding: 20px;
	}

	.groupButtons {
		text-align: left;
	}
	.signOut {
		color: green;
		font-size: 2em;
		font-weight: bold;
		font-family: sans-serif;
		display: flex;
		justify-content: space-between;
	}

	:placeholder-shown {
		font-size: 1.5em;
	}
	.container {
		display: flex;
		justify-content: right;
		border-radius: 10px;
	}

	tr td:focus {
		background: #eee;
	}
	.tableContent {
		background: #009579;
		border-radius: 20px;
		padding: 15px;
	}
	input {
		font-size: 1.5em;
	}

	.top {
		display: flex;
		justify-content: space-between;
	}
</style>
