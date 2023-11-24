<script>
    import Astro from '../../assets/Icons/Astro.svelte';
    import CSS from '../../assets/Icons/CSS.svelte';
    import Express from '../../assets/Icons/Express.svelte';
    import JS from '../../assets/Icons/JS.svelte';
    import Python from '../../assets/Icons/Python.svelte';
    import R from '../../assets/Icons/R.svelte';
    import React from '../../assets/Icons/React.svelte';
    import Svelte from '../../assets/Icons/Svelte.svelte';
    import Tailwind from '../../assets/Icons/Tailwind.svelte';
    let size = 50;



</script>
<ul>
    <li><JS {size}/></li>
    <li><CSS {size}/></li>
    <li><Astro {size}/></li>
    <li><Svelte {size}/></li>
    <li><React {size}/></li>
    <li><Tailwind {size}/></li>
    <li><Express {size}/></li>
    <li><Python {size}/></li>
    <li><R {size}/></li>
</ul>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        padding: 0;
        font-weight: bold;
    }

    li {
        margin: 0.5em;
    }

</style>