<script>
	import Button from '../../components/Button.svelte';
	function addRow() {
		data = [...data, [...newRow]];
		newRow = columns;
	}
	function deleteRow(rowToBeDeleted) {
		data = data.filter((row) => row != rowToBeDeleted);
	}
	let columns = ['Name', 'Email', 'Phone Number'];
	let data = [
		['John', 'john@example.com', '(353) 01 222 3333'],
		['Sarah', 'sarah@gmail.com', '(01) 22 888 4444'],
		['Afshin', 'afshin@mail.com', '(353) 22 87 8356']
	];
	let newRow = [...columns];
	let name = '';
</script>

<h1>User Page</h1>
<div class="signOut">
	<a href="/">Sign Out</a>
</div>
<p>List of Groups</p>
<!--<a href="/send">Send message</a>-->
<input bind:value={name} placeholder="Enter your Group Name" />
<div class="groupButtons">
	<Button buttonName={'Create Group'} />
	<Button buttonName={'Delete Group'} />
</div>

<div class="container">
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
				<button on:click={() => deleteRow(row)}>X</button>
			</tr>
		{/each}
		<tr style="color: grey">
			{#each newRow as column}
				<td contenteditable="true" bind:innerHTML={column} />
			{/each}
			<button on:click={addRow}>add</button>
		</tr>
		<pre style="background: #eee">{JSON.stringify(data, null, 2)}</pre>
	</table>
</div>

<style>
	h1 {
		color: green;
		font-size: 2em;
		font-weight: bold;
		text-align: left;
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
		text-align: right;
		font-family: sans-serif;
	}
	:placeholder-shown {
		font-size: 1em;
	}
	.container {
		width: 500px;
		background: #009579;
		align-self: right;
	}

	tr td:focus {
		background: #eee;
	}
</style>
