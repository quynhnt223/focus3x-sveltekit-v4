<script>
	import Header from '../../components/homePage/Header.svelte';
</script>

<Header></Header>
<div class="background"><img src="/plan.svg" alt="bg" /></div>

<section class="pl-wrap">
	<div class="pl-left">
		<img src="/fr.webp" alt="fr" />
		<h2 class="free">Free</h2>
		<p class="free-price price">USD $0 / Month</p>
		<div class="pl-item le">Limit to 3 vision boards</div>
		<div class="pl-item le">No Hero Views</div>
		<div class="pl-item le">No Sync To the cloud</div>
		<a class="pl-submit" href="/">Select This Plan</a>
	</div>
	<div class="gap"></div>
	<div class="pl-right">
		<img src="/sp.webp" alt="sp" />
		<h2 class="pl-plus">Plus+</h2>
		<p class="price">USD $36 / Year</p>
		<div class="pl-item ri">Unlimited access</div>
		<div class="pl-item ri">hero views</div>
		<div class="pl-item ri">Sync to the clound</div>
		<div class="pl-item ri">Access to AI</div>
		<a class="pl-submit-plus" href="/">Select This Plan</a>
	</div>
</section>

<style>
	.background {
		position: absolute;
		top: 68px;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.background img {
		width: 100%;
	}
	.pl-left {
		border-radius: 24px;
		background: #fff;
		height: 86%;
		width: 368px;
		padding: 0 20px;
		position: relative;
	}
	.pl-right {
		border-radius: 24px;
		background: #fff;
		height: 86%;
		width: 368px;
		padding: 0 20px;
		position: relative;
	}
	.pl-wrap {
		display: flex;
		position: absolute;
		top: 68px;
		bottom: 0;
		left: 0;
		right: 0;
		justify-content: center;
		align-items: center;
	}
	.gap {
		height: 80%;
		width: 36px;
	}
	h2 {
		line-height: 20px;
	}
	.pl-right img {
		position: absolute;
		right: 12px;
		top: 12px;
		width: 86px;
	}
	.pl-left img {
		position: absolute;
		right: 12px;
		top: 12px;
		width: 86px;
	}
	.pl-submit {
		background: #000;
		color: #fff;
		border-radius: 6px;
		text-decoration: none;
		display: block;
		text-align: center;
		padding: 6px 15px;
		margin-top: 20px;
	}
	.pl-submit-plus {
		background: #00ac47;
		color: #fff;
		border-radius: 6px;
		text-decoration: none;
		display: block;
		text-align: center;
		padding: 6px 15px;
		margin-top: 20px;
	}
	.price {
		color: #8a8c95;
		font-weight: 300;
		font-size: 24px;
	}
	.pl-item {
		box-shadow:
			rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
			rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
		padding: 12px 15px;
		border-radius: 6px;
		background: #fff;
		line-height: 15px;
		border: solid 2px rgb(203, 211, 233);
		color: #8a8c95;
		margin-bottom: 12px;
		background-image: url('/check.svg');
		background-position: right 6px;
		background-repeat: no-repeat;
		/* Other background properties can be added here */
	}
	.free {
		color: rgb(144, 152, 144);
	}
	.free-price {
		color: rgb(208, 214, 208);
	}
	.pl-submit-plus:hover {
		opacity: 0.8;
	}
	.pl-plus {
		color: #00ac47;
	}
	.le {
		background-image: url('/check1.svg');
	}
</style>
