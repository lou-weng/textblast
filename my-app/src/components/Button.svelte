<script>
	export let type = 'primary';
	export let buttonName;
</script>

<button class={type}>
	<slot>{buttonName}</slot>
</button>

<style>
	button {
		border: 0;
		cursor: pointer;
		text-align: center;
		border-radius: 6px;
		padding: 8px 12px;
		font-weight: bold;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0, 2);
	}
</style>
