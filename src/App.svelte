
<script>
	import Body from './component/Body.svelte';
	import Footer from './component/Footer.svelte';
	import Header from './component/Header.svelte';
	
</script>

<main>
	<Header>
		<span slot="other-header-content" class="header-text">
			<h1>Welcome to my portfolio</h1>
			<p>Look around and explore the site...</p>
		</span>
	</Header>

	<Body />
	
	<Footer>
		<span slot="other-footer-content" class="footer-text">
			<p>Thanks for visiting my portfolio!</p>
		</span>
	</Footer>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.header-text {
		font-size: 1.5em;
	}
	.header-text p {
		font-size: 0.5em;
		font-weight: normal;
	}
	
</style>