
<script>
	import Body from './component/Body.svelte';
	import Footer from './component/Footer.svelte';
	import Header from './component/Header.svelte';
	
</script>

<main>
	<Header></Header>

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



	
</style>