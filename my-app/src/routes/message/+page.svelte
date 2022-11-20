<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	let apiData = writable([]);

	onMount(async () => {
		fetch(`http://localhost:3000/test`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.groups[0]);
				apiData.set(data.groups[0]);
			})
			.catch((e) => {
				console.log(e);
				return [];
			});
	});
	console.log($apiData.groupName);

	let groupData = {
		groupName: 'bucs kids',
		groupId: 1,
		subscribers: [
			{
				id: 1,
				firstName: 'Shannon',
				lastName: 'Kao',
				phoneNumber: '6047829839'
			},
			{
				id: 2,
				firstName: 'Sue',
				lastName: 'Lee',
				phoneNumber: '6047297349'
			}
		],
		messages: [
			{
				id: 1,
				textBody: 'hey thanks for subscribing',
				sent: 'feb 1',
				groupId: 1
			},
			{
				id: 2,
				textBody: "hey it's me again",
				sent: 'feb 1',
				groupId: 1
			}
		]
	};
</script>

<h1>Send a new message</h1>

<div class="messagePage">
	<div class="sendMessage">
		<h2>Group: {$apiData.groupName}</h2>
		<h2>Invite link:</h2>
		<form action="/action_page.php">
			<input class="textMessage" type="text" id="fname" name="fname" /><br /><br />
			<input type="submit" value="Click to send message to {groupData.groupName}" />
		</form>
	</div>

	<div class="groupInfo">
		<h1>Group Information</h1>
		<ul>
			<!-- {#each $apiData.subscribers as subscriber}
				<li>
					{subscriber.firstName}
					{subscriber.lastName} ({subscriber.phoneNumber})
				</li>
			{/each} -->
		</ul>
	</div>
</div>

<style>
	.messagePage {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.sendMessage {
		border: solid black 2px;
		width: 400px;
	}
	.groupInfo {
		border: solid black 2px;
		width: 400px;
	}

	.textMessage {
		width: 330px;
		height: 100px;
	}
</style>
