<script>
	import Explore from '../icons/Explore.svelte';
	import MyDay from '../icons/MyDay.svelte';
	import MyGoal from '../icons/MyGoal.svelte';
	import VisionBoard from '../icons/VisionBoard.svelte';
	import MyCoach from '../icons/MyCoach.svelte';
	import Account from '../icons/Account.svelte';
	import Help from '../icons/Help.svelte';
	import Theme from '../icons/Theme.svelte';
	import FullScreen from '../icons/FullScreen.svelte';
	import LogoSmall from '../icons/LogoSmall.svelte';
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import { activeLinkId } from '/src/store/activeLink.js';

	let hoverTooltip = null;

	function handleHover(button) {
		hoverTooltip = button;
	}

	function handleMouseLeave() {
		hoverTooltip = null;
	}

	let menuItems = [
		{ id: 'md', href: '/dashboard/md', label: 'My Day', component: MyDay, class2: 'btn' },
		{
			id: 'vb',
			href: '/dashboard/vb/j',
			label: 'Vision Board',
			component: VisionBoard,
			class2: 'btn'
		},
		{ id: 'mg', href: '/dashboard/mg/g1', label: 'My Goal', component: MyGoal, class2: 'btn' },
		{ id: 'ex', href: '/dashboard/ex/h', label: 'Explore', component: Explore, class2: 'btn' },
		{ id: 'mc', href: '/dashboard/mc/h', label: 'My Coach', component: MyCoach, class2: 'btn' },
		{ id: 'fu', href: '', label: 'FullScreen', component: FullScreen, class2: 'full' },
		{ id: 'th', href: '/dashboard/th', label: 'Theme', component: Theme, class2: 'theme' },
		{ id: 'he', href: '/dashboard/he', label: 'Help', component: Help, class2: 'help' },
		{ id: 'ac', href: '/dashboard/ac', label: 'MyAccount', component: Account, class2: 'account' },
		{ id: 'lg', href: '', label: 'Logo', component: LogoSmall, class2: 'logo' }
	];

	// Full-screen function
	function fullScreenFunction() {
		// Check if Fullscreen API is available
		const elem = document.documentElement;

		if (document.fullscreenEnabled) {
			if (!document.fullscreenElement) {
				elem
					.requestFullscreen()
					.then(() => {
						console.log('Entered fullscreen mode');
					})
					.catch((err) => {
						console.error('Error entering fullscreen mode:', err);
					});
			} else {
				document
					.exitFullscreen()
					.then(() => {
						console.log('Exited fullscreen mode');
					})
					.catch((err) => {
						console.error('Error exiting fullscreen mode:', err);
					});
			}
		} else {
			console.error('Fullscreen API is not supported in this browser');
		}
	}

	// Function to handle click events on the FullScreen button
	function handleFullClick(label) {
		if (label === 'FullScreen') {
			fullScreenFunction();
		}
	}
</script>

<div class="wrap">
	{#each menuItems as { id, href, label, component, class2 }}
		<a
			on:click={() => handleFullClick(label)}
			class="{class2} md-item"
			{href}
			class:active={id === $activeLinkId}
			on:mouseover={() => handleHover(label)}
			on:mouseleave={() => handleMouseLeave()}
		>
			<svelte:component this={component} />
			{#if hoverTooltip === label}
				<span class="tooltiptext">{label}</span>
			{/if}
		</a>
	{/each}
</div>

<style>
	:global(.active) {
		background: #6b7077;
	}

	.md-item {
		width: 30px;
		height: 30px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100px;
		margin-top: 12px;
		white-space: nowrap;
	}
	:global(.md-item svg:hover) {
		opacity: 0.6;
	}
	.wrap {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		background: #265aa1;
		background: linear-gradient(180deg, #353d46 0%, #282b2f 100%);
		width: 55px;
		align-items: center;
	}
	:global(.md-item svg) {
		fill: #c6c8bc;
	}
	.account {
		position: absolute;
		bottom: 36px;
	}
	.help {
		position: absolute;
		bottom: 72px;
	}
	.theme {
		position: absolute;
		bottom: 108px;
	}
	.full {
		position: absolute;
		bottom: 45%;
	}
	:global(.full svg) {
		fill: #6af36a !important;
	}
	.tooltiptext {
		position: absolute;
		padding: 6px 12px;
		color: #fff;
		border-radius: 3px;
		left: 55px;
		font-size: 12px;
		font-weight: 600;
		background: linear-gradient(93.47deg, #212427 0%, #464f5a 110.84%);
		border-radius: 8px;
	}
	.logo {
		position: absolute;
		bottom: 0;
	}
	:global(.md-item svg) {
		width: 18px;
		height: 18px;
	}
</style>
