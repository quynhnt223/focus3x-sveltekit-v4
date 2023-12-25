<script>
	import Logo from '/src/components/icons/Logo.svelte';
</script>

<header>
	<div class="hd-wrap">
		<a href="/" class="logo"><Logo></Logo></a>
		<div class="nav">
			<a href="/science">The Science</a>
			<a href="/demo">Demo</a>
			<a href="/plan">Plan</a>
			<a href="/login">Login</a>
			<a class="signup" href="/signup">Sign up</a>
		</div>
	</div>
</header>

<style>
	.hd-wrap {
		max-width: 1400px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 68px;
	}
	header {
		height: 68px;
		background: #ffffff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}
	.logo {
		width: 168px;
		padding-left: 20px;
		height: 68px;
		display: flex;
		align-items: center;
	}
	.logo img {
		max-width: 100%;
	}
	.nav {
		display: flex;
		align-items: center;
		padding-right: 20px;
	}
	.nav a {
		text-decoration: none;
		font-weight: 600;
		font-size: 16px;
		padding-left: 20px;
		padding-right: 20px;
		color: #3c3f4f;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.nav a:hover {
		color: #00ac47;
	}
	.nav button {
		width: 36px;
		height: 36px;
		border: none;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.signup {
		border: solid 2px #e4e6e8;
		border-radius: 50px;
		padding-top: 2px !important;
		padding-bottom: 2px !important;
	}
	.logo:hover {
		opacity: 0.8;
	}
</style>
