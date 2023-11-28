<script>
    import { onMount } from 'svelte';
    import Github from '../assets/Icons/Github.svelte';
    import StreamLine from './AnimationComponents/StreamLine.svelte';
    import First from './First.svelte';
    import Second from './Second.svelte';
    import Card from './card.svelte';



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

    const cardDetails = [
        { cardId: 1, title: "Skills", primaryBackground: "#3F0071",secondaryBackground: "#150050",},
        { cardId: 2, title: "Socials", primaryBackground: "#7752fe", secondaryBackground: "#190482",},
        { cardId: 3, title: "Other projects", primaryBackground: "#8e8ffa", secondaryBackground: "#7752fe",},
        { cardId: 4, title: "Fourth card", primaryBackground: "#810955", secondaryBackground: "#610c63",},
    ];
</script>
<div class="main">
    <section class="hidden">
        <div class="divider-text">
            <div><StreamLine lineHeight={200} /></div>
            <p>I specialize in both frontend and backend development, leveraging a diverse set of languages and technologies to bring ideas to life.My passion lies in crafting seamless user experiences and building robust, scalable applications. Explore the rest of the portfolio to see these skills in action!
        </div>
    </section>
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
        <Card title="Other projects" primaryBackground="#8e8ffa" secondaryBackground = "#7752fe">
            <div class="card-content-3" slot="details">
                Visit my github page...
                <a href="https://github.com/The-Oracle-AT?tab=repositories" target="_blank">
                    <Github size="24"/>
                </a>
            </div>
        </Card>
    </section>
        
    <section class="hidden">
        <Card title="Fourth card" primaryBackground="#810955" secondaryBackground = "#610c63">
            <div class="card-content" slot="details"></div>
        </Card>
    </section>

    <div class="hidden">
        Consectetur culpa elit Lorem ut magna proident sint. Consequat nulla ea laborum dolore Lorem anim labore commodo officia officia. Enim cupidatat occaecat dolore reprehenderit non veniam elit esse do nisi ad velit ad. Excepteur velit culpa magna elit tempor aliquip aliquip officia. Occaecat ipsum in aliqua nostrud culpa. Amet sit est mollit elit cupidatat non qui ad.Velit ipsum dolor irure laboris enim labore sit. Sit commodo duis reprehenderit irure ipsum culpa incididunt ea elit non. Ad sunt laboris veniam nisi elit amet ullamco. Et duis ut nulla aute do duis officia fugiat.
    </div>
</div>



<style>
    .card-content-3 {
		display: flex;
		flex-direction: row;

	}
    .main {
        display: grid;
        grid-column: 1;
        grid-gap: 2em;
        text-align: center;
        position: relative;
        
    }
    .main :nth-child(2) :nth-child(2){
        max-width: 50%;
        position: relative;
        left: 20%;
        top: 20%;
        background-color: transparent;
    }
    .hidden :nth-child(1){
        position: relative;

    }
    .divider-text {
        display: flex;
        flex-direction: row;
        position: relative;
        left: 50%;
        transform: translateX(-47%);
        max-width: 45%;
        height: fit-content;
        text-align: left;
        padding-top: 10vw;
        padding-bottom: 10vw;
    }

</style>
