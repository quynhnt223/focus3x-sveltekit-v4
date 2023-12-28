<script>
	import { auth } from '/src/firebase/firebase.js';
	import {
		signOut,
		updatePassword,
		reauthenticateWithCredential,
		EmailAuthProvider
	} from 'firebase/auth';
	import { goto } from '$app/navigation';

	let oldPassword = '';
	let newPassword = '';
	let confirmPassword = '';
	let errorMessage = '';
	let errorMessageFirebase = '';
	let successMessageFirebase = '';
	let successReauthFirebase = '';
	let errorReauthFirebase = '';

	const user = auth.currentUser;
	const currentEmail = 'quynhnt22368@gmail.com';
	let currentPassword = '';

	function signingOut() {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				goto('/');
			})
			.catch((error) => {
				// An error happened.
			});
	}

	// TODO(you): prompt the user to re-provide their sign-in credentials
	$: credential = EmailAuthProvider.credential(currentEmail, currentPassword);

	async function reauth() {
		reauthenticateWithCredential(user, credential)
			.then(() => {
				// User re-authenticated.
				successReauthFirebase = 'success reauth';
			})
			.catch((error) => {
				// An error ocurred
				// ...
				errorReauthFirebase = error.message;
			});
	}

	async function changePassword() {
		try {
			// Check if the new password and confirm password match
			if (newPassword !== confirmPassword) {
				errorMessage = 'New password and confirm password do not match';
				return;
			}
			const user = auth.currentUser;

			updatePassword(user, newPassword)
				.then(() => {
					// Update successful.
					console.log('Password changed successfully');
					successMessageFirebase = 'Password changed successfully';
				})
				.catch((error) => {
					// An error ocurred
					// ...
					console.log(error.message);
					errorMessageFirebase = error.message;
				});
		} catch (error) {}
	}
</script>

<button class="signout-btn" on:click={signingOut}>Sign Out</button>
<div class="ac-wrap">
	<h3>My Account</h3>
	<form class="ac-form">
		<label for="email">Email:</label>
		<input type="email" id="email" placeholder="quynhnt223@gmail.com" />
		<label for="email">Old Password</label>
		<input type="password" bind:value={currentPassword} />
		<label for="email">New Password</label>
		<input type="password" bind:value={newPassword} />
		<label for="email">Confirm New Password</label>
		<input type="password" bind:value={confirmPassword} />
		<p>{errorMessage}</p>
		<p>{errorMessageFirebase}</p>
		<p>{successMessageFirebase}</p>
		<button class="save-btn" on:click={changePassword}>Save Change</button>
		<button class="save-btn" on:click={reauth}>re auth</button>
		{successReauthFirebase}
		{errorReauthFirebase}
	</form>
	<h3>My Current Plan</h3>

	<div class="cr-plan-card">
		<h1>Plus +</h1>
		<p>Renew Date: 12-06-2024</p>
	</div>
	<button class="cancel-renew">Cancel My Renew</button>
</div>

<style>
	.signout-btn {
		position: fixed;
		top: 12px;
		right: 12px;
		padding: 12px 36px;
		background: #00ac47;
		color: #fff;
		border-radius: 6px;
		cursor: pointer;
		border: none;
		font-weight: 500;
		font-size: 18px;
	}
	.signout-btn:hover {
		opacity: 0.8;
	}
	.ac-wrap {
		max-width: 268px;
		margin: auto;
		position: relative;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		padding-bottom: 68px;
	}
	.ac-form input {
		display: block;
		width: 100%;
		border-radius: 6px;
		padding: 9px;
		border: 1px solid rgb(200, 200, 200);
	}
	.cr-plan-card {
		border-radius: 16px;
		background: #2d3238;
		min-height: 200px;
		display: block;
		padding: 20px;
		line-height: 16px;
		color: #fff;
		font-weight: 300;
		box-shadow:
			rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
			rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	}
	.cancel-renew {
		margin-top: 20px;
		padding: 20px;
		background: #312d47;
		color: #fff;
		font-size: 18px;
		border-radius: 6px;
		cursor: pointer;
		border: none;
		display: block;
	}
	.ac-form label {
		color: #8a8c95;
		font-weight: 600;
	}
	.save-btn {
		margin-top: 20px;
		padding: 12px;
		background: #312d47;
		color: #fff;
		font-size: 16px;
		border-radius: 6px;
		cursor: pointer;
		border: none;
		display: block;
	}
</style>
