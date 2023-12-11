<script>
    import { onMount } from 'svelte';
    import StreamLine from './AnimationComponents/StreamLine.svelte';
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
    });

</script>
<div class="main">

    <section class="hidden">
        <First/>
         
    </section>
    <section class="hidden">
        <Second/>
    </section>
    <section class="hidden">
        <div class="divider-text">
            <div><StreamLine/></div>
            <p>Feel free to reach out for collaboration, discussions, or just to say hello!</p>
        </div>
    </section>   
    <section class="hidden">
        <Third/>
    </section>
    <section>
        <Fourth/>
    </section>   
</div>

<style>
    .main{
        display: grid;
        grid-template-columns: 1fr;
        gap: 10vh;
        width:100%;
        height: 100%;
    }
    .hidden {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .hidden:nth-child(3) .divider-text{
        font-size: 200%;
        text-align: left;
        max-width: 480px;
    }
    @media only screen and (max-width: 800px) {
    .main section {
        transform: scale(0.8);
    }
    }

</style>
