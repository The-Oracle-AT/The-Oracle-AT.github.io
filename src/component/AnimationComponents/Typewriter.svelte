 
<script>
	/**
 * This component represents a typewriter animation.
 * How to use: 
 * 1. If yopu want tp type multple lines, pass an array of strings to the the variable storing your text.
 * 2. If you want to type a single line, pass a string to the variable storing your text but add \n add breakpoints
 */
	let visible = false;
    export let typedtext = "This is a typewriter component"
	export let setSpeed = 1;
	$: currentSpeed = setSpeed;
	
    import { onMount } from 'svelte';
    onMount(() => {
        visible = true;
    });


	function typewriter(node, { speed = currentSpeed }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);
		return {
			duration,
			
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				if(text.charAt(i) === '\n') { // if the character is a newline, replace it with a <br> tag
					node.innerHTML = text.slice(0, i) + '<br>' + text.slice(i + 1);
				}
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

{#if visible}
	<div in:typewriter={{ speed:setSpeed}} style="white-space: pre-line;" class="typewriter">
		{typedtext}
	</div>
{/if}