<script>
	let email;
	let password;

	function signUp() {
		console.log('sign up');
	}
</script>

<h1>Login Page</h1>

<input value={email} />
<input value={password} />

<button on:click={signUp} />
