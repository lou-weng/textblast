<script>
	let email;
	let password;

	function login() {
		console.log('login');
	}
</script>

<h1>Login Page</h1>

<input value={email} />
<input value={password} />

<button on:click={login} />
