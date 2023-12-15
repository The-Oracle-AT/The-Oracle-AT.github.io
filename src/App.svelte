<script>
	
    import HexagonGrid from './component/AnimationComponents/HexagonGrid.svelte';
    import Hexagons from './component/AnimationComponents/Hexagons.svelte';
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
	<HexagonGrid />
	<Hexagons />

	
	
</main>

<style>


	
</style>