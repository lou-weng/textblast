<h1>this is where you send messages</h1>
<a href="/create">Create a group</a>
<script>
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

<h1>this is where you send messages</h1>

<div class="sendPage">
	<div class="sendMessage">
		<h2>Group: {groupData.groupName}</h2>
		<h2>Invite link:</h2>
		<form action="/action_page.php">
			<input type="text" id="fname" name="fname" /><br /><br />
			<input type="submit" value="Click to send message to {groupData.groupName}" />
		</form>
	</div>

	<div class="groupInfo">
		<h1>Group Information</h1>
		<ul>
			{#each groupData.subscribers as subscriber}
				<li>
					{subscriber.firstName}
					{subscriber.lastName} ({subscriber.phoneNumber})
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.sendPage {
		flex-direction: row;
	}
</style>
