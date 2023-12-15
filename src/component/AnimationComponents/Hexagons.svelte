<script>
	import { quintOut } from 'svelte/easing';
	import { draw, fade } from 'svelte/transition';
	export let height = 150;
	export let width = 150;
	$: heightPx = `${height}px`;
	$: widthPx = `${width}px`;
	let hyp = 20;
	$: opp = (((hyp**2)/2)**0.5);
	$: hor = (opp) * 0.55;
	
	let condition = false;

	setInterval(() => (condition = !condition), 3000)
</script>
 

<svg viewBox="12 20 100 88" xmlns="http://www.w3.org/2000/svg" style="--boxHeight: {heightPx}; --boxWidth: {widthPx}" >

	{#if condition}
	<!--segment1-->
		<path 
		in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
		out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
			d="M{50-hor} {50-opp} h{-hyp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="1px"
			/>
		<path 
		in:draw="{{duration: 3000, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
				d="M50 50 l{-hor} {-opp} l{hor} {-opp}"
				fill="none"
				stroke="cornflowerblue"
				stroke-width="1px"
		/>


	<!--segment2-->
	<path 
		in:draw="{{duration: 3000, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
			d="M{50+hyp} 50 l{hor} {-opp} l{-hor} {-opp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="1px"
		/>
		<path 
	in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
	out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
		d="M{50+hyp + hor} {50-opp} h{hyp}"
		fill="none"
		stroke="cornflowerblue"
		stroke-width="1px"
		/>
		
	<!--segment3-->
		<path 
		in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
		out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
			d="M{50 + hyp + hor + hyp} {50 + opp} l{hor} {-opp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="1px"
			/>
		<path 
		in:draw="{{duration: 3000, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
			d="M{50 + hyp + hor} {50 + opp} h{hyp} l{hor} {opp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="1px"
			/>
	

	<!--segment4-->
		<path 
	in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
	out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
		d="M{50 + hyp + hor} {50 + opp + opp + opp} l{-hor} {opp}"
		fill="none"
		stroke="cornflowerblue"
		stroke-width="1px"
		/>
		<path 
		in:draw="{{duration: 3000, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
			d="M{50 + hyp} {50 + opp + opp} l{hor} {opp} h{hyp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="1px"
			/>

	<!--segment5-->
		<path 
	in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
	out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
		d="M{50 - hor } {50 + opp + opp + opp} l{hor} {opp}"
		fill="none"
		stroke="cornflowerblue"
		stroke-width="1px"
			/>
		<path 
		in:draw="{{duration: 3000, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
			d="M{50} {50 + opp + opp} l{-hor} {opp} h{-hyp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="1px"
			/>

	
	<!--segment6-->
		<path 
		in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
		out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
			d="M{50 - hor - hyp} {50 + opp} l{-hor} {opp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="1px"
			/>
		<path 
		in:draw="{{duration: 3000, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
			d="M{50 - hor} {50 + opp} h{-hyp} l{-hor} {-opp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="1px"
			/>
	
			<!--Hexagon-->
		<path class = "hexagon"
			in:draw="{{duration: 3000, easing: quintOut}}"
			out:fade="{{duration: 3000, easing: quintOut, delay: 0}}"
				d="M50 50 h{hyp} l{hor} {opp} l-{hor} {opp} h-{hyp}  l-{hor} -{opp} l{hor} -{opp} z"
				fill="none"
				stroke="cornflowerblue"
				stroke-width="1px"
			/>
	{/if}


</svg>

<style>
	svg {
		display: block;
		background-color: transparent;
		width: var(--boxWidth);
		height: var(--boxHeight);
		transform: perspective(1000px) rotateX(0deg);
		margin-top: -1em;

	}
	svg path {
		stroke: aliceblue;
		filter: drop-shadow( 0 0 0.5px white) 
		drop-shadow(0px 0px 0.5px rgb(41, 72, 252))
		drop-shadow(0 0px 0.5px rgb(67, 94, 250))
		drop-shadow(0 0px 0.5px rgb(116, 136, 250));
		transform: translateY(0px);

	}

</style>