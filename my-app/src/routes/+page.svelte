<script>
	import Button from '../components/Button.svelte';
</script>

<h1>Text Blast</h1>
<p>
	Lorem ipsum dolor sit amet. Ex quaerat enim et dolores placeat in dolorem quisquam. In voluptas
	voluptatum rem quam sapiente aut vitae repudiandae qui sint suscipit aut quia expedita quo aliquam
	mollitia. Aut sunt delectus aut eaque veritatis vel illum repudiandae aut iusto rerum et velit
	architecto est corrupti voluptatem.
</p>
<div class="signUp">
	<button on:click={() => sendMessage()}><a href="/group">Sign Up</a></button>
	<!--<Button buttonName={'Sign Up'}/>-->
</div>
<div class="signIn">
	<button on:click={() => sendMessage()}><a href="/send">Sign In</a></button>
	<!--<Button buttonName={'Sign In'} on:click={() => sendMessage()}><a href="/send">Send!</a> />-->
</div>

<style>
	h1 {
		color: green;
		font-size: 4em;
		font-weight: bold;
		text-align: center;
		font-family: sans-serif;
	}

	p {
		text-align: center;
		color: black;
		font-size: 1.5em;
		font-family: sans-serif;
		padding: 20px;
	}
	.signUp {
		text-align: left;
	}

	.signIn {
		text-align: right;
	}
</style>
