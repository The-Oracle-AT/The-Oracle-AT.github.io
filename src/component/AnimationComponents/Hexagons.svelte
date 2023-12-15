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
</script>

<button on:click={() => condition = !condition }>
	{opp}
</button>

<svg viewBox="13 20 94 88" xmlns="http://www.w3.org/2000/svg" style="--boxHeight: {heightPx}; --boxWidth: {widthPx}" >

	{#if condition}
	<!--segment1-->
	<path 
	in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
	out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
		d="M{50-hor} {50-opp} h{-hyp}"
		fill="none"
		stroke="cornflowerblue"
		stroke-width="2px"
		/>
		<path 
		in:draw="{{duration: 1500, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
				d="M50 50 l{-hor} {-opp} l{hor} {-opp}"
				fill="none"
				stroke="cornflowerblue"
				stroke-width="2px"
				/>

	<!--segment2-->
	<path 
	in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
	out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
		d="M{50+hyp + hor} {50-opp} h{hyp}"
		fill="none"
		stroke="cornflowerblue"
		stroke-width="2px"
		/>
		<path 
		in:draw="{{duration: 1500, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
			d="M{50+hyp} 50 l{hor} {-opp} l{-hor} {-opp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="2px"
		/>

	
	<!--segment3-->
	<path 
	in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
	out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
		d="M{50 + hyp + hor + hyp} {50 + opp} l{hor} {-opp}"
		fill="none"
		stroke="cornflowerblue"
		stroke-width="2px"
		/>
		<path 
		in:draw="{{duration: 1500, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
			d="M{50 + hyp + hor} {50 + opp} h{hyp} l{hor} {opp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="2px"
			/>

	
	<!--segment4-->
	<path 
	in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
	out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
		d="M{50 + hyp + hor} {50 + opp + opp + opp} l{-hor} {opp}"
		fill="none"
		stroke="cornflowerblue"
		stroke-width="2px"
		/>
		<path 
		in:draw="{{duration: 1500, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
			d="M{50 + hyp} {50 + opp + opp} l{hor} {opp} h{hyp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="2px"
			/>

	
	<!--segment5-->
		<path 
	in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
	out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
		d="M{50 - hor } {50 + opp + opp + opp} l{hor} {opp}"
		fill="none"
		stroke="cornflowerblue"
		stroke-width="2px"
			/>
		<path 
		in:draw="{{duration: 1500, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
			d="M{50} {50 + opp + opp} l{-hor} {opp} h{-hyp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="2px"
			/>

	
	<!--segment6-->
		<path 
		in:draw="{{duration: 750, easing: quintOut, delay: 1250}}"
		out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
			d="M{50 - hor - hyp} {50 + opp} l{-hor} {opp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="2px"
			/>
		<path 
		in:draw="{{duration: 1500, easing: quintOut, delay: 1000}}"
		out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
			d="M{50 - hor} {50 + opp} h{-hyp} l{-hor} {-opp}"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="2px"
			/>
	<!--Hexagon-->
		<path class = "hexagon"
			in:draw="{{duration: 1500, easing: quintOut}}"
			out:fade="{{duration: 1500, easing: quintOut, delay: 0}}"
				d="M50 50 h{hyp} l{hor} {opp} l-{hor} {opp} h-{hyp}  l-{hor} -{opp} l{hor} -{opp} z"
				fill="none"
				stroke="cornflowerblue"
				stroke-width="2px"
			/>
	{/if}


</svg>

<style>
	svg {
		display: block;
		background-color: black;
		width: var(--boxWidth);
		height: var(--boxHeight)

	}
	svg path {
		stroke: white;
		stroke-linecap: round;
		filter: drop-shadow( 0 0 1px white) 
		drop-shadow(0 0 1px #123fff)
		drop-shadow(0 0 2px blue)

	}
	svg path:nth-child(1){
		z-index: 15;
	}
</style>