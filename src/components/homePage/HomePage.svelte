<script>
	import Header from './Header.svelte';
	import Plus from '/src/components/icons/Plus.svelte';
</script>

<Header></Header>
<section class="hero">
	<div class="hr-wrap">
		<div class="left">
			<h1>Design The Best</h1>
			<h1>Version of YourSelf</h1>
			<p class="text"><span style="background:#28EB30"></span>Stay focus - Stay motive</p>
			<p class="text"><span style="background:#7a27d9"></span>Getting things Done</p>
			<p class="text"><span style="background:#eb7e7e"></span>Be healthy -Be fit - Be happy</p>

			<a class="gt-signup" href="/signup">Start Designing</a>
		</div>
		<div class="item" style="left: 610px; top: 29px;"><img src="/h1.webp" alt="logo" /></div>
	</div>
</section>
<section class="section02">
	<h1>With the Holistic Approach</h1>
	<div>
		<img src="/h2.png" alt="logo" />
	</div>
	<a href="/signup" class="trynow"> Try Now</a>
</section>
<section class="section03">
	<h1>or Explore</h1>
	<img src="/h3.png" alt="h3" />
</section>
<footer>
	<div class="ft-wrap">
		<a href="/" class="ft-logo"
			><svg
				width="35"
				height="41"
				viewBox="0 0 35 41"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0.0185547 4.66931C0.0185547 3.68029 0.411444 2.73177 1.11079 2.03242C1.81014 1.33307 2.75865 0.940186 3.74768 0.940186H20.8494C21.8381 0.941056 22.786 1.33452 23.4847 2.03406L33.7323 12.2767C34.0789 12.6235 34.3536 13.0351 34.5409 13.4882C34.7282 13.9412 34.8243 14.4267 34.8237 14.9169V36.9884C34.8237 37.9774 34.4308 38.9259 33.7315 39.6253C33.0321 40.3246 32.0836 40.7175 31.0946 40.7175H3.74768C2.75865 40.7175 1.81014 40.3246 1.11079 39.6253C0.411444 38.9259 0.0185547 37.9774 0.0185547 36.9884V4.66931ZM25.5009 18.3428C25.9954 18.3428 26.4697 18.5392 26.8194 18.8889C27.169 19.2386 27.3655 19.7128 27.3655 20.2073V31.3947C27.3655 31.8892 27.169 32.3635 26.8194 32.7132C26.4697 33.0628 25.9954 33.2593 25.5009 33.2593C25.0064 33.2593 24.5321 33.0628 24.1825 32.7132C23.8328 32.3635 23.6364 31.8892 23.6364 31.3947V20.2073C23.6364 19.7128 23.8328 19.2386 24.1825 18.8889C24.5321 18.5392 25.0064 18.3428 25.5009 18.3428ZM9.34137 28.2871C9.83588 28.2871 10.3101 28.4836 10.6598 28.8332C11.0095 29.1829 11.2059 29.6572 11.2059 30.1517V31.3947C11.2059 31.8892 11.0095 32.3635 10.6598 32.7132C10.3101 33.0628 9.83588 33.2593 9.34137 33.2593C8.84686 33.2593 8.3726 33.0628 8.02292 32.7132C7.67325 32.3635 7.47681 31.8892 7.47681 31.3947V30.1517C7.47681 29.6572 7.67325 29.1829 8.02292 28.8332C8.3726 28.4836 8.84686 28.2871 9.34137 28.2871ZM19.2857 25.1795C19.2857 24.685 19.0893 24.2107 18.7396 23.8611C18.3899 23.5114 17.9157 23.3149 17.4211 23.3149C16.9266 23.3149 16.4524 23.5114 16.1027 23.8611C15.753 24.2107 15.5566 24.685 15.5566 25.1795V31.3947C15.5566 31.8892 15.753 32.3635 16.1027 32.7132C16.4524 33.0628 16.9266 33.2593 17.4211 33.2593C17.9157 33.2593 18.3899 33.0628 18.7396 32.7132C19.0893 32.3635 19.2857 31.8892 19.2857 31.3947V25.1795Z"
					fill="#00AC47"
				/>
			</svg>
		</a>
		<a href="/">© 2023 Focus3x</a>
		<a href="/">Term of Service</a>
		<a href="/">Support</a>
		<a href="/">Help Center</a>
		<a href="/">Guide</a>
		<a href="/">About Us</a>
		<a href="/">Contact</a>
		<a href="/">Explore</a>
		<a href="/">Login</a>
		<a href="/">Sign up</a>
		<a href="/">Instagram</a>
	</div>
</footer>

<style>
	.hr-wrap {
		max-width: 1400px;
		margin: auto;
	}
	.hero {
		padding: 20px;
		position: relative;
		margin-top: 86px;
	}
	.left {
		padding-left: 20px;
		padding-top: 68px;
	}
	.gt-signup {
		border: 0;
		border-radius: 6px;
		color: #fff;
		padding: 15px 36px;
		font-weight: 700;
		font-size: 16px;
		background: #000000;
		margin-top: 20px;
		display: block;
		max-width: 268px;
	}
	.left h1 {
		font-size: 45px;
		line-height: 12px;
		font-weight: 900;
	}
	.item {
		position: absolute;
		border-radius: 12px;
		background: #fff;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
		left: 200px;
		top: 168px;
	}
	.item img {
		width: 100%;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
	}
	.text {
		padding: 15px;
		background: #fff;
		border-radius: 8px;
		margin-bottom: 12px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
		max-width: 268px;
		display: flex;
		align-items: center;
		border: solid 2px rgb(203, 211, 233);
	}
	.text span {
		width: 18px;
		height: 18px;
		border-radius: 8px;
		display: inline-block;
		margin-right: 12px;
	}

	.section02 {
		padding-top: 268px;
	}
	.section02 h1 {
		font-size: 68px;
		font-weight: 900;
		text-align: center;
	}
	.trynow {
		color: #fff;
		border-radius: 8px;
		background: #000;
		display: block;
		width: 50%;
		border: none;
		font-size: 36px;
		margin: auto;
		text-decoration: none;
		text-align: center;
	}
	.trynow:hover {
		opacity: 0.8;
	}
	.ft-wrap {
		max-width: 1400px;
		margin: auto;
		padding: 20px;
	}
	.ft-wrap a {
		padding: 20px;
		text-decoration: none;
		font-weight: 500;
		font-size: 15px;
		color: #8a8c95;
		position: relative;
	}
	.ft-wrap div {
		color: #595c6a;
		font-weight: 900;
	}
	footer {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
		margin-top: 36px;
	}
	.ft-logo svg {
		position: absolute;
		padding-right: 6px !important;
		top: 0;
	}
	.section03 h1 {
		font-size: 68px;
		font-weight: 900;
		text-align: center;
	}
	.gt-signup {
		text-align: center;
		text-decoration: none;
	}
</style>
