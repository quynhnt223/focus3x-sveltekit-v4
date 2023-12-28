<!-- Login.svelte -->
<script>
	import { auth } from '/src/firebase/firebase.js';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import Logo from '../../components/icons/Logo.svelte';
	import { userId } from '/src/store/userId.js';
	import PageLoading from '/src/components/pageLoad/PageLoading.svelte';

	let email = '';
	let password = '';
	let errorMessage = '';

	const login = async () => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			console.log('Login successful ' + user.uid);
		} catch (error) {
			console.error('Login error:', error.message);
			errorMessage = error.message;
		}
	};
	$: if ($userId !== null) {
		goto('/dashboard/md/today');
	}
</script>

{#if $userId === null}
	<div class="lg-wrap">
		<div class="lg-left">
			<div class="lg-head"><a href="/"><Logo></Logo></a></div>
			<div class="lg-form-wrap">
				<h3>Login to your Account</h3>
				{$userId}
				{#if errorMessage}
					<p class="error-message">{errorMessage}</p>
				{/if}
				<form on:submit|preventDefault={login}>
					<label>
						<div>Email</div>
						<input type="email" bind:value={email} />
					</label>

					<label>
						<div>Password</div>
						<input type="password" bind:value={password} />
					</label>

					<button type="submit">Login</button>

					<div class="forgot-password-link">
						<a class="lg-forgot" href="/forgot">Forgot Password?</a>
					</div>

					<div class="signup-link">
						Don't have an account? <a class="lg-signup" href="/signup">Sign Up</a>
					</div>
				</form>
			</div>
		</div>
		<div class="lg-right">
			<img src="/hr.jpg" alt="hr" />
		</div>
	</div>
{:else}
	<PageLoading></PageLoading>
{/if}

<style>
	.lg-head a {
		position: relative;
		display: block;

		z-index: 999;
	}
	.lg-wrap {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.lg-left {
		width: 468px;
		background: #ffffff;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		z-index: 99;
	}
	.lg-right {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: calc(100% - 468px);
		background: rgb(133, 138, 133);
	}
	.lg-head {
		padding-left: 20px;
		padding-top: 20px;
	}
	:global(.lg-head svg) {
		width: 136px !important;
	}
	.lg-form-wrap {
		padding: 20px;
	}
	.lg-form-wrap {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	form {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		width: 100%;
		max-width: 268px;
	}
	input {
		border: none;
		border-bottom: solid 2px #00ac47;
		display: block;
		width: 100%;
		outline: none;
		padding-top: 10px;
		font-size: 16px;
		margin-bottom: 20px;
	}
	button {
		padding: 16px;
		border: none;
		background: #000000;
		color: #fff;
		border-radius: 6px;
		font-size: 18px;
		cursor: pointer;
	}
	button:hover {
		background: #2c2929;
	}
	a {
		text-decoration: none;
	}
	.lg-signup {
		color: #00ac47;
		font-weight: 700;
	}
	.lg-forgot {
		color: #00ac47;
	}
	a:hover {
		opacity: 0.8;
	}
	.error-message {
		max-width: 268px;
		font-size: 15px;
		color: red;
		line-height: 16px;
	}
	label {
		color: #8a8c95;
		font-size: 14px;
		font-weight: 700;
	}
	.lg-right img {
		width: 100%;
	}
</style>
