<script>
    import * as THREE from 'three';
    import NET from 'vanta/dist/vanta.net.min.js';

    let vantaEffect;
    let node;

    import { onDestroy, onMount } from 'svelte';
    import First from './First.svelte';
    import Fourth from './Fourth.svelte';
    import Second from './Second.svelte';
    import Third from './Third.svelte';



    onMount(() => {
        //Adding an observer to the hidden elements
        const observer = new IntersectionObserver((entries) => {
            try {
                entries.forEach((entry) => {
                    console.log(entry);
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                })
            } catch (error) {
                console.log(error);
            }
        });
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => {observer.observe(element);});

        //Adding the background animation
        vantaEffect = NET({
            el: node,
            THREE: THREE,
            mouseControls: true,
            toucchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x20dca,
            backgroundColor: 0xe0022
        });
    });

    onDestroy(() => {
        if (vantaEffect) vantaEffect.destroy();
    });

</script>
<div class="main" bind:this={node}>

    <div class="foreground">
        <section class="hidden">
            <First/>
        </section>

        <section class="hidden">
            <Second/>
        </section>

        <section class="hidden">
            <Third/>
        </section>

        <section>
            <Fourth/>
        </section>
    </div>
   
</div>

<style>
       .main{
        position: relative;
        width:100%;
        height: 100%;

    }
    .foreground{
        display: grid;
        grid-template-columns: 1fr;
        gap: 10vh;
        width:100%;
        height: 100%;

        background-color: transparent;
    }
    .hidden {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }
    @media only screen and (max-width: 800px) {
    .main section {
        transform: scale(0.8);
    }
    }

</style>
