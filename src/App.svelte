<script>
	
    import Hexagons from './component/AnimationComponents/Hexagons.svelte';
    import ShootingStarBackground from './component/AnimationComponents/ShootingStarBackground.svelte';
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
	<ShootingStarBackground />
	<Hexagons />

	
	
</main>

<style>


	
</style>